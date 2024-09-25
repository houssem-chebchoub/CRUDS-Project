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

let mood= 'create';
let tmp;
let searchMood='title';




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
    title : title.value.toLowerCase(),
    price : price.value,
    taxes : taxes.value,
    ads : ads.value,
    discount : discount.value,
    total : total.innerHTML,
    category: category.value.toLowerCase(),
    count :count.value
}
if(mood ==='create'){
    if(newPro.count >1){
        for(let i=0; i<newPro.count;i++){
            datapro.push(newPro);
    
        }
    }else{
        datapro.push(newPro)
    }
}else{
    datapro[tmp]=newPro;
    mood="create";
    count.style.display='block';
    submit.innerHTML='create'
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
    getTotal();
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
                <td><button id="update" onclick="updateData(${i})">update</button></td>
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
readData();


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

function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    ads.value = datapro[i].ads;
    taxes.value = datapro[i].taxes;
    discount.value = datapro[i].discount;
    count.style.display='none';
    getTotal();
    submit.innerHTML='update'    
    mood= 'update';
    tmp= i;
}
//search

function getSearchMood(id){
    if(id == 'searchTitle'){
        searchMood='title';
        search.placeholder ='search by title';
    }else{
        searchMood='category';
        search.placeholder='search by category';
    }
search.focus();
search.value ='';
readData()
}
function searchData(value){
    let table=''
    if(searchMood =='title'){
        for(let i=0;i<datapro.length;i++){
            if(datapro[i].title.includes(value.toLowerCase())){
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
                      <td><button id="update" onclick="updateData(${i})">update</button></td>
                      <td><button id="delete" onclick="clearOneData(${i})">delete</button></td>
                  </tr>
              
              `
            }else{
               
            }
document.getElementById('tbody').innerHTML = table;

        }
    }else{
        for(let i=0;i<datapro.length;i++){
            if(datapro[i].category.includes(value.toLowerCase())){
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
                      <td><button id="update" onclick="updateData(${i})">update</button></td>
                      <td><button id="delete" onclick="clearOneData(${i})">delete</button></td>
                  </tr>
              
              `
            }else{
               
            }
document.getElementById('tbody').innerHTML = table;

        }
    }
}




//clean data