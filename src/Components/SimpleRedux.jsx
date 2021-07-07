import React from "react";
import { ListGroup ,Button} from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux';
function SimpleReduxExample() {
    const state=useSelector(state=>state)
    const dispatch = useDispatch();
    const ChngeName=()=>{
        dispatch({
            type:"USERNAME",
            username:"Fahad Khan"
        });
    }
    console.log(state)
  return (
    <div className="text-center d-flex align-items-center align-content-center flex-md-column my-5">
      <h1>Fetch And Change Data</h1>
      <ListGroup>
        <ListGroup.Item>{state.username}</ListGroup.Item>
      </ListGroup>
      <Button variant="info" className="my-5" onClick={ChngeName}>Link</Button>
    </div>
  );
}

export default SimpleReduxExample;
