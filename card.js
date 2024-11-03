


// console.log('hello world')

// let storage= localStorage.getItem("yahoo")
// let convert=JSON.parse(storage)
// console.log(storage)

// let div=document.querySelector("#head")



// convert.map((item,index)=> {
//     div.innerHTML+=`<div class="card">
//     <img src="${item.image}" alt="" width="200px"class="set">
//               <h1>brand :${item.brand}</h1>
//               <h1>qunatity:${item.quantity}
//               <h1>model:${item.model}</h1>
//               <h1>price:${item.price} $</h1>
//               <button class="white" onclick="delet(${index})"> delete</button>
              
//   </div>`
// })
// let span=document.querySelector("#result")

// function sum(index) {
//   let final=span[index]
//   final.innerHTML++
  
// }
let storage = localStorage.getItem("yahoo");
let convert = JSON.parse(storage);
console.log(storage);

let div = document.querySelector("#head");

convert.map((item, index) => {
    div.innerHTML += `
    <div class="card">
        <img src="${item.image}" alt="" width="200px" class="set">
        <h1>brand: ${item.brand}</h1>
        <h1>quantity: <button < class="increase" onclick="updateQuantity(${index}, 1)">+</button>
        <span id="quantity-${index}">${item.quantity}</span>
        <button class="decrease" onclick="updateQuantity(${index}, -1)">-</button></h1>
        <h1>model: ${item.model}</h1>
        <h1>price: ${item.price} $</h1>
        <button class="white" onclick="delet(${index})">delete</button>
        
        <button onclick="buy()" id="game" >buy now<button>
       
       
    </div>`;
})

function updateQuantity(index, change) {
    convert[index].quantity += change;
    if (convert[index].quantity < 0) {
        convert[index].quantity = 0; // Prevent negative quantity
    }
    document.getElementById(`quantity-${index}`).textContent = convert[index].quantity;
    localStorage.setItem("yahoo", JSON.stringify(convert)); // Update local storage
}
function buy() {
  Swal.fire({
    title: "thank for purchasing!",
    text: "paisy do or lay goa!",
    icon: "success",
  });
  
}


// console.log("azam ");
// const work = localStorage.getItem("yahoo");
// const detail = JSON.parse(work);
// console.log(detail);

// const div = document.querySelector("#head");

// detail.map((item, index) => {
//   div.innerHTML += `
//     <div class="card">
//       <img src="${item.image}" class="picture" alt="">
//       <h3> Name: ${item.brand} ${item.model}</h3>
      
//       <h3> Price: $<span class="price${index}">${item.price}</span></h3>
//       <button class="btn1" onclick="increment(${index}, ${item.price})">+</button>
//       <span class="answer${index}">1</span>
//       <button class="btn2" onclick="decrement(${index}, ${item.price})">-</button><br><br>
//       <button class="buy" onclick="buyNow()">Buy Now</button>
//       <button class="deleteElement">Deleting</button>
//     </div>
//   `;
// });

// function increment(index, price) {
//   const answer = document.querySelector(`.answer${index}`);
//   const priceElement = document.querySelector(`.price${index}`);
  
//   // Increase quantity
//   answer.innerHTML = parseInt(answer.innerHTML) + 1;

//   // Calculate and display updated price
//   const updatedPrice = price * parseInt(answer.innerHTML);
//   priceElement.innerHTML = updatedPrice;
// }

// function decrement(index, price) {
//   const answer = document.querySelector(`.answer${index}`);
//   const priceElement = document.querySelector(`.price${index}`);
  
//   // Decrease quantity if above 1
//   if (parseInt(answer.innerHTML) > 1) {
//     answer.innerHTML = parseInt(answer.innerHTML) - 1;

//     // Calculate and display updated price
//     const updatedPrice = price * parseInt(answer.innerHTML);
//     priceElement.innerHTML = updatedPrice;
//   }
// }

// function buyNow() {
//   Swal.fire({
//     title: "Mubarak ho",
//     text: "Ab cash do aur mobile apka",
//     icon: "success"
//   });
// } 







// let card=document.querySelector(".card")


// function delet(index) {


//   card.innerHTML=" "
//   .slice=(1,index);

  
// }  

  




















































































































// console.log("hello world ")


// let calling=localStorage.getItem("card")
// let hola=JSON.parse(calling)
// console.log(hola)


// let div=document.querySelector("#head")



// hola.map( (item)=> {
//     div.innerHTML+=`<div class="card">
//                 <h1>brand name:${item.brand}</h1>
//                 <h1>model:${item.model}</h1>
//                 <h1>price:${item.price} $</h1>
                
//     </div>`


    
// })

