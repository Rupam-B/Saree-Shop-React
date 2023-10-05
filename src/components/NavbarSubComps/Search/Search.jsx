import React, { useState } from 'react';
import './SearchStyle.css'
import { FlashSaleExclusiveData } from '../../Home/FlashSaleExclusivedata';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../Redux/action';

const Search = () => {

  const FlashSaleData = FlashSaleExclusiveData

  const SearchDispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [showSearching, setShowSearching] = useState(false);
  const [searchedItems, setSearchedItems] = useState([]);

  const performSearch = (searchQuery) => {
    setShowSearching(true);

    setTimeout(() => {
  const filteredItems = FlashSaleData.filter(item => item.HomeSareeName.includes(query));
  
  setShowSearching(false);

  const SearchedItems = filteredItems.map((Oneitems) => (Oneitems.data));
      setSearchedItems(SearchedItems);
}, 500);
};

const handleInputChange = (e) => {
  const newQuery = e.target.value;
  setQuery(newQuery);

  // Clear the previous timeout if user continues typing
  if (showSearching) {
    clearTimeout(showSearching);
  }

  // Perform the search after 0.5 seconds of inactivity
  setTimeout(() => {
    performSearch(newQuery);
  }, 500);
};

  return (
    <>
    <div className="search-main-div">
    <div>
      <div className="Search-input-div">
      <input
      className='Search-main-Input'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      </div>
      <div className="Search-Sub-div">
        {showSearching?(<p className='Search-Action'>Searching...</p>):(
          searchedItems.length>0?(
      searchedItems.map((array, arrayIndex) => (
  array.map((item) => (
    <div key={item.id} className="card Search-Sub-container-card">
      <div className="Search-Sub-container-card-img">
        <img className="card-img-top" src={item.src1} alt="" />
      </div>
      <div className="card-body Search-Sub-container-card-body">
        <h5 className="card-title Search-Sub-container-card-title">{item.SubSareeNameHome}</h5>
        <p className="card-text Search-Sub-container-card-PRICE">INR {item.Cost}.00</p>  
        <button onClick={()=>{SearchDispatch(AddToCart(item.id,item.src1,item.Cost,item.SubSareeNameHome))}} className='Search-Sub-container-button'>Add to Cart</button>
      </div>
    </div>
  )) 
))
):(<p className='No-matched'>No matched Items</p>))}
      </div>
    </div>
      
    </div>
      
    </>
   
  )
}

export default Search;