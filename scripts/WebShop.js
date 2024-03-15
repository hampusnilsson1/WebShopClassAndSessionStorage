let products = [];
products.push(new product("Banana",10));
products.push(new product("Pineapple",16));
products.push(new product("Grapes",12));
products.push(new product("Kiwi",13));
products.push(new product("Apple",8));
products.push(new product("Pear",10));
products.push(new product("Orange",12));


products[1].printInfo();

const shopcontainer = document.getElementById("shopcontainer");
const cartcontainer = document.getElementById("cartcontainer");

for(let i in products){
    const product = products[i]; // Save the product

    const productcontainer = document.createElement("div");
    document.getElementById("shopcontainer").appendChild(productcontainer);
    productcontainer.setAttribute("class","productcontainer")

    //Name
    const productName = document.createElement("p");
    productName.textContent = product.getName();

    //Price
    const productPrice = document.createElement("p");
    productPrice.textContent = product.getPrice()+"$";

    //Button
    const productBuyButton = document.createElement("button");
    productBuyButton.setAttribute("class","buybutton");
    productBuyButton.textContent = "Buy";

    //Append
    productcontainer.appendChild(productName);
    productcontainer.appendChild(productPrice);
    productcontainer.appendChild(productBuyButton);

    //Button Click
    productBuyButton.addEventListener("click",
    function(event){
        if(product.inCart == false){
            let productcontainer = productBuyButton.parentElement;
            productBuyButton.textContent = "Cancel";

            cartcontainer.appendChild(productcontainer);
            product.setInCart(true);
        }else{
            let productcontainer = productBuyButton.parentElement;
            productBuyButton.textContent = "Buy";

            shopcontainer.appendChild(productcontainer);
            product.setInCart(false);
        }
    })
}

const checkoutButton = document.getElementById("checkoutbutton");

checkoutButton.addEventListener("click",
    function(event){
        let productsToCheckout = [];
        console.log("At the beginning: "+productsToCheckout.length)
        for(let i in products)
        {
            if(products[i].inCart == true){
                productsToCheckout.push(products[i])
            }
            console.log("Added: "+ products[i])
        }
        console.log("At the end: "+productsToCheckout.length)
        sessionStorage.setItem("productsToCheckout", JSON.stringify(productsToCheckout));
        window.location = "checkout.html"
    }
)


