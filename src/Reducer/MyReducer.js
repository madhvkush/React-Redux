const initialState = {
   WelcomeGlobal:'Hello Delhi. from Reduxt Goble store'
  };

const MyReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "comp1":
        return {
          ...state,
          WelcomeGlobal: state.WelcomeGlobal + ' '+ ' Comp1',
         
        };
        break;
  
      case "comp2":
        return {
          ...state,
          WelcomeGlobal: state.WelcomeGlobal + ' '+ ' Comp2',
        };
        break;
     
    }
    return {...state};
  };
  
  export default MyReducer;