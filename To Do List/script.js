let input = document.querySelector("#todoText");
let listCotainer = document.querySelector(".listCotainer");



function addTask(p){
        if(input.value === ""){
        alert("You Must Write Something")
    }
    else{
        let newLi = document.createElement("li");
        newLi.innerHTML = input.value;
        listCotainer.appendChild(newLi);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        newLi.appendChild(span)
    }
    input.value = "";
    saveData()
 }
 listCotainer.addEventListener("click", (e) => {
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()

    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
 }, false)


 function saveData(){
    localStorage.setItem("data",  listCotainer.innerHTML)
 }

 function getData(){
    listCotainer.innerHTML = localStorage.getItem("data")
 }
 getData()