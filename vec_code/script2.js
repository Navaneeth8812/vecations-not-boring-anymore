function displayCont(){
    var inp1 = document.getElementById("box");
    if(inp1 == null){
        inp1.style.display==null;
    }else{
        inp1.style.display==grid;
    }
}
function saveList(){
    localStorage.storedList = document.getElementById("list").innerHTML;
}
function addItem(){
    var newItem = document.createElement("div");
    newItem.innerHTML=document.getElementById("box").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}
function removeItem(){
    document.getElementById("list").removeChild(this);
    saveList();
}
