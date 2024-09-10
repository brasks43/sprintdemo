function populateTab4Content() {
    // Clear existing content
    document.getElementById('tab4content').innerHTML = ''; 

    let content = `
        <div class="checkbox-container">
            <div class="left-column">
                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="onset" onclick="toggleContent('onset')"> Onset Timing</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-onset"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="recency" onclick="toggleContent('recency')"> Recency Timing</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-recency"></div></div>
                </div>
                
                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="frequency" onclick="toggleContent('frequency')"> Frequency</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-frequency"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="duration" onclick="toggleContent('duration')"> Duration</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-duration"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="controllability" onclick="toggleContent('controllability')"> Controllability</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-controllability"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="problem" onclick="toggleContent('problem')"> Problem/Impairing</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-problem"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="distress" onclick="toggleContent('distress')"> Distressing</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-distress"></div></div>
                </div>

            </div>

            <div class="middle-column">
            
                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="desire" onclick="toggleContent('desire')"> Desire</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-desire"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="urge" onclick="toggleContent('urge')"> Urge</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-urge"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="serious" onclick="toggleContent('serious')"> Seriousness</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-serious"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="intention" onclick="toggleContent('intention')"> Intention</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-intention"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="communication" onclick="toggleContent('communication')"> Communication to Others</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-communication"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="deter" onclick="toggleContent('deter')"> Deterrents</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-deter"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="future" onclick="toggleContent('future')"> Future Likelihood</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-future"></div></div>
                </div>

                </div>




            <div class="right-column">

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="methods" onclick="toggleContent('methods')"> Methods</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-methods"></div></div>
                </div>


                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="confidence" onclick="toggleContent('confidence')"> Confidence</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-confidence"></div></div>
                </div>


                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="planhow" onclick="toggleContent('planhow')"> <b>*</b>Plan-How </div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-planhow"></div></div>
                </div>


                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="planwhere" onclick="toggleContent('planwhere')"> <b>*</b>Plan-Where</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-planwhere"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="planwhen" onclick="toggleContent('planwhen')"> <b>*</b>Plan-When</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-planwhen"></div></div>
                </div>

                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="planhowwherewhen" onclick="toggleContent('planhowwherewhen')"> <b>*</b>Plan-HowWhereWhen</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-planhowwherewhen"></div></div>
                </div>


                <div class="characteristic-item">
                    <div class="checkbox-cell"><input type="checkbox" class="characteristic-checkbox" name="planpersonal" onclick="toggleContent('planpersonal')"> <b>*</b>Plan-Personal Affairs</div>
                    <div class="color-cell"><div class="characteristic-color-box highlight-planpersonal"></div></div>
                </div>


            </div>
        </div>
     <div class="asterisk-note">
            <b>*</b> Only Available for Active with Planning
        </div>
    

    `;
    
    document.getElementById('tab4content').innerHTML = content;

    // Automatically display content without checking the boxes
    displayGroupedContent();
}




function displayGroupedContent() {
    let content = '';

    const passiveThoughtsChecked = document.getElementById('passive_thoughts').checked;
    const activeThoughtsChecked = document.getElementById('active_thoughts').checked;
    const activeThoughtsPlanChecked = document.getElementById('active_thoughts_plan').checked;

    if (passiveThoughtsChecked) {
        content += `<hr><div class="tab4-content"><h3><u>Passive Thoughts</u></h3>`;
        content += generateContent('passive_common_onset');
        content += generateContent('passive_common_recency');
        content += generateContent('passive_common_freq');
        content += generateContent('passive_common_dur');
        content += generateContent('passive_common_control');
        content += generateContent('passive_common_prob');
        content += generateContent('passive_common_distress');
        content += generateContent('passive_common_desire');
        content += generateContent('passive_common_com');
        content += generateContent('passive_common_future');
        
        content += '</div>';
    }

    if (activeThoughtsChecked) {
        content += `<hr><div class="tab4-content"><h3><u>Active Thoughts</u></h3>`;
        content += generateContent('active_common_onset');
        content += generateContent('active_common_recency');
        content += generateContent('active_common_freq');
        content += generateContent('active_common_dur');
        content += generateContent('active_common_control');
        content += generateContent('active_common_prob');
        content += generateContent('active_common_distress');
        content += generateContent('active_common_desire');
        content += generateContent('active_unique_urge');
        content += generateContent('active_unique_serious');
        content += generateContent('active_unique_intention');
        content += generateContent('active_common_com');
        content += generateContent('active_unique_deter');
        content += generateContent('active_common_future');
        
        content += '</div>';
    }

    if (activeThoughtsPlanChecked) {
        content += `<hr><div class="tab4-content"><h3><u>Active Thoughts with Planning</u></h3>`;
        content += generateContent('activeplan_common_onset');
        content += generateContent('activeplan_common_recency');
        content += generateContent('activeplan_common_freq');
        content += generateContent('activeplan_common_dur');
        content += generateContent('activeplan_common_control');
        content += generateContent('activeplan_common_prob');
        content += generateContent('activeplan_common_distress');
        content += generateContent('activeplan_common_desire');
        content += generateContent('activeplan_unique_urge');
        content += generateContent('activeplan_unique_serious');
        content += generateContent('activeplan_unique_intention');
        content += generateContent('activeplan_common_com');
        content += generateContent('activeplan_unique_deter');
        content += generateContent('activeplan_common_future');
        content += generateContent('activeplan_unique_methods');
        content += generateContent('activeplan_unique_confidence');
        content += generateContent('activeplan_unique_planhow');
        content += generateContent('activeplan_unique_planwhere');
        content += generateContent('activeplan_unique_planwhen');
        content += generateContent('activeplan_unique_planhowwherewhen');
        content += generateContent('activeplan_unique_planpersonal');


        content += '</div>';
    }

    document.getElementById('tab4content').innerHTML += content;
}

