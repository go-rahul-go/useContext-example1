import React, { useContext } from 'react'
import {UserContext} from "./App";
import "./style.css";

export const Child = () => {
    const val=useContext(UserContext);
    // console.log(val)
  return (
    <div className="child">
        <h2>Child</h2>
        <p>{val}</p>
    </div>
  )
}


export default Child;