import React, { useEffect, useState } from "react";
import { Alert, Button, Fade, Table } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddProduct from "./AddPd";
import { Link } from "react-router-dom";

function EditProduct() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    
  }, []);

  function show() {
    fetch("http://localhost:8080/pd/get")
      .then((response) => response.json())
      .then((res) => {
        setResult(res);
        console.warn(res);
      });
  }
  let handleDelete = (id) => {
    fetch("http://localhost:8080/pd/del/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
        show();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <th>Product Name</th>
            <th>Product Discription</th>
            <th>Product price</th>
            <th>Product Status</th>
            <th>Delete Product</th>
          </tr>

          {result.map((et, i) => (
            <tr key={i}>
              <td>{et.pname}</td>
              <td>{et.pdisc}</td>
              <td>{et.pprice}</td>
              <td>{et.pstatus}</td>
              <td>
              
               <Link to={"edit/"+ et.id} className="btn btn-danger m-1">Edit</Link>
                <DeleteIcon onClick={() => handleDelete(et.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button  style={{ textAlign: "center" }} onClick={show}>Get Product</Button>
    </>
  );
}
export default EditProduct;
