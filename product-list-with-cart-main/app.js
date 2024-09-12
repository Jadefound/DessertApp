// //selection

// let shop_wrapper = document.querySelector(".product-list")

// // 5 steps to create a tag content
// // step1 - create the tag or elemet
// let head = document.createElement("h2")
// //step 2  (optional) - give the element a class name
// head.classList.add("head-one")
// //step3 = create the content to insert into the tag
// headContent = "Fikayo are you with me on this Journey"
// //step4 - add the content to the element
// head.innerHTML = headContent
// //step 5 - display the new tag in the html
// shop_wrapper.appendChild(head)



// step 1 -- INPUT THE JSON DATA INTO A CONST VAR
const apiUrl = [
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
];

// ..STEP 2 -- JUST LIKE THE VIDEOS CREATE THE CARD COMPONENT
const createCard = (product) => {
    let product_card = document.createElement("div")
    
    product_card.classList.add("productCard")

    productDetails = `
         <div class="imgsec">
            <img src="${product.image.desktop}" alt="img">
            </div>

            <button class="addToCart">
             <i class="fas fa-shopping-cart"></i>
              <p>Add to Cart</p>
            </button>

          
          <div class="productDetails">
            <h6>${product.category}</h6>
            <h4>${product.name}</h4>
            <h5>$${product.price}</h5>
          </div>
    `
    product_card.innerHTML = productDetails
    document.querySelector(".product-list").appendChild(product_card)

};


// --------------------------------STEP 3 USING AN ARROW FUNCTION TO CALLBACK AND ITERATE THE PROCESS OF STEP 2
// ---------------------------------------- i created a function here that takes in the argument "products" 
//  ---------------------------------------- the function states that for each products (this would be for the amount of products in the data.json) create a function that callback the step 2 createCard of argument product
const displayProducts = (products) => {
    products.forEach((product) => {
        createCard(product);
    });
}

// CALL THE CONST VAR "APIURL (WHICH WAS CREATED FOR THE DATA.JSON FILE"
//  here i then used the function above move in the the data.json
displayProducts(apiUrl);


// -----------------------------------------------------THIS CODE HERE WAS DONE BY MACBRIGHT

// async function fetchProducts() {
//     const response = await fetch(apiUrl);
//     const json = await response.json();
//     console.log(json)
// }

// fetchProducts()

