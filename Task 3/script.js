// 1. Select the HTML elements
const input = document.getElementById('inputtxt');
const addBtn = document.getElementById('addButton');
const pendingList = document.querySelector('#pending ul');
const completedList = document.querySelector('#completed ul');

// 2. Function to Add a Task
addBtn.onclick = function() {
    const taskValue = input.value;

    // Validation: Don't add if empty
    if (taskValue.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the List Item (li)
    const li = document.createElement('li');
    
    // Get Current Date and Time
    const time = new Date().toLocaleString();

    // Set the internal HTML of the list item
    li.innerHTML = `
        <span><strong>${taskValue}</strong> <br> <small>(Added: ${time})</small></span>
        <div style="margin-top: 10px;">
            <button onclick="completeTask(this)" style="background-color: #4CAF50; color: white; border: none; padding: 5px; cursor: pointer; border-radius: 4px;">Complete</button>
            <button onclick="deleteTask(this)" style="background-color: #f44336; color: white; border: none; padding: 5px; cursor: pointer; border-radius: 4px; margin-left: 5px;">Delete</button>
        </div>
    `;

    // Add to the Pending List
    pendingList.appendChild(li);

    // Clear the input box
    input.value = "";
};

// 3. Function to Move Task to Completed
function completeTask(button) {
    const li = button.parentElement.parentElement;
    const finishTime = new Date().toLocaleString();
    
    // Update the text to show completion time
    li.querySelector('small').innerHTML += ` | Finished: ${finishTime}`;
    
    // Move to Completed List
    completedList.appendChild(li);
    
    // Remove the "Complete" button so it can't be clicked again
    button.remove();
}

// 4. Function to Delete Task
function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}