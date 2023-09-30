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