let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let search = document.getElementById('search');
let searchTitle = document.getElementById('searchTitle');
let searchCategory = document.getElementById('searchCategory');







//get total

function getTotal(){

    if( price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor ="#040"
    }else{
        total.innerHTML = '';
        total.style.backgroundColor ="#f10";

    }
}

//create product
let datapro;

if ( localStorage.product =! null){
    datapro = JSON.parse(localStorage.product)
}




submit.onclick = function(){
product ={
    title : title.value,
    price : price.value,
    taxes : taxes.value,
    ads : ads.value,
    discount : discount.value,
    total : total.innerHTML,
    category: category.value,
    count :count.value
};
datapro.push(product);
localStorage.setItem('product',JSON.stringify(datapro));
}

//save on the localstorage
//clear inputes
//read
//count
//delete
//update
//search
//clean data