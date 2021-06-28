import React from "react";
// import App from "../App";
let panier = [];
let articles = ["pinceau", "toile", "fusain"];
let argent = 20;


class Articles extends React.Component{
     
     ajouterPanier = (e) =>{
          
         
          if(e.target.parentElement.innerText == "Pinceau 3€acheter"){

          
          panier.push(e.target.parentElement.innerText)
           console.log(panier)

           articles.splice(articles.indexOf("pinceau"),1)
       
           console.log(articles)

           argent -= 3;
           console.log(argent)


              

          }else if(e.target.parentElement.innerText == "Toile 13€acheter"){
               panier.push(e.target.parentElement.innerText)
               console.log(panier)
    
               articles.splice(articles.indexOf("toile"),1)
           
               console.log(articles)
    
               argent -= 13;
               console.log(argent)
          }else if(e.target.parentElement.innerText == "Fusain 4€acheter"){

               panier.push(e.target.parentElement.innerText)
               console.log(panier)
    
               articles.splice(articles.indexOf("fusain"),1)
           
               console.log(articles)
    
               argent -= 4;
               console.log(argent)
          }


     }

     render(){
          return(
               <div>
          <ul>
               <li>Pinceau 3€<button onClick={this.ajouterPanier}>acheter</button></li>
               <li>Toile 13€<button onClick={this.ajouterPanier}>acheter</button></li>
               <li>Fusain 4€<button onClick={this.ajouterPanier} >acheter</button></li>
          </ul>
     </div>
          
          )
     }

}    


export default Articles;

