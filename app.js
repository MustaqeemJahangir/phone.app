



const phones = [
    {
      brand: "Samsung",
      model: "Galaxy S21",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 799,
      image:"image/—Pngtree—samsung galaxy note 20_5493704.png"

    },
    {
      brand: "Apple",
      model: "iPhone 13",
      ram: 4,
      rom: 128,
      camera: "12 megapixel",
      price: 799,
      image:"image/iphone13pro.png"
    },
    {
      brand: "OnePlus",
      model: "9",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 729,
      image:"image/nokia.png"
    },
    {
      brand: "Google",
      model: "Pixel 6",
      ram: 8,
      rom: 128,
      camera: "50 megapixel",
      price: 599,
      image:"image/google.png"
    },
    {
      brand: "Xiaomi",
      model: "Mi 11",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 749,
      image:"image/11.png"
    },
    {
      brand: "Sony",
      model: "Xperia 1 III",
      ram: 12,
      rom: 256,
      camera: "12 megapixel",
      price: 1299,
      image:"image/sony.png"
      
    },
    {
      brand: "Oppo",
      model: "Find X3 Pro",
      ram: 12,
      rom: 256,
      camera: "50 megapixel",
      price: 1149,
      image:"image/oppo.png"
    },
    {
      brand: "Vivo",
      model: "X60 Pro",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 999,
      image:"image/vivo.png"
    },
    {
      brand: "Nokia",
      model: "G50",
      ram: 4,
      rom: 128,
      camera: "48 megapixel",
      price: 299,
      image:"image/nokia.png"
    },
    {
      brand: "Motorola",
      model: "Edge 20",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 599,
      image:"image/moto.png"
    },
    {
      brand: "Realme",
      model: "GT",
      ram: 12,
      rom: 256,
      camera: "64 megapixel",
      price: 499,
      image:"image/11.png"
    },
    {
      brand: "Asus",
      model: "ROG Phone 5",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
      image:"image/asus.png"
    },
    {
      brand: "HTC",
      model: "Desire 21 Pro",
      ram: 8,
      rom: 128,
      camera: "48 megapixel",
      price: 399,
      image:"image/htc.png"
      
    },
    {
      brand: "Huawei",
      model: "P40 Pro",
      ram: 8,
      rom: 256,
      camera: "50 megapixel",
      price: 899,
      image:"image/hu.png"

    },
    {
      brand: "LG",
      model: "Wing",
      ram: 8,
      rom: 256,
      camera: "64 megapixel",
      price: 999,
      image:"image/lg.png"

    },
    {
      brand: "ZTE",
      model: "Axon 20",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 399,
      image:"image/google.png"

    },
    {
      brand: "BlackBerry",
      model: "KEY2",
      ram: 6,
      rom: 64,
      camera: "12 megapixel",
      price: 649,
      image:"image/nokia.png"
      
    },
    {
      brand: "Lenovo",
      model: "Legion Phone Duel",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
      image:"image/asus.png"

    },
    {
      brand: "Alcatel",
      model: "3L",
      ram: 4,
      rom: 64,
      camera: "48 megapixel",
      price: 199,
      image:"image/vivo.png"

    },
    {
      brand: "TCL",
      model: "10 Pro",
      ram: 6,
      rom: 128,
      camera: "64 megapixel",
      price: 449,
      image:"image/tcl.png"

    },
];

// const hello=  JSON.parse(localStorage.getItem('card'))



let carditem;

let checkdatafromlocalsotrage=JSON.parse(localStorage.getItem("yahoo"))
if(checkdatafromlocalsotrage===null){
  carditem=[];


}
else{
  carditem=[...checkdatafromlocalsotrage]
}


const div=document.querySelector(".head");


phones.map((item, index) => {


    div.innerHTML+=`<div class="card">
      <img src="${item.image}" alt="" width="200px" class="set">
                <h1>brand :${item.brand}</h1>
                <h1>model:${item.model}</h1>
                <h1>price:${item.price} $</h1>
                <button sumclass="pro" onclick="hola(${index})" class="add">add to card</button>
    </div>`
})

// let carditem=[]
let h3=document.querySelector("#special")
// h3.innerHTML=0
function hola(index) {


  if(carditem.indexOf(phones[index])===-1){
  carditem.push(phones[index])

  phones[index].quantity=1



  console.log(carditem)
  


  }
  else{
    carditem[carditem.indexOf(phones[index])].quantity+=1
    
    
  }
  // console.log(cardItem);
  Swal.fire({
    title: "Good job!",
    text: "Item added to cart successfully!",
    icon: "success",
  });
}
 
let h2=document.querySelector("h2")



function checkout () {
  console.log('hello world ')
  let full=JSON.stringify(carditem)
  localStorage.setItem('yahoo',full)

  window.location="card.html"

  
}
  

// let carditem=[]
































































// function hola(index) {

//     // console.log(index)

    
//     // carditem.push(phones[index])
//     let checking=carditem.indexOf(phones[index])

//     if (checking===-1) {

//         phones[index].quantity=1
//         carditem.push(phones[index])
//         console.log(carditem)
//     }
//     else{
//       carditem[checking].quantity += 1;

//     }


    
// }




// function checkout() {
  


//   let convertarrintostr=JSON.stringify(carditem)
//   // console.log(convertarrintostr)
//   localStorage.setItem("card",convertarrintostr)
//   window.location="index.html"

// }