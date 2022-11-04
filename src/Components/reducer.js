

function reducer(state,action) {
    console.log()
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 1;
        case "set":
          return state= action.payload;
      default:
      return state
  };
   
}


export default reducer