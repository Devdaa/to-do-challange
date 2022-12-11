let addButton = document.getElementById("addToListBtn");
let buttonA = document.getElementById("all");
let buttonB = document.getElementById("active");
let buttonC = document.getElementById("completed");
let list = document.querySelector(".toDoList");
let listInput = document.querySelector(".listInput");
var deleteButton = document.createElement("button");
var removeElements = document.getElementsByClassName(".deleteBtn");


buttonA.addEventListener("click", function(){
    buttonA.classList.remove("btnZ");
    buttonA.classList.add("btnA");
    buttonC.classList.remove("btnA");
    buttonB.classList.remove("btnA");
    buttonC.classList.add("btnZ");
    buttonB.classList.add("btnZ");
    if(list.querySelector(".deleteBtn") !==null){
        list.removeChild(deleteButton);
    }
    displayAll();
});
buttonB.addEventListener("click", function(){
    buttonB.classList.remove("btnZ");
    buttonB.classList.add("btnA");
    buttonA.classList.remove("btnA");
    buttonC.classList.remove("btnA");
    buttonC.classList.add("btnZ");
    buttonA.classList.add("btnZ");
    if(list.querySelector(".deleteBtn") !==null){
        list.removeChild(deleteButton);
    }
    displayActive();
});
buttonC.addEventListener("click", function(){
    buttonC.classList.remove("btnZ");
    buttonC.classList.add("btnA");
    buttonB.classList.remove("btnA");
    buttonA.classList.remove("btnA");
    buttonB.classList.add("btnZ");
    buttonA.classList.add("btnZ");
    displayCompleted();
    deleteBtn();
});

addButton.addEventListener("click", function(event){
    event.preventDefault();
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.innerText = listInput.value;
    list.appendChild(paragraph);
    listInput.value="";
    paragraph.style.textDecoration = "none";
    paragraph.addEventListener("click" , function(){
        if(paragraph.style.textDecoration === "line-through"){
            paragraph.style.textDecoration = "none";
        }else{
            paragraph.style.textDecoration = "line-through";
        }
    })
    let key = "elements";
    localStorage.setItem(key, paragraph.innerText);
    console.log(localStorage);
})

function displayAll(){
    var para = document.getElementsByClassName("paragraph");
    for(let i=0; i<para.length; i++){
        para[i].style.display = "block";
    }
}

function displayActive(){
    displayAll();
    var para2 = document.getElementsByClassName("paragraph");
    for(let i=0; i<para2.length; i++){
        if(para2[i].style.textDecoration === "line-through"){
            para2[i].style.display = "none";
        }
    }
}

function displayCompleted(){
    displayAll();
    var para3 = document.getElementsByClassName("paragraph");
    for(let i=0; i<para3.length; i++){
        if(para3[i].style.textDecoration === "none"){
            para3[i].style.display = "none";
        }
    }
}

function deleteBtn(){
    deleteButton.innerText = "delete all";
    deleteButton.classList.add("deleteBtn");
    list.appendChild(deleteButton);
}

deleteButton.addEventListener("click", function(){
    let para4 = document.getElementsByClassName("paragraph");
    for(let i=0; i<para4.length; i++){
        if(para4[i].style.textDecoration === "line-through"){
            para4[i].remove();
        }
    }
})