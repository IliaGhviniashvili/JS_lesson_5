
let input = document.querySelector(".input-block");
let addCountry = document.querySelector(".add-country");
let ullist = document.querySelector(".ul-list");
let deleteall = document.querySelector(".delete-all-item");
let formElement = document.querySelector(".formwrapper");

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    let value = input.value;
    if (value == " "){
        return;
    }

    let li = document.createElement("li");

    // delete button..............
    let deletebtn = document.createElement("i");
    deletebtn.classList.add("icon-eraser");
    deletebtn.addEventListener("click", function(){
        li.remove();

    });
    // let deletebtn = document.createElement("button");
    // deletebtn.textContent = "Delete Item";
    // deletebtn.addEventListener("click", function(){
    //     li.remove();
    // });
    //............................

    li.innerText = value;

    li.appendChild(deletebtn);
    ullist.appendChild(li);

    input.value = " ";

    //delete all..................
    deleteall.addEventListener("click", function(){
        ullist.innerHTML = " ";
    });
});




// input coloring.................

input.addEventListener("focus", function(y){
    y.target.style.border = "2px solid green";
})

//................................

// burger-bar......................

function myFunction(x){
    x.classList.toggle("change");
}

let menubar = document.getElementById("menuid");
let menuiconbar = document.getElementById("iconid");

menuiconbar.addEventListener("click", function(){
    menubar.classList.toggle("active");
});