//store the products array in localstorage as "products"
function ProductObject(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}


function addData(event){
    event.preventDefault();

    let product = document.getElementById("products")

    let type = product.type.value;
    let desc = product.desc.value;
    let price = product.price.value;
    let image = product.image.value;

    console.log(type,desc,price,image)
     
    let p1 = new ProductObject(type,desc,price,image)
    console.log(p1)
    
    var data = JSON.parse(localStorage.getItem("products")) || [];

    data.push(p1);

    localStorage.setItem("products",JSON.stringify(data))
    
    console.log(data);

}