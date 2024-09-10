// tab1.js
function updateTotal() {
    const checkboxes = document.querySelectorAll('#tab1 input[type="checkbox"]');
    let total = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.name !== 'selectAll') {  // Ensure only 'Yes' checkboxes are counted
            total += 1;
        }
    });
    document.getElementById('tab1total').value = total;
}

function selectAllCheckboxes(selectAll) {
    const checkboxes = document.querySelectorAll('#tab1 input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.name !== 'selectAll') {  // Only select 'Yes' checkboxes
            checkbox.checked = selectAll.checked;
        }
    });
    updateTotal();
}

function navigateToNextTab() {
    const totalChecked = parseInt(document.getElementById('tab1total').value, 10);

    // If no checkboxes are selected, show an alert
    if (totalChecked === 0) {
        alert("Please select 1 or more types of suicidal thoughts before proceeding.");
        return; // Stop execution here, don't move to the next tab
    }

    // Proceed to the correct tab based on the number of checkboxes selected
    if (totalChecked === 1) {
        populateTab3Content();
        showTab(3);
    } else if (totalChecked === 2 || totalChecked === 3) {
        populateTab4Content();
        showTab(4);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateTotal();
});
