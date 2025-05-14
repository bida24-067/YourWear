function addToCart() {
    const product = {
      name: "Me-Time Hoodie",
      price: 400,
      size: document.getElementById("size").value,
      quantity: 1
    };

    // Get the existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Me-Time Hoodie added to Your cart!");
  }