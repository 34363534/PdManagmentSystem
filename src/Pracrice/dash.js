import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Tb from './Hooks';
import Tb1 from './ById';




function BasicExample() {
const [name, setName] = useState(true)
const [som, setSom] = useState(true)


function Hn(){
    setName(
      <div>
      <Tb />
      </div>       
  )
}
function Hn1(){
    setSom(
      <div>
      <Tb1 />
      </div>     
  )
}
  return (
    <div>
        <h1>It is Simple filter</h1>
        
        <br/><br/>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={Hn}>ByName</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={Hn1} >ById</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>"nothing"} >Something</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h3>{name}</h3>
    <h3>{som}</h3>
</div>
  );
}

export default BasicExample;