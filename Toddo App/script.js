
var button = document.querySelector("#btnn1")
var clearAll = document.querySelector("#btnn2")
var brojac = 0


function appendInputValue(){
// var time = new Date()
//  var vreme = (time.getMonth() + 1 ) + "/" + time.getDay() + "/" + time.getFullYear()
//  console.log(time.getDay())

    // var time = full.getFullYear() + full.getMonth() + full.getDay()
    
    var datum = document.querySelector("#datum")
var input1 = document.querySelector("#taskName");
var list = document.querySelector("#list")


if(input1.value === ""){
    value1.textContent = ""
    document.querySelector("#numberOfItems").textContent = brojac

}
else{
    


var value1 = document.createElement("h6");
value1.textContent = input1.value
list.appendChild(value1)
 brojac++
 document.querySelector("#numberOfItems").textContent = brojac
}
        
input1.value = ""
}


document.querySelector("#taskName").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        appendInputValue()
    }

})

clearAll.addEventListener("click",function(){
    document.querySelector("#list").textContent = ""
    document.querySelector("#numberOfItems").textContent = brojac = 0
    document.querySelector("#datum").textContent = ""
    document.querySelector("#taskName").value = ""
    
})

button.addEventListener("click",function(){
    appendInputValue()
})


