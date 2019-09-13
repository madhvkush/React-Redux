import React from 'react';
import { connect } from "react-redux";

class Comp2 extends React.Component
{
    constructor()
    {
      super();
      this.state={Welcome:"Hello Wolrd! Comp2"}
      console.log('Comp-2  constructor.');
    }
  //   static getDerivedStateFromProps(props,state)
  // {
  //   console.log('Comp-2  getDerivedStateFromProps.');
  //   return null;
  // }
    
  componentDidMount()
  {
      //debugger;
      console.log("Comp2 componentDidMount.");
  }

    HandleClick=()=>{this.props.Welcomefunction();}

    render()
    {
        console.log("Comp2 Render.");
        return(
            <div>
                <h2>{this.props.WelcomeProps}</h2>
                <h1>From local state:- {this.state.Welcome}</h1>

                <button onClick={this.HandleClick}> Change Reducer state</button>
            </div>

        )
    }
}

//export default Comp2;

const mapStateToProps= state =>{
    return   { WelcomeProps:state.WelcomeGlobal}
   }
   
   const mapDispachToProps= (dispatch)=>
   {
     return { Welcomefunction:()=>{dispatch({ type: "comp2"})}}
   }
   
   export default connect(
       mapStateToProps,
       mapDispachToProps
     )(Comp2);