// https://fakestoreapi.com/products
// https://dummyjson.com/products

let category = document.getElementById("brand-category");
let productlist = document.getElementById("productlist");

let getData = async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  showdata(data.products);
  filterbyBrand(data.products)
};

function showdata(productData) {
  productlist.innerHTML = "";
  productData.forEach((product) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = product.images[0];
    image.style.width = "100px";

    let title = document.createElement("p");
    title.innerHTML = product.title;

    let price = document.createElement("p");
    price.innerHTML = product.price;

    let brand = document.createElement("p");
    brand.innerHTML = product.brand;

    div.append(image, title, price, brand);
    productlist.append(div);
  });
}

function filterbyBrand(products){
  
    category.addEventListener("change" , function(){
       let selctedbrandCategory = category.value

       let filterproducts = selctedbrandCategory === "all"?products : products.filter(product=>product.brand === selctedbrandCategory)

       showdata(filterproducts)

    })
  
}
getData();