function generateContent(variableKey) {
    if (!variableDetails[variableKey]) return '';

    const details = variableDetails[variableKey];
    return `<p><strong><span class="characteristic-name" id="char-${variableKey}">${details.characteristic}:</span></strong> ${details.question} <ul><span id="answerfonttab4">Answer Options: ${details.answer_options}</ul></span></p>`;
}

function toggleContent(characteristic) {
    const checkboxes = {
        frequency: ['passive_common_freq', 'active_common_freq', 'activeplan_common_freq'],
        duration: ['passive_common_dur', 'active_common_dur', 'activeplan_common_dur'],
        controllability: ['passive_common_control', 'active_common_control', 'activeplan_common_control'],
        intention: ['active_unique_intention', 'activeplan_unique_intention'],
        onset: ['passive_common_onset', 'active_common_onset', 'activeplan_common_onset'],
        recency: ['passive_common_recency', 'active_common_recency', 'activeplan_common_recency'],
        future: ['passive_common_future', 'active_common_future', 'activeplan_common_future'],
        communication: ['passive_common_com', 'active_common_com', 'activeplan_common_com'],
        confidence: ['activeplan_unique_confidence'],
        desire: ['passive_common_desire', 'active_common_desire', 'activeplan_common_desire'],
        distress: ['passive_common_distress', 'active_common_distress', 'activeplan_common_distress'],
        problem: ['passive_common_prob', 'active_common_prob', 'activeplan_common_prob'],
        deter: ['active_unique_deter', 'activeplan_unique_deter'],
        methods: ['activeplan_unique_methods'],
        planhow: ['activeplan_unique_planhow'],
        planhowwherewhen: ['activeplan_unique_planhowwherewhen'],
        planpersonal: ['activeplan_unique_planpersonal'],
        planwhen: ['activeplan_unique_planwhen'],
        planwhere: ['activeplan_unique_planwhere'],
        serious: ['active_unique_serious', 'activeplan_unique_serious'],
        urge: ['active_unique_urge','activeplan_unique_urge']

    };

    const isChecked = document.querySelector(`input[name="${characteristic}"]`).checked;
    const highlightClass = `highlight-${characteristic}`;

    checkboxes[characteristic].forEach(variableKey => {
        const contentElement = document.getElementById(`char-${variableKey}`);
        if (contentElement) {
            if (isChecked) {
                addVariableToData(variableKey);
                contentElement.classList.add(highlightClass);
            } else {
                removeVariableFromData(variableKey);
                contentElement.classList.remove(highlightClass);
            }
        }
    });
}



function restoreTab4States() {
    displayGroupedContent();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('tab4').classList.contains('active')) {
        populateTab4Content();
    }
});

