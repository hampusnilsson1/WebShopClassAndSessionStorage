let grabbedItem = sessionStorage.getItem("productsToCheckout");

let productsToCheckout = JSON.parse(grabbedItem);

summary = 0;

for(let i in productsToCheckout){
    let productText = document.createElement("p");
    productText.textContent = productsToCheckout[i].name + " " + productsToCheckout[i].price+"$";
    document.getElementById("itemContainer").appendChild(productText);
    summary += productsToCheckout[i].price;
}
let summaryText = document.createElement("p");
document.getElementById("itemContainer").appendChild(summaryText);
summaryText.textContent = "Total cost: " + summary + "$";
