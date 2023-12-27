let bagItemObjects;
onLoad();

function onLoad(){
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.calculation-side-container');
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  

  bagItemObjects.forEach(bagItem => {
totalMRP += bagItem.original_price;
totalDiscount += bagItem.original_price - bagItem.current_price;

  })

  let finalPayment = totalMRP - totalDiscount + 80;

  bagSummaryElement.innerHTML = `<div class="calculation-side">
  <h3 class="price-details">PRICE DETAILS</h3>
  <hr>
  <div class="price-items">
    <p>Price(${totalItem} items)</p>
    <p>₹${totalMRP}</p>
  </div>
  <div class="price-items">
    <p>Discount</p>
    <p class="para2">-${totalDiscount}</p>
  </div>
  <div class="price-items">
    <p>Delivery Charges</p>
    <p class="para2">80</p>
  </div>
  <hr>
  <div class="price-items">
    <h3>Total Amount</h3>
    <h3>₹${finalPayment}</h3>
  </div>
</div>`
}

function loadBagItemObjects(){
  console.log(bagItems)

   bagItemObjects = bagItems.map(itemId =>{
    for(let i = 0; i < items.length; i++){
      if(itemId == items[i].id){
        return items[i];
      }
    }
  })
  console.log(bagItemObjects);
}

function displayBagItems(){
  
  let containerElement = document.querySelector('.products-container');
  let innerHTML = ''
  bagItemObjects.forEach(bagItem =>{
    innerHTML += generateItemHTML(bagItem);
  })
  containerElement.innerHTML = innerHTML;     

}

function removeFromBag(itemId){
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item){
return `<div class="product-container">
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
    <h3 class = "removeh3" onclick = "removeFromBag(${item.id})">remove</h3>
  </div>
</div>
</div>`
}





{/* <div class="product-container">
              <div class="product-image">
                <img src="images/image1.webp" alt="product">
                <div class="input-plus">
                  <button style="margin-left: 10px;">-</button>
                  <input type="text">
                  <button>+</button>
                </div>
              </div>
              <div class="product-description">
                <div class="product-name-cont">
                  <p>Women Full Sleeve Solid Sweatshirt</p>
                  <p class="product-delivery"> Delivery by Wed Dec 13 </p>
                </div>
                <p id="product-des-h5">black</p>
                <p class="company-name">Seller:Tokyo Talkies</p>
                <div class="price-container">
                  <span class="original-price">₹1699</span>
                  <span class="current-price">₹391</span>
                  <span class="discount-price">76% Off</span>
                </div>
                <div class="remove-cont">
                  <h3>Save for later</h3>
                  <h3>remove</h3>
                </div>
              </div>
            </div> */}