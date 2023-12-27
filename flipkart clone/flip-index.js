
let bagItems;
onLoad();
// localStorage.clear(bagItems)
function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
  }

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count'); 
  if (bagItems.length > 0){
   bagItemCountElement.style.visibility = 'visible'; 
   bagItemCountElement.innerText = bagItems.length;
 }else{
   bagItemCountElement.style.visibility = 'hidden'  
 }
  }


displayItemsOnHomePage();

function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector('.main-bar');
if (!itemsContainerElement){
  return;
}


  let innerHTML = '';
  items.forEach(item => {
  
    innerHTML += ` <div class="product-container">
  
    <img class="item-img" src="${item.image}" alt="item img">
    
    
    
    <div class="company-name">${item.company}</div>
    
    <div class="item-name">${item.item_name}</div>
    
    <div class="price-container">
        <span class="current-price">₹${item.current_price}</span>
        <span class="original-price">₹${item.original_price}</span>
        <span class="discount-percentage">${item.discount_percentage}%</span>
    </div>
    
    <button class="add-button" onclick ="addToBag('${item.id}')">Add to Cart</button>
    </div> `
  });
  
  itemsContainerElement.innerHTML = innerHTML;
}









