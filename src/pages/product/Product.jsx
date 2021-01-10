import React , {useState} from "react";
import { Heading } from "../StyledComponent/GlobalStyle";
import { useSelector } from "react-redux";
import { Card, CardBody, CardHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import Modal from './component/Modalbox';
import DataTable from "./component/DataTable";
import Empty from '../../components/EmptyRecord';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Loaders from "../../components/Loader";

function Product() {
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(true);
  const createProductState = useSelector((state) => state.createProduct);
  const deleteProductState = useSelector((state) => state.deleteProduct);
  const ProductState = useSelector((state) => state.product);
  
  const toggle = () => setModal(!modal);
   
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
       { createProductState.loading || deleteProductState.loading || ProductState.loading  && <Loaders />}
       <Snackbar open={open && createProductState.alert} autoHideDuration={6000} onClose={handleClose} className="snackbar" >
         <Alert onClose={handleClose} severity="success">
            {createProductState.message}
         </Alert>
      </Snackbar>
      <Modal
        toggle={toggle}
        modal={modal}
        setModal={setModal}
        setOpen={setOpen}
      />
      <div className="row">
        <div className="col-12 p-3">
          <Heading>Products</Heading>
          <Card>
            <CardHeader>
              <Button variant="contained" color="primary" onClick={toggle} className="float-right">
                Add Products
              </Button>
            </CardHeader>
            <CardBody>
                    <DataTable 
                      modalOpen={modal}
                      alert={alert}
                    />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Product;
