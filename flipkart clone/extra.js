<div class="product-image">
  <img src="${item.image}" alt="product">
  <div class="input-plus">
    <button style="margin-left: 10px;">-</button>
    <input type="text">
    <button>+</button>
  </div>
</div>
<div class="product-description">
  <div class="product-name-cont">
    <p>${item.item_name}</p>
    <p class="product-delivery"> Delivery by Wed Dec 13 </p>
  </div>
  <p id="product-des-h5">black</p>
  <p class="company-name">Seller:${item.company}</p>
  <div class="price-container">
    <span class="original-price">₹${item.original_price}</span>
    <span class="current-price">₹${item.current_price}</span>
    <span class="discount-price">${item.discount_percentage}% Off</span>
  </div>
  <div class="remove-cont">
    <h3>Save for later</h3>
    <h3 onclick = "removeFromBag(${item.id})">remove</h3>
  </div>
</div>