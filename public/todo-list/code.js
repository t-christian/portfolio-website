var taskList = [];

//change card style if there's no items
function removeCard() {
    var taskCount = document.getElementsByClassName("custom-div").length
    console.log(taskCount)
    const card = document.getElementById("content-card")
    if (taskCount > 0) {
        card.classList.add("card-show")
        card.classList.remove("card-none")
    }
    else {
        card.classList.remove("card-show")
        card.classList.add("card-none")
    }

}
function addNew() {
    var indexOf = taskList.length
    var newItem = document.getElementById("newText").value;
    taskList.push(newItem)
    createNewTaskElementStruture(newItem, indexOf);
}

function createNewTaskElementStruture(content, id) {
    //row w-100 div
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("row","w-100","custom-div")
    const mainList = document.getElementById("mainList");
    mainList.appendChild(mainDiv);
    mainDiv.id = id

        //col
        const colOne = document.createElement("div")
        colOne.classList.add("col","custom-col-1")
            //h5 for task name
            const taskName = document.createElement("h5")
            taskName.innerHTML = content
            taskName.id = id
            taskName.classList.add("custom-taskname")
            colOne.appendChild(taskName)
            mainDiv.appendChild(colOne)
        //col
        const colTwo = document.createElement("div")
        colTwo.classList.add("col","custom-col-2","d-flex","justify-content-center")
            //button
            const newButton = document.createElement("button")
            newButton.classList.add("btn","btn-danger")
            colTwo.appendChild(newButton)
            mainDiv.appendChild(colTwo)
            newButton.setAttribute("onclick","deleteTask(event); removeCard()")
            newButton.id = "button-" + id
            newButton.classList.add("custom-task-button")
            newButton.innerHTML = "Delete"

}

function deleteTask(e) {
    const divToDelete = document.getElementById(e.target.id.split('-')[1])
    taskList.splice(divToDelete.id,1)
    divToDelete.remove();
}
