import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

 function Homepp(){

  const [pname, setPname] = useState("");
  const [pdisc, setPdisc] = useState("");
  const [pprice, setPprice] = useState(0);
  const [pstatus, setPstatus] = useState("");
  const[message, setMessage] = useState();
  const {id} = useParams();
     useEffect(()=>{
      fetch("http://localhost:8080/pd/get/"+id)
      .then((respo)=>{
        respo.json()
        .then((res)=>{
         setPname(res.pname);
         setPdisc(res.pdisc);
        setPprice(res.pprice);
        setPstatus(res.pstatus);
      }).catch((error)=>{
        console.log(error);
      })
    })
     },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = {
      pname: pname,
      pdisc: pdisc,
      pprice: pprice,
      pstatus: pstatus
    };

    fetch(`http://localhost:8080/pd/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product updated successfully:', data);
        setMessage("Product updated successfully")
      }).catch((error)=>{
        console.log(error); 
    })

  }

  return (
    <div>
      <div className="Container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-5  ">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
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
                  <button style={{ textAlign: "center" }}  className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepp;