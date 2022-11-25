import React, { Component } from "react";
 
class Luokka2 extends Component {
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <div className="marg">
               <h1>Luokkapohjainen laskuri:</h1>
               <h2> {this.state.count}</h2> 
               <button onClick={this.increase}>Klikedi klik</button>
 
            </div>
        )
    }
}
 
export default Luokka2;