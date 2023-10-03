const getLocalOrderExtData = () => {
    let localOrderExtData = localStorage.getItem("OrderExtendedShowData");
    if (localOrderExtData) {
      return JSON.parse(localOrderExtData)
    } else {
      return [];
    }
  };

const extInitialState = {
    orderExtArr:getLocalOrderExtData()
}

const dispExtdOrders = (state=extInitialState,action)=>{

    if(action.type==="SHOW-ORDERS"){

        const showDataArr = action.payload;

        return{
            ...state.orderExtArr,
            orderExtArr:showDataArr
        }
    }
    else{
        return state;
    }
}

export default dispExtdOrders;