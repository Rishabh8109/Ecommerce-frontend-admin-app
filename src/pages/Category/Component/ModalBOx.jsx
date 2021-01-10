import React , {useState , useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Heading , SubTitle} from '../../StyledComponent/GlobalStyle';
import Button from '@material-ui/core/Button';
import axios from 'axios';
 import {useSelector , useDispatch} from 'react-redux';
 import {
  createCategoryRequest,
  createCategorySuccess,
  createCategoryFailed
 } from '../../../stateManager/redux/AuthenticationState/category/categoryAction';

import {
    Form,
    FormGroup,
    Card,
    Input,
  } from 'reactstrap';

function ModalBOx({...props}) {
    const [category , setCategory] = useState('');
    const [parentcategoryId , setparentcategoryId] = useState('');
    const [selectCategory , setSelectCategory] = useState([]);
    const [Image  , setbrandImage] = useState('');
    const token = localStorage.getItem('token');
    const headers = {
        'Authorization' : `Bearer ${token}`,
    }
    const categoryState = useSelector(state => state.category);
  

    const dispatch = useDispatch();

    //distrucure init states
    const {modal , toggle , setModal  ,setOpen} = props;

   // handle upload image

   const handleImage = e => {
    setbrandImage(e.target.files[0]);
  }
    
  
   
      // get category for select option
      useEffect(() => {
        axios({
          method : 'get',
          url : 'http://localhost:5000/api/category',
          headers : headers
        })
        .then(res => {
            setSelectCategory(res.data.category);
        }).catch(error => {
           console.log(error)
        })
      },[modal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCategoryRequest());
        
              const formData = new FormData();
              formData.append('category_name' , category);
              formData.append('parentId' , parentcategoryId);
              formData.append('brandImage' ,Image);
       
              axios({
                  method : 'POST',
                  url : 'http://localhost:5000/api/category/createCategory',
                  headers : {
                    'Authorization' : `Bearer ${token}`
                  },
                  data : formData
              }).then(res => {
                dispatch(createCategorySuccess(res.data.message));
                setOpen(true);
              }).catch(err => {
                // dispatch(createCategoryFailed(err.response.data.error));
                 console.log(err)
              })
                // clear all input feilds
          setCategory('');
          setModal(false);
   }
   
  
    return (
      <> 
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Category</ModalHeader>
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <SubTitle>Category name</SubTitle>
              <FormGroup className="mb-4">
                <input
                  type="text"
                  placeholder="Category name"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </FormGroup>
              <SubTitle>Select Category</SubTitle>
              <FormGroup>
                 <select name="select-category" onChange={(e) => setparentcategoryId(e.target.value)} className="form-control">
                    <option>select category</option>
                   {
                     selectCategory.map(({category_name , _id , children}) => (
                       < >
                         <option value={_id} >{category_name}</option>
                           {
                             children.length > 0 && children.map(({category_name , _id}) => (
                               <option value={_id} key={_id}>{category_name}</option>
                             ))
                           }
                       </>
                     ))
                   }
                 </select>
              </FormGroup>
              <SubTitle>brand Image</SubTitle>
              <input
                type="file"
                id="contained-button-file"
                name="brandImage"
                onChange={handleImage}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" variant='contained' color="primary" >
                 Add category
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </>
    );
}

export default ModalBOx;
