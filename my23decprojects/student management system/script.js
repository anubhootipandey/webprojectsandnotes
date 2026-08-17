document.addEventListener("DOMContentLoaded", function () {
    const studentList = document.getElementById("students");

    function addStudent() {
        const nameInput = document.getElementById("name");
        const rollInput = document.getElementById("roll");

        const name = nameInput.value.trim();
        const roll = rollInput.value.trim();

        if (name === "" || roll === "") {
            alert("Please enter both name and roll number.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${name}</strong> - Roll: ${roll}`;
        
        studentList.appendChild(listItem);

        // Clear input fields
        nameInput.value = "";
        rollInput.value = "";
    }

    // Expose addStudent function globally for button click
    window.addStudent = addStudent;
});
