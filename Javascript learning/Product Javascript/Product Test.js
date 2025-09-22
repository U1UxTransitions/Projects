function compareProduct(product1, product2){
    let rice = {
        name: "John",
        price: "100"
    };

    let beans = {
        name: "Jane",
        price: "200"
    }

    if (rice.price > beans.price) {
        return beans
    }
    else{
        return rice
    }
}

let lessExpensive = compareProduct(rice, beans)
console.log(lessExpensive)

