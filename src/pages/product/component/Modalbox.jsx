import React , {useState , useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Heading , SubTitle} from '../../StyledComponent/GlobalStyle';
import Button from '@material-ui/core/Button';
import axios from 'axios';
 import {useSelector , useDispatch} from 'react-redux';
 import {
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFailed,
} from "../../../stateManager/redux/AuthenticationState/category/categoryAction";

 import {
  createproductRequest,
  createproductSuccess,
  createproductFailed,
} from "../../../stateManager/redux/AuthenticationState/product/productAction";



import {
    Form,
    FormGroup,
    Card,
    Input,
  } from 'reactstrap';

function Modalbox({...props}) {
    const  [rows , setRows] = useState([]);
    const  [categoryId , setCategoryId] = useState('');
    const  [description , setDescription] = useState('');
    const [Image  , setbrandImage] = useState([]);
    const categoryState = useSelector(state => state.category);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const headers = {
        'Authorization' : `Bearer ${token}`,
    }

    //distrucure init states
    const {modal , toggle , setModal  ,setOpen} = props;

    const productEl = React.createRef();
    const priceEl = React.createRef();
  

     
    useEffect(() => {
      getCategoryRequest();
      axios({
        method : 'get',
        url : 'http://localhost:5000/api/category',
        headers : headers
      })
      .then(res => {
          setRows(res.data.category);
          dispatch(getCategorySuccess());
      }).catch(error => {
         dispatch(getCategoryFailed(error));
      })
    
    },[]);
   
    const handleSubmit = (e) => {
        e.preventDefault();
          dispatch(createproductRequest());
         var product_name = productEl.current.value; 
         var price = priceEl.current.value; 
         var category_Id = categoryId;

        const formData = new FormData();
          
        formData.append('product_name' , product_name);
        formData.append('price' , price);
        formData.append('description' ,description);
        formData.append('category' , category_Id);
        for (const key of Object.keys(Image)) {
          formData.append('productImage' , Image[key]);
      }
       
        
        axios({
          method : 'post',
          url : 'http://localhost:5000/api/products/create_product',
          headers : headers,
          data : formData
        }).then(res => {
            dispatch(createproductSuccess(res.data.message));
        }).catch(err => {
           console.log(err);
        })

        // clear all input feilds
          setModal(false);
    }
  // handle Image
  const handleImage = e => {
    setbrandImage([
      ...Image,
      e.target.files[0]
    ]);
   
  }

  // get child categorydata
  const categoryData = []; 
  const getChildCategory = (categories) => {
    
      if(categories === undefined){
        return null;
      } else {
         return categories.map(category => {    
             categoryData.push({
              id : category._id,
              category_name : category.category_name 
            })
          });
      }
    
   }

   const getChildCategoryTwo = (categories) => {
      if(categories === undefined){
         return null;
      } else {
        categories.map(category => {
           getChildCategory(category.children)
        })
      }
    }
   
    rows.map(row => {
        getChildCategoryTwo(row.children);
    });
  
     
    return (
      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Category</ModalHeader>
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <SubTitle>Product name</SubTitle>
              <FormGroup className="mb-4">
                <input
                  type="text"
                  placeholder="Product name"
                  className="form-control"
                  ref={productEl}
                />
              </FormGroup>
              <SubTitle>Price</SubTitle>
              <FormGroup className="mb-4">
                <input
                  type="Number"
                  placeholder="price"
                  className="form-control"
                  ref={priceEl}
                />
              </FormGroup>

              <SubTitle>Description</SubTitle>
              <FormGroup className="mb-4">
                <Input
                  type="textarea"
                  name="text"
                  placeholder="Description"
                  onChange={e => setDescription(e.target.value)}
                />
              </FormGroup>

              <SubTitle>Select Category</SubTitle>
              <FormGroup>
                <Input type="select" onChange={e => setCategoryId(e.target.value)}>
                  <option value="">select category</option>
                     {
                       categoryData.map(row => (
                          <React.Fragment key={row.id}>
                            <option value={row.id}>{row.category_name}</option>
                          </React.Fragment>
                       ))
                     }  
                </Input>
              </FormGroup>

              <SubTitle>brand Image</SubTitle>
              <input type="file" id="contained-button-file" name="productImage" onChange={handleImage} multiple/>
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
              <p> {Image.name}</p>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" variant="contained" color="primary">
                Add product
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </>
    );
}

export default Modalbox;
