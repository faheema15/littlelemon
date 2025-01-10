import React, { useState } from 'react';
import recipes from '../recipes';
import './styles/orderonline.css'; // Ensure this path is correct

function OrderOnline() {
  // State to handle popup visibility and form data
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  // Function to open the popup when an "Order Now" button is clicked
  const handleOrderClick = (recipeId) => {
    console.log("Order Now clicked for recipeId:", recipeId);
    if (!selectedItems.includes(recipeId)) {
        const updatedItems = [...selectedItems, recipeId];
        setSelectedItems(updatedItems);
        setQuantities({ ...quantities, [recipeId]: 1 });
        calculateTotalCost(updatedItems, { ...quantities, [recipeId]: 1 });
    }
    setIsPopupOpen(true);
};


  // Function to handle the close of the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setOrderPlaced(false); // Reset order status if closed without ordering
    setName('');
    setMobile('');
    setAddress('');
    setSelectedItems([]);
    setQuantities({});
    setTotalCost(0);
  };

  // Function to handle quantity change and update total cost
  const handleQuantityChange = (e, itemId) => {
    const qty = parseInt(e.target.value);
    const updatedQuantities = { ...quantities, [itemId]: qty };
    setQuantities(updatedQuantities);
    calculateTotalCost(selectedItems, updatedQuantities);
  };

  // Function to calculate total cost based on selected items and their quantities
  const calculateTotalCost = (items, qtys) => {
    const cost = items.reduce((acc, itemId) => {
      const item = recipes.find((recipe) => recipe.id === itemId);
      return acc + (item ? item.price * (qtys[itemId] || 1) : 0);
    }, 0);
    setTotalCost(cost);
  };

  // Function to handle the "OK" button click and show order success
// Function to handle the "OK" button click and show order success
const handleOrderSuccess = () => {
  // Validate the form fields
  if (!name.trim()) {
    alert("Please enter your name.");
    return;
  }
  if (!mobile.trim()) {
    alert("Please enter your mobile number.");
    return;
  }
  if (!address.trim()) {
    alert("Please enter your address.");
    return;
  }

  // Check if quantities are valid
  const hasInvalidQuantities = selectedItems.some(
    (itemId) => !quantities[itemId] || quantities[itemId] <= 0
  );
  if (hasInvalidQuantities) {
    alert("Please ensure all items have a valid quantity.");
    return;
  }

  // Normally, you could send this data to a backend or handle further processing here
  setOrderPlaced(true);
  setIsPopupOpen(false); // Close the popup after placing the order
};


  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2 className='title_oo'>Order Online</h2>
      </div>
      <div className='cards'>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt={recipe.title} />
            <div className='menu-content'>
              <div className='heading'>
                <h5 className='recipetitle'>{recipe.title}</h5>
                <p className='recipeprice'>${recipe.price}</p>
              </div>
              <p className='recipedesc'>{recipe.description}</p>
              <button className='orderBtn' onClick={() => handleOrderClick(recipe.id)}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && !orderPlaced && (
        <div className='popup' style={{ outline: 'none' }}>
          <div className='popup-content'>
            <button className='close-btn' onClick={handleClosePopup}>X</button>
            <h3 className='enterdetails'>Enter Your Details</h3>
            <form>
              <div>
                <label className='popupheading'>Name</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div>
                <label className='popupheading'>Mobile</label>
                <input
                  type='text'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder='Enter your mobile number'
                  required
                />
              </div>
              <div>
                <label className='popupheading'>Address</label>
                <input
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Enter your address'
                  required
                />
              </div>
              {selectedItems.map((itemId) => (
                <div key={itemId}>
                  <label  className='popupheading'>
                    {recipes.find((recipe) => recipe.id === itemId)?.title} - ${
                      recipes.find((recipe) => recipe.id === itemId)?.price
                    }
                  </label>
                  <input
                    type='number'
                    min='1'
                    value={quantities[itemId] || 1}
                    onChange={(e) => handleQuantityChange(e, itemId)}
                    required
                  />
                </div>
              ))}
              <div>
                <p  className='popupheading'>Total Cost: ${totalCost}</p>
              </div>
              <button
                type='button'
                className='ok-btn'
                onClick={handleOrderSuccess}
              >
                OK
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {orderPlaced && (
        <div className='order-success'>
          <h3>Order Placed Successfully!</h3>
          <button className='close-btn' onClick={handleClosePopup}>X</button>
        </div>
      )}
    </div>
  );
}

export default OrderOnline;
