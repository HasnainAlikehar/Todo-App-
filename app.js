// // Todo app task 


const input = document.querySelector("input")
const ul = document.querySelector("ul")

// Add todo

const todo = [];

function addtodo(){
    todo.push(input.value);
    console.log(todo)
    input.value = ``
    ul.innerHTML= ``

    for ( let i =0 ; i < todo.length; i++){
    ul.innerHTML += `<li>${todo[i]}
    <button class="inputbutton"  onclick="deletetodo(${[i]})">Delete</button>
    <button class="inputbutton" onclick="edittodo(${i})">edit</button>
    </li>
    `
    }

}

function rendertodo(){
    ul.innerHTML = ''
    for ( let i =0 ; i < todo.length; i++){
        ul.innerHTML += `<li>${todo[i]}
        <button onclick="deletetodo(${[i]})">Delete</button>
        <button onclick="edittodo(${i})">edit</button>
        </li>
        `
        }
}

function addTodo() {
    todo.push(input.value)
    input.value = " "
    rendertodo()

}


function deletetodo( index ){
    console.log("delte todo", index)
    todo.splice(index,1)
    rendertodo()


}

function edittodo( index ){
    const editedvalue = prompt("Enter new value")
    todo.splice( index , 1 , editedvalue )
    rendertodo()
}


function deleteAll ( index ){
    todo.splice( index , 1)
    rendertodo()
}


function deleteAll( li ){
    todo.splice( li ,  )
    rendertodo()
}






// Secnond Todo App 



// const input = document.querySelector("#Input")
// const ul = document.querySelector("#ul")
// const todo = []


// //  create for render todo on web page for example li ko webpage pr show krwane k liye function bnaya hai  

// function rendertodo(){
//     ul.innerHTML = ``
//     for (let i = 0; i < todo.length ; i++ )
//     ul.innerHTML += `<li>${todo[i]}
//     <button onclick="Deletetodo(${i})">Delete</button>
//     <button onclick="editTodo(${i})">Edit</button>
//     </li> `

// }

// // Add btn bnaya or render krwa diya jo code mera function ka create kia usko add-btn se connect krwa diya jab add-btn pr click krunga to mera code web page pr run krega 


// // add buttun

// function addtodo(){
//     todo.push(input.value)
//     console.log(todo)
//     input.value = ''
//     rendertodo()

// }

// //  Delete button

// function Deletetodo(index){
//     todo.splice(index, 1)
//     rendertodo()
// }


// // Edit todo

// function editTodo(index){
//     let editedvalue = prompt("Enter Your Todo");
//     todo.splice( index , 1 , editedvalue);
//     rendertodo();
// }


// // Delete todo

// function deleteAll( index ){
//     todo.splice( index  )
//     rendertodo()
// }


