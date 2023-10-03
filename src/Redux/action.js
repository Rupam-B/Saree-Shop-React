
// Add or Remove Cart Actions ----------------
export const AddToCart = (id,imgsrc,Cost,ProductName) =>{
    return{
        type:"ADD-TO-CART",
        payload:{
            id:id,
            ProductName:ProductName,
            imgsrc:imgsrc,
            Cost:Cost,
            quantity:1
        }
    }
}
export const RemoveFromCart = (removid) =>{
    return{
        type:"REMOVE-FROM-CART",
        payload:removid
    }
}
export const EmptyCart = () =>{
    return{
        type:"EMPTY-CART",
    }
}


// Authentication Actions -------------------

export const AuthenticationSignUP = (sendArr)=>{

    return {
        type:"SIGN-UP",
        payload : sendArr
    }
}
export const AuthenticationLogin = (checkArr)=>{
    return {
        type:"LOG-IN",
        payload:checkArr
    }
}
export const AuthenticationLogOut = ()=>{
    return {
        type:"LOG-OUT",
    }
}

// Order Actions -------------------

export const AddOrder =(cartItems)=>{
    return{
        type:'ADD-NEW-ORDER',
        payload:cartItems
    }
}

// Extended Order Actions -------------------

export const ShowOrder = (items)=>{
    return {
        type: "SHOW-ORDERS",
        payload:items
    }
}