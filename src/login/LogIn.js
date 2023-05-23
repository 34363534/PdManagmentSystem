import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Log() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const hist = useNavigate();
  function Handler(e) {
    let data = {username,password};
    console.log(data);
    e.preventDefault();
    fetch("http://localhost:8081/api/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json(); 
      })
      .then(res => {
        console.log(res);
        if (res.token) { 
          hist("/add")
        }
       else{
        console.log("user not found")
       }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={Handler}>
        <br />
        <input type="text" placeholder="Enter Your Name"
        onChange={(e)=>{setUsername(e.target.value)}}
        name = "username"
        value = {username}
        />
        <br /><br />
        <input type="text" placeholder="Enter password"
         onChange={(e)=>{setPassword(e.target.value)}}
         name = "username"
         value = {password}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Log;
