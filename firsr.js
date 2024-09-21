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

if ( localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}


submit.onclick = function(){
let newPro ={
    title : title.value,
    price : price.value,
    taxes : taxes.value,
    ads : ads.value,
    discount : discount.value,
    total : total.innerHTML,
    category: category.value,
    count :count.value
}
if(newPro.count >1){
    for(let i=0; i<newPro.count;i++){
        datapro.push(newPro);

    }
}else{
    datapro.push(newPro)
}


//save on the localstorage

localStorage.setItem('product',JSON.stringify(datapro));

clearData()
readData()


}

//clear inputes
function clearData(){
    title.value = '';
    price.value = '';
    ads.value = '';
    taxes.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}


//read
function readData(){
    let table = '';
    for (let i=0 ;i<datapro.length;i++){
        table += `
          <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button id="update">update</button></td>
                <td><button id="delete" onclick="clearOneData(${i})">delete</button></td>
            </tr>
        
        `
    }
    document.getElementById('tbody').innerHTML = table;
    let deleteall =document.getElementById('deleteA');

    if(datapro.length >0){
        deleteall.innerHTML=`
        <button onclick="clearAll()">delete All</button>   `;
    }
    else{
        deleteall.innerHTML="";
    }
}
readData()


//count
//delete
function clearOneData(i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    readData()
}

function clearAll(){
    localStorage.clear();
    datapro.splice(0);
    readData();

}

//update
//search
//clean data