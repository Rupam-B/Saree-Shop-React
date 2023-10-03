import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getLocalCartData = () => {
    let localCartSareeData = localStorage.getItem("localStoredSareeCart");
    if (localCartSareeData == null) {
      return [];
    } else {
      return JSON.parse(localCartSareeData);
    }
  };
  const getLocalAmountData = () => {
    let localAmountSareeData = localStorage.getItem("localStoredSareeAmount");
    if (localAmountSareeData == null) {
      return 0;
    } else {
      return JSON.parse(localAmountSareeData);
    }
  };


const initialState = {
    cart: getLocalCartData(),
    total_amount: getLocalAmountData(),
}

const AddOrRemoveItems = (state=initialState,action)=>{
    if(action.type === 'ADD-TO-CART'){

      console.log(state.total_amount,state.cart,"state")
        
        let {id,ProductName,imgsrc,Cost, quantity} = action.payload;

        const existingProduct = state.cart.find(item => item.id===id)
        

        if(existingProduct){
            toast.success("Exising Item added");
            const updatedCart = state.cart.map((item)=>{
                if(item.id===id){
                    return {
                        ...item,
                        Cost: parseInt(item.Cost) + parseInt(Cost),
                        quantity: item.quantity+1
                    }
                }
                return item;

            });

            return {
                ...state,
                cart: updatedCart,
                total_amount : state.total_amount + parseInt(Cost)
            }

        }
        

        

       else {
        toast.success("Item Added to cart");
        let NewProduct = {id, ProductName, imgsrc, Cost, quantity}

        const total_amount = state.total_amount + parseInt(Cost)

        return {
            ...state,
            cart: [...state.cart, NewProduct],
            total_amount
        };
       }

    }


    else if(action.type === 'REMOVE-FROM-CART'){
        
        const removeArr = [...state.cart]
        const newArr = removeArr.filter((remvitem) => remvitem.id !== action.payload)

        const removedProduct = state.cart.find((item) => item.id === action.payload);
        const total_amount= state.total_amount - parseInt(removedProduct.Cost);


        return{
            ...state,
            total_amount,
            cart:newArr
        }
    }

    if(action.type==="EMPTY-CART"){
      return{
        ...state,
        cart:[],
        total_amount:0
      }
    }
   

    else return state;

    
}

export default AddOrRemoveItems;