import React,{createContext,useState} from "react";
import Child from "./Child"
import "./style.css";

export const UserContext = createContext();
function App() {
  const [val,updateVal]=useState(0)
  return(
    <div className="container">
    <div className="parent">
      <h1>Parent</h1>
      <p>{val}</p>
      <button onClick={()=>updateVal(val+1)}>+</button>
    </div>
    <UserContext.Provider value={val}>
        <Child/>
    </UserContext.Provider>
    </div>
  )
}

export default App;
