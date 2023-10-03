
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getLocalFavExtData = () => {
    let localFavData = localStorage.getItem("favLocalStoredItems");
    if (localFavData) {
      return JSON.parse(localFavData)
    } else {
      return [];
    }
  };

const favInitialState = {
    favArr :getLocalFavExtData()
}

const FavItemsAdd = (state=favInitialState,action)=>{
    
  const favoriteElement = action.payload;
    if(action.type==="ADD-FAV-ITEM"){

      let {favid,favimgsrc,favCost,favProductName} = action.payload;

      let newFavProduct = {favid,favimgsrc,favCost,favProductName}
      const existingFavItem = state.favArr.find((items)=>items.id===favid)

      if(existingFavItem){
        toast.error("Item already Exist in Favourites!")
        return {
          ...state
        }
      }

      else{
      toast.success('Added to Favourites !')
        return{
            ...state,
            favArr:[...state.favArr,newFavProduct]
        }
      }
    }
    else if(action.type==="DEL-FAV-ITEM"){
      const reqDelArr = [...state.favArr]
      const delArr = reqDelArr.filter((remvitem) => remvitem.favid !== favoriteElement)

      return{
        ...state,
        favArr:delArr
      }



    }
    else{
        return state;
    }
}

export default FavItemsAdd;