let form = document.querySelector(".todoform");
let todolist = document.querySelector(".todolist");
let addbtn = document.querySelector(".addbtn");
let todoArray = [];

function guidGenerator() {
    var S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
    );
}
addbtn.addEventListener("click", function(e) {
    console.log("addbtn clicked");
    e.preventDefault();
    let todo = form.value;
    console.log(todo);
    let todoObj = {
        id: guidGenerator(),
        todo: todo,
        done: false,
    };
    todoArray.push(todoObj);
    let todoItem = document.createElement("div");
    todoItem.setAttribute("id", todoObj.id);
    todoItem.innerHTML = `<div style=" display: flex;
	justify-content: space-between; align-items : center;">
							<label>
							  <input type="checkbox" />
							  <span>${todoObj.todo}</span>
							</label>
							<a
							class=" deletebtn"
							><i class=" material-icons" style="cursor : pointer;">delete</i></a
						  >

														  </div>`;

    todolist.appendChild(todoItem);
    document.form.value = "";
});

let deletebtn = document.querySelector(".deletebtn");
deletebtn.addEventListener("click", function(e) {
    console.log("deletebtn clicked");
    e.preventDefault();
    let todoItem = e.target.parentElement.parentElement;
    let todoId = todoItem.id;
    console.log(todoId);
    todoArray.forEach(function(item, index) {
        if (item.id === todoId) {
            todoArray.splice(index, 1);
        }
    });
    todoItem.remove();
});