import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [pname, setPname] = useState("");
  const [pdisc, setPdisc] = useState("");
  const [pprice, setPprice] = useState("");
  const [pstatus, setPstatus] = useState("");
  const [message, setMessage] = useState("");
  const nater = useNavigate();


  function pds(e) {
    e.preventDefault();
    let data = { pname, pdisc, pprice, pstatus };
    const ret = 
      fetch("http://localhost:8080/pd/post", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => console.log(response))
    
        setMessage("Product added successfully");
        toast("wow");
  }
  return (
    <div>
      <div className="Container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-5  ">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>

              <div className="card-body">
                <form onSubmit={pds}>
                  <div className="message">
                    {message ? <p>{message}</p> : null}
                  </div>
                  <div className=" form-group mb-3">
                    <label className="col-form-label">Enter Product Name</label>
                    <input
                      value={pname}
                      onChange={(e) => {
                        setPname(e.target.value);

                      }}
                      type="text"
                      name="pname"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Product Discription</label>
                    <input
                      value={pdisc}
                      onChange={(e) => setPdisc(e.target.value)}
                      type="text"
                      name="pdisc"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Product Price</label>
                    <input
                      value={pprice}
                      onChange={(e) => setPprice(e.target.value)}
                      type="text"
                      name="pprice"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Product Status</label>
                    <input
                      value={pstatus}
                      onChange={(e) => setPstatus(e.target.value)}
                      type="text"
                      name="pstatus"
                      className="form-control"
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
