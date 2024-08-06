const products = [
    {
        name: "Chicken Tikka Burger",
        price: 20,
        img: "./assets/burger-1.jpeg"
    },
    {
        name: "Combo of 3 Mexican Chicken Burgers",
        price: 52,
        img: "./assets/burger-2.jpeg"
    },
    {
        name: "King Chicken Burger",
        price: 27,
        img: "./assets/burger-3.jpeg"
    },
    {
        name: "Chicken Burger with Fries",
        price: 23,
        img: "./assets/burger-4.jpeg"
    },
    {
        name: "Chicken Meal Combo (Double patty)",
        price: 40,
        img: "./assets/burger-5.jpeg"
    },
    {
        name: "Chicken Meal Combo (small)",
        price: 30,
        img: "./assets/burger-6.jpeg"
    },
    {
        name: "Chicken Meal Combo (single patty)",
        price: 35,
        img: "./assets/burger-7.jpeg"
    },
    {
        name: "Combo of 2 Burgers with Fries",
        price: 34,
        img: "./assets/burger-8.jpeg"
    },
    {
        name: "Farm Spicy Paneer Burger",
        price: 29,
        img: "./assets/burger-9.jpeg"
    },
    {
        name: "Veg Tikka Burger",
        price: 20,
        img: "./assets/burger-10.jpeg"
    },
    {
        name: "Coke (300ml)",
        price: 10,
        img: "./assets/coke.jpeg"
    },
    {
        name: "French Fries (250g)",
        price: 12,
        img: "./assets/fries.jpeg"
    }
];

const display = (items = products) => {
    let productString = "";
    items.forEach((item, index) => {
        let {name, price, img} = item;
        let currentProduct = `<div id="${index}" class="product-card">
                <img src="${img}" alt="burger" class="product-img" />
                <p class="product-name">${name}</p>
                <p class="price">Price: $${price}</p>
                <button onclick="changeQuantity(event, -1)" class="qnty-btn">-</button><span class="quantity">0</span><button onclick="changeQuantity(event, +1)" class="qnty-btn">+</button>
                <button onclick="buyProduct(event)" class="order">Buy Now</button>
            </div>`;
        productString += currentProduct;
    });
    document.getElementsByClassName("products")[0].innerHTML = productString;
}

const search_products = () => {
    let searched_value = document.getElementsByClassName("search")[0].value;
    console.log(searched_value)
    let searched_products = products.filter((product) => {
        return product.name.toLowerCase().includes(searched_value.toLowerCase());
    });
    display(searched_products)
}

const changeQuantity = (e, x) => {
    let parentElement = e.target.parentElement;
    let currentQuantity = parentElement.childNodes[8].innerHTML;
    let updatedQuantity = Number(currentQuantity) + x;
    if (updatedQuantity >=0 && updatedQuantity <= 10) document.getElementsByClassName("quantity")[parentElement.id].innerHTML = updatedQuantity;
    else {
        alert(`Minimum of 1 unit or maximum of 10 units can only be ordered.`)
    }
}

const buyProduct = (e) => {
    let parentElement = e.target.parentElement;
    let quantity = parentElement.childNodes[8].innerHTML;
    if (quantity <=0 ) alert(`Minimum of 1 unit is required to order.`)
    else {
        let name = parentElement.childNodes[3].innerHTML;
        alert(`Your order of ${name} of ${quantity} units is placed.`)
    }
}

display();