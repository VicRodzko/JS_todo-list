var input = document.querySelector("input");
var btn = document.querySelector("button");
var list = document.querySelector("ul");
var last = document.querySelector(".last");

function createNote(){
  if(input.value){
    var text = input.value;
    var newLi = document.createElement("li");
    newLi.setAttribute("class", "newLi");
    var newP = document.createElement("p");
    newP.setAttribute("class", "newP");
    newP.textContent = text;
    var span = document.createElement("span");
    span.setAttribute("class", "remove");

    span.onclick = function(){
      list.removeChild(newLi);
    }

    newP.appendChild(span);
    newLi.appendChild(newP);
    list.insertBefore(newLi, last);
    input.value = "";
  }
}

btn.onclick = createNote;

input.onkeypress = function(e){
  if(e.keyCode == 13){
    createNote();
  }
}
