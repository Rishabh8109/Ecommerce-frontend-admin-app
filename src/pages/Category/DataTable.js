import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFailed,
} from "../../stateManager/redux/AuthenticationState/category/categoryAction";
import Backdrop from "../../components/assets/Backdrop";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Action from "./Component/Action";

export default function DataTable({ modal }) {


  const token = localStorage.getItem("token");
  const {isDeleted , loading} = useSelector((state) => state.category);
  const createCategoryState = useSelector(state => state.createCategory);
  const deleteCategoryState = useSelector(state => state.deleteCategory);
  
    
  const dispatch = useDispatch();

  const [rows, setrows] = useState([]);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    dispatch(getCategoryRequest());
    axios({
      method: "get",
      url: "http://localhost:5000/api/category",
      headers: headers,
    })
      .then((res) => {
        setrows(res.data.category);
        dispatch(getCategorySuccess(res.data));
      })
      .catch((error) => {

         dispatch(getCategoryFailed(error));
      });
  }, [modal , deleteCategoryState.isDeleted , createCategoryState.isCreated]);

  
 


  return (
    <>
      {loading ? <Backdrop /> : (
        <TableContainer className="shadow-sm">
        <Table aria-label="simple table">
          <TableHead className="bg-light">
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Subcategory</TableCell>
              <TableCell>childcategory</TableCell>
            </TableRow>
          </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.category_name}
                    </TableCell>
  
                    <TableCell>
                      <FormControl variant="outlined" className="w-50">
                        <InputLabel id="demo-simple-select-label">
                          sub-categories
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                        >
                          {row.children.map(({ category_name, _id }) => (
                            <MenuItem value={category_name} key={_id}>
                              {category_name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
  
                    <TableCell>
                      <FormControl variant="outlined" className="w-50">
                        <InputLabel id="demo-simple-select-label">
                          child-categories
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                        >
                          {
                            row.children.length < 0 ? (
                              <MenuItem>
                                No category
                              </MenuItem>
                            ) : (
                                row.children.map(({ children, _id }) => (
                                  <div key={_id}>
                                    {children.map(
                                      ({ category_name, _id, brandImage }) => (
                                        <MenuItem
                                          value={_id}
                                          key={_id}
                                          className="menuItem"
                                        >
                                          <img
                                            src={brandImage}
                                            width="30px"
                                            height="30px"
                                            className="brandImage"
                                          />
                                          <span className="ml-3">{category_name}</span>
                                          <Action 
                                            categoryId={_id}
                                          />
                                        </MenuItem>
                                      )
                                    )}
                                  </div>
                                ))
                            )
                          }
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
        </Table>
      </TableContainer>
      )}
    </>
  );
}
