import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//Uncomment the below part and used when You are using Simple Redux functionality
//1) import SimpleReduxExample from "./Components/SimpleRedux";

//2)Uncomment the below part and used when You are using API Redux functionality
import ApiCallReducer from "./Components/ApiCallReducer";
import { Provider } from "react-redux";
//1)Uncomment the below part and used when You are using Simple Redux functionality
// import store from './store/SimpleReducer/index'

//2)Uncomment the below part and used when You are using API Redux functionality
import store from './store/ApiCallReducer/index'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ApiCallReducer />
      </Provider>
    </div>
  );
}

export default App;
