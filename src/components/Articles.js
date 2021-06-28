import React from "react";
import App from "../App";
let panier = [];
let articles = ["pinceau", "toile", "fusain"];


class Articles extends React.Component{

     ajouterPanier = (e) =>{
          //  Push objet dans panier
          e.target = panier.push(e.target.parentElement.innerText)
          console.log(panier)
          // split tableau objet 
          //if objet est pinceau retirer 5 euros ...
          if()
     }

     render(){
          return(
               <div>
          <ul>
               <li>Pinceau <button onClick={this.ajouterPanier}>acheter</button></li>
               <li>Toile <button onClick={this.ajouterPanier}>acheter</button></li>
               <li>Fusain <button onClick={this.ajouterPanier} >acheter</button></li>
          </ul>
     </div>
          
          )
     }

}    

export default Articles;