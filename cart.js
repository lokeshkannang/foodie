let foodsListElement=document.getElementById('foodsList')

const foodCartsList=JSON.parse(window.localStorage.getItem('foodCartsList'))

const txtFoodName=document.getElementById('txtFoodName')
const txtFoodCount=document.getElementById('txtFoodCount')

if(foodCartsList!==null){
    for (let foodItem of foodCartsList ){
    const listItem=document.createElement('li')
    const foodName=document.createElement('p')
    const foodCount=document.createElement('span')

    foodCount.textContent=foodItem.count
    foodName.textContent=foodItem.foodName

    foodCount.classList.add('card-count')
    foodName.classList.add('food-name')

    foodName.appendChild(foodCount)

    listItem.appendChild(foodName)

    foodsListElement.appendChild(listItem)}
    
}
else{
    console.log("Your Cart Is Empty");
}

function remove(){
    const foodCartsList=JSON.parse(window.localStorage.getItem('foodCartsList'))
   window.localStorage.removeItem('foodCartsList');
    console.log(foodCartsList);
   
    let msgList=[]
    for (let foodItem of foodCartsList ){
        msgList.push(foodItem.foodName+' : '+foodItem.count)
    }
    
     window.open(
         `https://wa.me/7904981507/?text=${msgList.join('%0A')}`,
         '_blank' 
         );
     //window.location.href="https://wa.me/7904981507/?text=Hi%0AHello";
    console.log("Submit Button clicked");
}

var a = document.getElementsByClassName('food-name')[0].innerText;
console.log(a);
