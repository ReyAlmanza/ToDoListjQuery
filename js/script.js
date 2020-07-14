// Step 1
let post  = $('#ButtonPost');
let clear = $('#ButtonClear');
let mark = $('#ButtonMark');
let del = $('#ButtonDelete');
 
// Step 2
post.on("click", function(e){
    TodoPost(e);
});
clear.on("click", function(e){
    TodoClear(e);
});
mark.on("click", function(e){
    TodoMark(e);
});
del.on("click", function(e){
    TodoDel(e);
});
 
function TodoPost(e) {
e.preventDefault();
// Necesito obtener el valor de la caja
var todo = $('#todoText').val();
var list = $('#todoList');
let currentListHTML = list.html();
console.log(todo);
list.html(currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>')
}
 
function TodoClear(e) {
    e.preventDefault();
    $(":checkbox").prop("checked",false);
}
 
function TodoMark(e) {
    e.preventDefault();
    $(":checkbox").prop("checked",true);
}
 
function TodoDel(e) {
    e.preventDefault();
    var list = $('#todoList')
    list.html("") 
}