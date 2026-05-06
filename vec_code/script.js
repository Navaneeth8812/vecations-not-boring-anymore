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
