function getcart() {
    console.log(localStorage.length);
    total = 0
    

   
    str = ``
    for (i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(key);
        const value = JSON.parse(localStorage.getItem(key));
        console.log(value);
        total += value.price;
    
        const originalPrice = calculateOriginalPrice(value.price, value.discountPercentage);
       
        
        
        str += `
        <div id="subcontainer">
        <div id="imgcontainer">
            <div id="image">
                <img src="${value.thumbnail}" alt="">
            </div>
            <div id="details">
                <div>${value.brand}</div>
                <div id="title">${value.title}</div>
                <div id="prices">
                    <span id="originalPrice">$<del>${originalPrice.toFixed(2)}</del></span>
                    <span id="price">${value.price}</span>
                    <div id="offer">${value.discountPercentage}%off</div>
                </div>

            </div>
            </div>
        </div>
          <button id="btn" onclick="removeItem(${value.id})">Remove from Cart</button>
                <div class="main1">
                </div>

`
        str1 = `
        <div id="lst1">
            <li>Amount</li>
                <li>Discount</li>
                <li>Platform Fee</li>
                <li>DeliveryFee</li>
        </div>
                <div id="sublist">
                <li id="pr">$${total.toFixed(2)}</li>
                <li>2%</li>
                <li>40</li>
                <li>40</li>
                </div>
                
            `
    }
    document.getElementById("container").innerHTML = str;
    // document.getElementById("pr").textContent = total;
    document.getElementById("listmain").innerHTML = str1
    console.log(total);
  
    const disprice = (total/100)*2;
    const add =(total-disprice)+80;
    console.log("disprice",disprice);
    console.log("add",add);
    str3=`
      <div style="margin-left: 20px;font-size: 20px;" id="tot">Total Amount</div>
      <div id="add">$${add.toFixed(2)}</div>`
    document.getElementById("totamt").innerHTML = str3


}
getcart()
function calculateOriginalPrice(discountedPrice, offerPercentage) {
    return discountedPrice / (1 - (offerPercentage / 100));
   
}


function removeItem(key) {
    // alert(key)
    localStorage.removeItem(key)
    if (localStorage.length == 0) {
        window.location.href = "../index.html"
    }
    else {
        getcart()
        console.log(localStorage.length);

    }
}
function order(){
    alert("Order Placed Successfully..Thank you");
}