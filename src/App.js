// import logo from './logo.svg';
import './App.css';
import React from "react";
import Articles from "./components/Articles"

let articles = ["pinceau", "toile", "fusain"];
let panier = [];


class App extends React.Component {
  
  state = {
    argent : "20"
  }



  render(){
    return(
      <div>
        <Articles/>
      </div>
    )
  }

}



export default App;
