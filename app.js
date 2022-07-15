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
    e.preventDefault();
    let todo = form.value;
    if (todo.length > 0) {
        let todoObj = {
            id: guidGenerator(),
            todo: todo,
            done: false,
        };
        todoArray.push(todoObj);
        let todoItem = document.createElement("div");
        todoItem.setAttribute("id", todoObj.id);
        todoItem.innerHTML = `<div style=" display: flex;
	justify-content: space-between; align-items : center; margin-top : 15px;">
							<label>
							  <input type="checkbox" />
							  <span>${todoObj.todo}</span>
							</label>
                            <a class="waves-effect waves-teal btn-flat deletebtn " id="deletebtn"
                            ><i class="btn material-icons" style="cursor : pointer;">delete </i></a>
														  </div>`;

        todolist.appendChild(todoItem);
        //clear todo input
        todo = "";
    }

    //create the delete button every delete button has the same id as the element it is attached to
    let deletebtn = document.querySelectorAll(".deletebtn");
    deletebtn.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            let id = btn.parentElement.parentElement.id;
            let index = todoArray.findIndex(function(todo) {
                return todo.id === id;
            });
            todoArray.splice(index, 1);
            btn.parentElement.parentElement.remove();
        });
    });
    //create the checkbox every checkbox has the same id as the element it is attached to and when clicked it switches to the opposite state
    let checkbox = document.querySelectorAll("input[type=checkbox]");
    checkbox.forEach(function(check) {
        check.addEventListener("click", function(e) {
            let id = check.parentElement.parentElement.parentElement.id;
            let index = todoArray.findIndex(function(todo) {
                return todo.id === id;
            });

            todoArray[index].done = !todoArray[index].done;

            if (todoArray[index].done === true) {
                check.nextElementSibling.style.textDecoration = "line-through";
                console.log(check);
            } else {
                console.log("not done");
                check.nextElementSibling.style.textDecoration = "none";
            }
        });
    });
});