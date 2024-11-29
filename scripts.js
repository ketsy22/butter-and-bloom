// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Butter & Bloom!");
 
    // Functionality: Show a welcome alert when the Home Page loads
    if (window.location.pathname.includes("index.html")) {
       alert("Welcome to Butter & Bloom! Check out our delicious menu.");
    }
 
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Welcome to Butter & Bloom!");
    
    // Functionality for Menu Page: Add "Add to Cart" alert
    if (window.location.pathname.includes("menu.html")) {
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((row) => {
            row.addEventListener("click", () => {
                // Debugging log to verify the event listener is working
                console.log("Row clicked!"); // Confirms row is being clicked
            
                // Get the item name from the first cell of the clicked row
                const itemName = row.querySelector("td:first-child").textContent;
                console.log(`Item Name: ${itemName}`); // Logs the item name
            
                // Trigger alert
                alert(`${itemName} added to your cart!`);
            });
        });
    }
});  
 
    // Functionality: Validate the order form on the Order Page
    if (window.location.pathname.includes("order.html")) {
       const orderForm = document.querySelector("form");
       orderForm.addEventListener("submit", (event) => {
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const order = document.getElementById("order").value.trim();
 
          if (!name || !email || !order) {
             event.preventDefault(); // Stop form submission
             alert("Please fill out all fields in the order form.");
          } else {
             alert("Thank you for your order! We’ll get back to you soon.");
          }
       });
    }
 }); 