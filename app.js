let products = [{
    productName: "Nike Air Force 1'07",
    image:"nike-air-force-1-low-07.jpg",
    isLiked: false,
    tag: "footwear",
    price: "$199"
  },
  {
    productName: "Nike air jordan",
    image:"Nike-air-jordan.jpg" ,
    isLiked: true,
    tag: "footwear",
    price: "$100"
  },
  {
    productName: "Supreme x Nike SB Dunk",
    image:"Supreme x Nike SB Dunk Low.jpg" ,
    isLiked: true,
    tag: "footwear",
    price: "$180"
  },
  {
    productName: "Cotton Casual Shirt",
    image:"Cotton Casual Shirt.jpg" ,
    isLiked: true,
    tag: "clothes",
    price: "$150"
  },
  {
    productName: "western Style Denim Shirt",
    image:"western Style Denim Shirt.jpg" ,
    isLiked: true,
    tag: "clothes",
    price: "$69",
  },
  {
    productName: "Regular Fit Checkered Shirt",
    image:"Regular Fit Checkered Shirt.jpg" ,
    isLiked: true,
    tag: "clothes",
    price: "$100"
  },
  {
    productName: "Philips Juicer-machine",
    image:"Philips Juicer.jpg" ,
    isLiked: false,
    tag: "electronics",
    price: "$200"
  },
  {
    productName: "Philips Airfryer-machine",
    image:"Philips Airfryer.jpg" ,
    isLiked: false,
    tag: "electronics",
    price: "$300"
  },
  {
    productName:"Philips Steam Iron",
    image:"Philips Steam Iron.jpg" ,
    isLiked: true,
    tag: "electronics",
    price: "$100"
  }
];
function productTemplate(product){
  return `
  
  <div class="coloumn">
    <div class="card_content">
      <p class="favorite"><i class="fas fa-heart"></i></p>
      <img  src="${product.image}" />
      <h2 class="title">${product.productName}</h2>
      
      <button class="add">Add</button>
      </div>
  </div>
 `
}
document.getElementById("app").innerHTML =`
${products.map(productTemplate).join('')}  
`
function getProduct(pass){
  let selectedItemsArray=products.filter(myProduct);
  function myProduct(product){
    if(product.tag ==  pass){
      console.log(product)
      return document.getElementById("app").innerHTML =`
      ${products.map(productTemplate).join('')}
      `;   
  }  
}
document.getElementById("app").innerHTML =`
${selectedItemsArray.map(productTemplate).join('')}  
`
}


// <span class="price">${product.price}</span>//


