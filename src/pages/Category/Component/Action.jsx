import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  DeleteCategoryRequest,
  DeleteCategorySuccess,
  DeleteCategoryFailed,
} from "../../../stateManager/redux/AuthenticationState/category/categoryAction";

function Action(props) {
  const dispatch = useDispatch();
  const { categoryId } = props;
  var url = `http://localhost:5000/api/category/deletCategory/${categoryId}`;

  const DeleteChildCategory = () => {
    dispatch(DeleteCategoryRequest());
    axios({
      method: "DELETE",
      url: url,
    })
      .then((res) => {
        dispatch(DeleteCategorySuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(DeleteCategoryFailed(err));
      });
  };

  return (
    <>
      <IconButton className="ml-5 menuIcon" onClick={DeleteChildCategory}>
        <DeleteIcon style={{ fontSize: "18px" }} />
      </IconButton>
      <IconButton className=" menuIcon">
        <EditIcon style={{ fontSize: "18px" }} />
      </IconButton>
    </>
  );
}

export default Action;
