import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import {
  getproductRequest,
  getproductSuccess,
  getproductFailed,
  deleteproductRequest,
  deleteproductSuccess,
  deleteproductFailed,
} from "../../../stateManager/redux/AuthenticationState/product/productAction";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "../../../components/assets/Backdrop";
import ProductDetails from "./modal/ProductDetails";


export default function DataTable(props) {
  const {modalOpen, alert} = props;

  const token = localStorage.getItem("token");
  const [modal, setModal] = useState(false);

  const [rows, setrows] = useState([]);
  
  // initalState
  const initialState = useSelector((state) => state.category);
  const createProductState = useSelector((state) => state.createProduct);
  const deleteProductState = useSelector((state) => state.deleteProduct);
  const dispatch = useDispatch();
  
  // producDetails state
  const [productDetails , setProductDetails] = useState([]);

  
  // header init
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchurl = "http://localhost:5000/api/products"
  useEffect(() => {
    dispatch(getproductRequest());
    const abortController = new AbortController();
    const signal = abortController.signal;
    axios({
      signal: signal,
      method: "get",
      url: fetchurl,
      headers: headers,
    })
      .then((res) => {
        dispatch(getproductSuccess(res.data));
        setrows(res.data.products);
      })
      .catch((error) => {
        dispatch(getproductFailed());
      });

    return () => {
      abortController.abort();
      console.log("unmounted");
    };
  }, [modalOpen , createProductState.isCreated , deleteProductState.isDeleted]);

  
  // show productDetail on modal

  const showProductDetails = (productId) => {
    dispatch(getproductRequest());
    axios({
      method : "get",
      url : `http://localhost:5000/api/products/${productId}`,
      headers : headers
    })
    .then(res =>{
       dispatch(getproductSuccess(res.data.products));
       setProductDetails(res.data.products);
    })
    .catch((error) => {
        console.log(error);
        dispatch(getproductFailed());
        throw error;
    });
    setModal(true)
}


  // Record delete function initialization

  const DeletedReocrds = (productId) =>{
    deleteproductRequest();
     axios({
       method : "delete",
       url : `http://localhost:5000/api/products/Delete_product/${productId}`,
       headers : headers
     }).then(res => {
       dispatch(deleteproductSuccess(res.data.message));
     }).catch(err => {
        dispatch(deleteproductFailed(err.response.data.error))
        console.log(err);
     })
  }
   

  // get sorted paragraph

  const getParagraph = (description) => {
     let words;
      var breakWord = description.split(" ").length / 3;
      var eachWord = description.split(" ");
       words = eachWord.slice(0 , breakWord).join(" ");
    
    return words;

  }


  
  return ( 
    <>
      <ProductDetails 
         openModal={modal}
         setModal={setModal}
         productDetails={productDetails}
      />
      <TableContainer className="shadow-sm">
      <Table aria-label="simple table" >
        <TableHead className="bg-light">
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>see Details</TableCell>
          </TableRow>
        </TableHead>
        {initialState.loading ? (
          <Backdrop />
        ) : (
          <>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row._id} >
                  <TableCell>{row._id}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.product_name}
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell className="description">{getParagraph(row.description)}........</TableCell>
                    {
                      row.category.map(({category_name}) => (
                            <TableCell>{category_name}</TableCell>
                      ))
                    }
                  <TableCell>
                     <IconButton onClick={() => DeletedReocrds(row._id)}>
                       <DeleteIcon />
                     </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => showProductDetails(row._id)}>
                      <ArrowForwardIosOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </TableContainer>
    </>
  );
}
