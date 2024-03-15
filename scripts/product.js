class product{
    constructor(name,price){
        this.name = name;
        this.price = price
        this.inCart = false;
    }
    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    setInCart(state){
        this.inCart = state;
    }
    getInCart(){
        return this.inCart;
    }


    printInfo(){
        console.log(this.name+" costs "+this.price)
    }

}