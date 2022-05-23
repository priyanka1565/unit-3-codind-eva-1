function showProduct(){
    var data = JSON.parse(localStorage.getItem("products")) ||[]
    console.log(data)

   data.forEach(function(el){
       let main_div = document.getElementById("all_products")

       let img = document.createElement("img");
       img.src =el.image

       let type = document.createElement("h4");
       type.innerHTML = el.type

       let desc = document.createElement("h4");
       desc.innerHTML = el.desc

       let price = document.createElement("h4");
       price.innerHTML = el.price

    



       main_div.append(img, type,desc,price)

   })
}
showProduct()