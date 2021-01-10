import React  from 'react';
import {Title , Sub_Title , Para , Category , Modal, ModalHeader, ModalBody ,Image ,Images } from '../../../StyledComponent/GlobalStyle';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import Backdrop from '../../../../components/assets/Backdrop';
import {useSelector} from 'react-redux';

function ProductDetails(props) {
    const {openModal  , productDetails  , setModal} = props
    const {product_name , price , description , productImages} = productDetails;
 
    
  return (
    <>
        {openModal && <Backdrop />}
        <Modal isOpen={openModal} className="shadow-lg">
             <ModalHeader  className="d-flex justify-content-between">
                     <Sub_Title>Product Details</Sub_Title>
                    <ClearOutlinedIcon onClick={() => setModal(false)} style={{cursor : "pointer" }}/>
                 </ModalHeader>
             <ModalBody>
              <div className="row">
                <div className="col-sm-4 mx-auto pl-5">
                    { productImages  && productImages.map((img , index) => (
                       <React.Fragment key={img._id}>
                         {index === 0 &&  <Image src={img.url} key={img._id} alt="productImage" className="img-responsive" />}
                       </React.Fragment>
                    ))}     
                    
                </div>
                <div className="col-sm-8 pt-5 ">
                    <Title>{product_name}</Title> 
                    <Sub_Title>${price}</Sub_Title>  
                    <Para>{description}</Para> 
                    <span className="text-dark">category</span> : <Category>Realme</Category> 
                    <hr></hr>
                    <div className="productImages d-flex justify-content-center align-items-center">
                       { productImages  && productImages.map((img) => (
                       <React.Fragment key={img._id}>
                         <Images  src={img.url} alt="productImages" />
                       </React.Fragment>
                      ))} 
                     </div>
                </div>
              </div>
             </ModalBody>

        </Modal>
    </>
  )
}

export default ProductDetails
