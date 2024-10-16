let text = document.getElementById("tb");
let list = document.getElementById("li");
let ch = document.getElementsByClassName("Gchild")[0];

function change(){
    ch.style.backgroundColor = "white";
    text.style.borderColor = "white";
    text.style.border = "transparent";
}
function task() {
    if(text.value ===''){
        alert("Enter any task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= `<i class="fa-solid fa-trash fa-shake"></i>`;
        li.appendChild(span)
    }
    text.value='';
    save();
}
list.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("tick");
        save();
    }
        if (e.target.closest('span')) {
         e.target.closest('li').remove();
         save();
    }
})
function save(){
    localStorage.setItem("data",list.innerHTML)
}
function display(){
    list.innerHTML=localStorage.getItem("data");
}
display();
// localStorage.clear();

