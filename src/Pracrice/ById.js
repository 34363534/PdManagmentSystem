import {Table} from 'react-bootstrap';

function Tb1(){
    const user = [
       {id:1,
        name:"mukesh",
        email:"mukesh@gmail.com",
        mobile:989778788},
        { id:2,
        name:"mukesh",
        email:"mukesh@gmail.com",
        mobile:989778788},
        {id:3,
        name:"mukesh",
        email:"mukesh@gmail.com",
        mobile:989778788},
        {id:4,
        name:"mukesh",
        email:"mukesh@gmail.com",
        mobile:989778788}
    ]
    return(
  <div>  
    <Table striped variant='dark'>
    <tbody>
     <tr>
     <th>name</th>
     <th>email</th>
     <th>mobile</th>
     </tr>
    
{   
     user.map((et,i)=>
     et.id === 2?
     <tr key={i}>
               <td>{et.name}</td>                  
               <td>{et.email}</td>                 
               <td>{et.mobile}</td>
     </tr>:null
        
    )
}
</tbody>
</Table>
</div>
    )
}
export default Tb1;