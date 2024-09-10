// Tab 2
function handleSameCharacteristics(isSame) {
    document.getElementById('sameCharacteristicsYes').checked = isSame;
    document.getElementById('sameCharacteristicsNo').checked = !isSame;
}

function navigateFromTab2() {
    const isSame = document.getElementById('sameCharacteristicsYes').checked;

    if (isSame) {
        // Navigate to common characteristics section
        showTab(4);
    } else {
        // Navigate to separate characteristics sections
        showTab(4);
    }
}

function displaySelectedDomainsInTab2() {
    const selectedDomains = [];

    if (document.getElementById('passive_thoughts').checked) {
        selectedDomains.push('Passive Thoughts');
    }
    if (document.getElementById('active_thoughts').checked) {
        selectedDomains.push('Active Thoughts');
    }
    if (document.getElementById('active_thoughts_plan').checked) {
        selectedDomains.push('Active Plan');
    }

    document.getElementById('tab2selected').innerHTML = `<p>Selected domains: ${selectedDomains.join(', ')}</p>`;
}
