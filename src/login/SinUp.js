import { useState } from "react";

function SinUp() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const data = { name, username, password };
  console.log(data)
  function pds(e) {
    e.preventDefault();

    const data = { name, username, password };

    fetch("http://localhost:8081/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage("User registered successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to register user");
      });
  }

  return (
    <div>
      <div className="Container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-5  ">
            <div className="card">
              <div className="card-header fs-3 text-center">Register</div>
              <div className="card-body">
                <form onSubmit={pds}>
                  <div className="message">
                    {message && <p>{message}</p>}
                  </div>
                  <div className=" form-group mb-3">
                    <label className="col-form-label"></label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
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

export default SinUp;
