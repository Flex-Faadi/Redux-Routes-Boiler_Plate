import React ,{useEffect,useState}from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/ApiCallReducer/action";
function ApiCallReducer() {
  const [loader, setLoader] = useState(true)
  const state = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getData());
  }, [])

  setTimeout(() => {
    setLoader(false)
  }, 2000);
  console.log("Todos=>", state.todos);
  const TodosData = state.todos;
  return (
    <div className="text-center my-5">
      <h1>Fetch Data From Api and get From redux</h1>
      {
        loader ? <Spinner animation="border" />  :
      <ListGroup>
        {TodosData.map((e, i) => {  
         return <ListGroup.Item key={i}>{e.name}</ListGroup.Item>;
        })}
      </ListGroup>
      }
    </div>
  );
}

export default ApiCallReducer;
