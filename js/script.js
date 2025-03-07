 async function getproducts(){
    document.getElementById("cart").innerHTML="cart"+localStorage.length
    const res = await fetch("https://dummyjson.com/products");
    if (res.status == 200){
        const data = await res.json();
        console.log(data);
        products = data.products;
        console.log(products);
        str = ``;
        products.map((product)=>{
            console.log(product);

            str += `
             <div class="cards">
            <a href="../pages/detail.html?id=${product.id}">
                <div class="image">
                    <img src="${product.thumbnail}" alt="no image">
                </div>
                <div class="details">
                    <h4 class="brand">${product.brand}</h4>
                    <h4 class="name">${product.title}</h4>
                    <h4 class="price">Rs.${product.price}</h4>
                    <h5 class="offer">${product.discountPercentage}%off</h5>
                    <br>
                    <button>Cart</button>

                </div>
            </a>

        </div>
            `
            
        });
        document.getElementById("products").innerHTML = str;
        
        
        
    }
}
getproducts()

document.getElementById("search").addEventListener("keyup",async(e)=>{
    console.log(e.target.value);

    const res = await fetch("https://dummyjson.com/products");
    if (res.status == 200){
        const data = await res.json();
        console.log(data);
        products = data.products;
        console.log(products);
        str = ``;

        filter=products.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        filter.map((product)=>{
            
            console.log(product);

            str += `
             <div class="cards">
            <a href="../pages/detail.html?id=${product.id}">
                <div class="image">
                    <img src="${product.thumbnail}" alt="no image">
                </div>
                <div class="details">
                    <h4 class="brand">${product.brand}</h4>
                    <h4 class="name">${product.title}</h4>
                    <h4 class="price">Rs.${product.price}</h4>
                    <h5 class="offer">${product.discountPercentage}%off</h5>
                    <br>
                    <button>Cart</button>

                </div>
            </a>

        </div>
            `
            
        });
        document.getElementById("products").innerHTML = str;
        
        
        
    }

})

