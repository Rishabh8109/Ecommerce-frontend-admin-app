import React , {useState} from 'react';
import { Heading } from '../StyledComponent/GlobalStyle';
import Button from '@material-ui/core/Button';
import Modal from './Component/ModalBOx';
import Snackbar from '../../components/assets/SnackBar';
import {useSelector} from 'react-redux';
import {
    Card,
   CardBody,
    CardHeader
} from 'reactstrap';
import EmptyCategory from '../../components/EmptyRecord';
import DataTable from './DataTable';


function Category() {
    const [modal, setModal] = useState(false);
    const createCategoryState = useSelector(state => state.createCategory);
    const deleteCategoryState = useSelector(state => state.deleteCategory);
    const [open , setOpen] = useState(false);
  
    const handleclose = () => {
      setOpen(false);
    }
   
     //Open modal
      const toggle = () => setModal(!modal);
    return (
         <>
            <Snackbar 
               variant="success"
               open={createCategoryState.alert && open}
               handleclose={handleclose}
               message ={createCategoryState.message || deleteCategoryState.message}
               setOpen={setOpen}
             />
          <Modal toggle={toggle} modal={modal} setModal={setModal} setOpen={setOpen}/>
          <div className="row">
           <div className="col-12 p-3">
            <Heading>Category</Heading>
              <Card>
               <CardHeader>
                 <Button variant="contained" color="primary" onClick={toggle} className="float-right">Add category</Button>
               </CardHeader>
               <CardBody>
                   <DataTable modal={modal}/>
               </CardBody>
              </Card>
            </div> 
         </div>
        
       </>

    )
} 

export default Category;
