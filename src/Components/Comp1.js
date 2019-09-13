import React from 'react';
import { connect } from "react-redux";

class Comp1 extends React.Component
{
    
    constructor()
  {
    super();
    this.state={Welcome:"Hello Wolrd! Comp1"}
    console.log('Comp-1  constructor.');
  }

  // static getDerivedStateFromProps(props,state)
  // {
      
  //   console.log('Comp-1  getDerivedStateFromProps.');
  //   return null;
  // }

componentDidMount()
{
    //debugger;
    console.log("Comp1 componentDidMount.");
    this.props.Welcomefunction();
}

    render()
    {
        console.log("Comp1 Render.");
        return(
            <div>
                <h2>{this.props.WelcomeProps}</h2>
                <h1>From local state:- {this.state.Welcome}</h1>
                
            </div>

        )
    }
}

//export default Comp1;

// Mapping the Sate Filed of Redux-reducer to the props field of Comp-1
const mapStateToProps= state =>{
 return   { WelcomeProps:state.WelcomeGlobal}
}

// Mapping Event of the Comp-1 to corrosponding case of reducer {which reducer-case should be called} 
const mapDispachToProps= (dispatch)=>
{
    return { Welcomefunction:()=>dispatch({ type: "comp1"})}
}


// Connect the component with Redux
export default connect(
    mapStateToProps,
    mapDispachToProps
  )(Comp1);