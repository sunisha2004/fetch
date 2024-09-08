let url= window.location.href;
let urlParams = new URLSearchParams(url.split("?")[1])
let id=urlParams.get("id")

console.log(id);

async function getDetails() {
    const res=await fetch(`https://dummyjson.com/products/${id}`);
    const data=await res.json()
    console.log(data);
    document.getElementById("container").innerHTML=`
    <div id="subimg">
    <img id="subimgs" src="${data.images[0]}" alt="">
    <img id="subimgs" src="${data.images[1]}" alt="">
    <img id="subimgs" src="${data.images[2]}" alt="">
    </div>
    <div id="container1"> 
    <div id="image">
            <img id="img1" src="${data.thumbnail}" alt="">
        </div>
        <div id="productDetails">
            <div id="brand">${data.brand}</div>
            <div id="title">${data.title}</div>
            <div id="price">Rs.${data.price}</div>
            <div id="offer">${data.discountPercentage}%offer</div>
             <div id="rating">Rating : ${data.rating}</div>

        </div>
    </div>
    <div id="btns">
        <button id="buy">Buy Now</button>
    <button id="add">Add to Cart</button>
    </div>`
        
    
    
}
getDetails()
