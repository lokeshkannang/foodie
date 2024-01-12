let count=0
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")
let foodNameCollection =document.getElementsByClassName('card-title')
            

function increment(){
    count+=1
    countEl.textContent=count
}
function decrement(){
    count-=1
    countEl.textContent=count
}

function save(){
    const foodName=foodNameCollection[0].innerText
    countStr= count
    saveEl.textContent  += countStr
    countEl.textContent=0
    count=0
    
    const foodDetails={foodName,count:countStr}

    let foodCartsList=JSON.parse(window.localStorage.getItem('foodCartsList'))
    if(foodCartsList===null){
        foodCartsList=[foodDetails]
    }else{
        foodCartsList.push(foodDetails)
    }
    window.localStorage.setItem('foodCartsList',JSON.stringify(foodCartsList))

}
console.log("Let's count people on the station ")