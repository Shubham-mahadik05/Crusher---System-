// Placeholder script (if needed for form submission or interactivity)
console.log("CERP script loaded.");
function editRow(button) {
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td:not(:last-child)"); // Exclude the last cell with the action buttons

    if (button.textContent === "Edit") {
        // Enable editing
        cells.forEach(cell => cell.setAttribute("contenteditable", "true"));
        button.textContent = "Save";
        button.style.backgroundColor = "#28a745"; // Change button color for "Save"
    } else {
        // Disable editing and save changes
        cells.forEach(cell => cell.setAttribute("contenteditable", "false"));
        button.textContent = "Edit";
        button.style.backgroundColor = "#004080"; // Revert button color to "Edit"

        // Optionally, log the updated data
        const rowData = Array.from(cells).map(cell => cell.textContent.trim());
        console.log("Updated Row Data:", rowData);
    }
}
