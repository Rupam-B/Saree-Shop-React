
const getLocalOrdertData = () => {
    let localOrderSareeData = localStorage.getItem("localStoredSareeOrderData");
    if(localOrderSareeData){
        return JSON.parse(localOrderSareeData);
    }
    else{
        return []
    }
  };

  const orderInitialState = {
    recvArr: getLocalOrdertData(),
  };
  
  const AddOrderObject = (state = orderInitialState, action) => {
    const AddedObject = action.payload;
  
    if (action.type === 'ADD-NEW-ORDER') {
      return {
        ...state,
        recvArr: [...state.recvArr, AddedObject],
      };
    } else {
      return state;
    }
  };
  
  export default AddOrderObject;
  