// Define the items and their prices
const items = [
    { name: "Coke", price: 1.5 },
    { name: "Chips", price: 1.0 },
    { name: "Candy", price: 0.75 },
    { name: "Water", price: 2.0 },
    { name: "Cookies", price: 1.25 },
    { name: "Juice", price: 1.75 }
  ];
  
  // Initialize variables
  let currentAmount = 0;
  let selectedItem = null;
  
  // Function to update the display and show notification
  function updateDisplay(message, showNotification) {
    const display = document.getElementById("display");
    display.textContent = message;
    
    if (showNotification) {
      alert(message);
    }
  }
  
  // Function to insert money
  function insertMoney(amount) {
    currentAmount += amount;
    const message = `Inserted: $${amount.toFixed(2)}. Total: $${currentAmount.toFixed(2)}`;
    updateDisplay(message, true);
  }
  
  // Function to select an item
  function selectItem(itemIndex) {
    if (itemIndex >= 0 && itemIndex < items.length) {
      selectedItem = items[itemIndex];
      const message = `Selected: ${selectedItem.name} for $${selectedItem.price.toFixed(2)}`;
      updateDisplay(message, false);
    } else {
      const message = "Invalid item selection";
      updateDisplay(message, true);
    }
  }
  
  // Function to cancel the sale
  function cancelSale() {
    if (selectedItem) {
      const change = currentAmount;
      const message = `Sale cancelled. Returning $${change.toFixed(2)}.`;
      updateDisplay(message, true);
      currentAmount = 0;
      selectedItem = null;
    } else {
      const message = "No sale to cancel.";
      updateDisplay(message, true);
    }
  }
  
  // Function to complete the purchase
  function completePurchase() {
    if (selectedItem) {
      if (currentAmount >= selectedItem.price) {
        const change = currentAmount - selectedItem.price;
        const message = `Purchase successful! Dispensing ${selectedItem.name}.`;
        updateDisplay(message, true);
        if (change > 0) {
          const changeMessage = `Returning $${change.toFixed(2)} in change.`;
          updateDisplay(changeMessage, true);
        }
        currentAmount = 0;
        selectedItem = null;
      } else {
        const message = "Insufficient funds. Please insert more money.";
        updateDisplay(message, true);
      }
    } else {
      const message = "No item selected.";
      updateDisplay(message, true);
    }
  }
  