function exportToWord() {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export to Word</title></head><body>";
    const footer = "</body></html>";

    let contentHTML = '<h2>Customized Suicide Item Export</h2>';
    let id = 1;

    // Assign custom output_order for parent variables
    const customOrder = {
        'passive_thoughts': 0.5,
        'active_thoughts': 10.5,
        'activeplan_thoughts': 24.5
    };

    // Ensure the new selection variables are included in the variableData array
    addSelectionVariables();

    // First, sort by output_order
    const sortedByOrder = variableData.sort((a, b) => {
        const orderA = customOrder[a.variable] !== undefined ? customOrder[a.variable] : parseFloat(a.output_order || 0);
        const orderB = customOrder[b.variable] !== undefined ? customOrder[b.variable] : parseFloat(b.output_order || 0);
        return orderA - orderB;
    });

    // Iterate over the sorted data and build the content for Word
    sortedByOrder.forEach(variable => {
        // Check if characteristic is empty (for the new yes/no variables)
        if (!variable.characteristic) {
            contentHTML += `<p><strong>${id++}. ${variable.suicide_type}:</strong></p>`;
        } else {
            contentHTML += `<p><strong>${id++}. ${variable.suicide_type} - ${variable.characteristic}:</strong></p>`;
        }

        contentHTML += `<p style="font-size: 14px;">${variable.question}</p>`;

        // Only add answer options if they exist
        if (variable.answer_options) {
            const formattedAnswerOptions = variable.answer_options.replace(/\|/g, "<br>");
            const indentedAnswerOptions = `<div style="margin-left: 20px; font-size: 14px;">${formattedAnswerOptions}</div>`;
            contentHTML += indentedAnswerOptions;
        }
    });

    // Combine header, content, and footer
    const sourceHTML = header + contentHTML + footer;

    // Create a downloadable link
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'assessment_tab4.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}



function exportToCSV() {
    addSelectionVariables(); // Ensure the new variables are added before exporting

    // Include BOM for UTF-8 encoding
    let csvContent = "\uFEFFID,Variable,Suicide Type,Characteristic,Question,Answer Options\n";
    let id = 1;

    // Assign custom output_order for parent variables
    const customOrder = {
        'passive_thoughts': 0.5,
        'active_thoughts': 10.5,
        'activeplan_thoughts': 24.5
    };

    // First, sort by output_order
    const sortedByOrder = variableData.sort((a, b) => {
        const orderA = customOrder[a.variable] !== undefined ? customOrder[a.variable] : parseFloat(a.output_order || 0);
        const orderB = customOrder[b.variable] !== undefined ? customOrder[b.variable] : parseFloat(b.output_order || 0);
        return orderA - orderB;
    });

    // Create CSV content from the sorted data
    sortedByOrder.forEach(variable => {
        const suicide_type = `"${variable.suicide_type}"`;
        const characteristic = `"${variable.characteristic || ''}"`; // Empty string for characteristics that are null
        const question = `"${variable.question}"`;
        const answer_options = `"${variable.answer_options}"`;

        csvContent += `${id++},${variable.variable},${suicide_type},${characteristic},${question},${answer_options}\n`;
    });

    // Use Blob to handle proper encoding
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "assessment_tab4_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}





function addSelectionVariables() {
    const selections = [
        { 
            variable: 'passive_thoughts', 
            suicide_type: 'Passive Thoughts', 
            characteristic: '', 
            question: 'During the past 12 months, have you had wishes that you were dead or that you could go to sleep and not wake up?', 
            answer_options: '1) Yes | 0) No', 
            group: 'a' 
        },
        { 
            variable: 'active_thoughts', 
            suicide_type: 'Active Thoughts', 
            characteristic: '', 
            question: 'During the past 12 months, have you had thoughts about killing yourself?', 
            answer_options: '1) Yes | 0) No', 
            group: 'b' 
        },
        { 
            variable: 'activeplan_thoughts', 
            suicide_type: 'Active Suicidal Thoughts with Planning', 
            characteristic: '', 
            question: 'During the past 12 months, have you had thoughts about how, where, or when you might kill yourself?', 
            answer_options: '1) Yes | 0) No', 
            group: 'c' 
        }
    ];

    // Always add all three suicide types
    selections.forEach(selection => {
        const exists = variableData.some(variable => variable.variable === selection.variable);
        if (!exists) {
            variableData.push(selection);
        }
    });
}




function exportMeasure() {
    const format = document.getElementById('exportOption').value;
    console.log("Selected format:", format); // Log the selected format

    if (format === 'csv') {
        console.log("Triggering CSV export..."); // Log when CSV export is triggered
        exportToCSV();
    } else if (format === 'word') {
        console.log("Triggering Word export..."); // Log when Word export is triggered
        exportToWord();
    } else {
        alert('Please select a valid format.');
    }
}


function removeButtons(content) {
    // Remove 'Back', 'Export to CSV', and 'Export to Word' buttons
    content = content.replace(/<button.*?<\/button>/g, '');
    return content;
}

function filterCheckedContent(content) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    // Remove all unchecked checkboxes and their associated labels or containers
    const checkboxes = tempDiv.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            const parent = checkbox.closest('div, p, li'); // Find the closest container
            if (parent && parent.parentElement) {
                parent.parentElement.removeChild(parent); // Remove the container
            } else if (checkbox.parentElement) {
                checkbox.parentElement.removeChild(checkbox); // Remove just the checkbox
            }
        }
    });

    return tempDiv.innerHTML;
}


function enumerateQuestions(content) {
    let questionCounter = 1;
    content = content.replace(/(<strong>.*?<\/strong>)/g, function(match) {
        return `<strong>${questionCounter++}. ${match.slice(8)}`;
    });
    return content;
}

function cleanEmptyLines(content) {
    return content.replace(/^\s*|\s*$/g, '') 
                  .replace(/(<p>\s*<\/p>)+/g, '');
}
