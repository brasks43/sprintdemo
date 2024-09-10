function populateTab3Content() {
    // Clear existing content
    document.getElementById('tab3content').innerHTML = '';

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

    document.getElementById('tab3content').innerHTML = content;

    // Automatically display content for checked boxes
    displayTab3Content();
}

function toggleTab3Content(characteristic) {
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

function displayTab3Content() {
    let content = '';

    const passiveThoughtsChecked = document.getElementById('passive_thoughts').checked;
    const activeThoughtsChecked = document.getElementById('active_thoughts').checked;
    const activeThoughtsPlanChecked = document.getElementById('active_thoughts_plan').checked;

    if (passiveThoughtsChecked) {
        content += `<hr><div class="tab3-content"><h3><u>Passive Thoughts</u></h3>`;
        content += generateTab3Content('passive_common_onset');
        content += generateTab3Content('passive_common_recency');
        content += generateTab3Content('passive_common_freq');
        content += generateTab3Content('passive_common_dur');
        content += generateTab3Content('passive_common_control');
        content += generateTab3Content('passive_common_prob');
        content += generateTab3Content('passive_common_distress');
        content += generateTab3Content('passive_common_desire');
        content += generateTab3Content('passive_common_com');
        content += generateTab3Content('passive_common_future');
        content += '</div>';
    }

    if (activeThoughtsChecked) {
        content += `<hr><div class="tab3-content"><h3><u>Active Thoughts</u></h3>`;
        content += generateTab3Content('active_common_onset');
        content += generateTab3Content('active_common_recency');
        content += generateTab3Content('active_common_freq');
        content += generateTab3Content('active_common_dur');
        content += generateTab3Content('active_common_control');
        content += generateTab3Content('active_common_prob');
        content += generateTab3Content('active_common_distress');
        content += generateTab3Content('active_common_desire');
        content += generateTab3Content('active_unique_urge');
        content += generateTab3Content('active_unique_serious');
        content += generateTab3Content('active_unique_intention');
        content += generateTab3Content('active_common_com');
        content += generateTab3Content('active_unique_deter');
        content += generateTab3Content('active_common_future');
        content += '</div>';
    }

    if (activeThoughtsPlanChecked) {
        content += `<hr><div class="tab3-content"><h3><u>Active Thoughts with Planning</u></h3>`;
        content += generateTab3Content('activeplan_common_onset');
        content += generateTab3Content('activeplan_common_recency');
        content += generateTab3Content('activeplan_common_freq');
        content += generateTab3Content('activeplan_common_dur');
        content += generateTab3Content('activeplan_common_control');
        content += generateTab3Content('activeplan_common_prob');
        content += generateTab3Content('activeplan_common_distress');
        content += generateTab3Content('activeplan_common_desire');
        content += generateTab3Content('activeplan_unique_urge');
        content += generateTab3Content('activeplan_unique_serious');
        content += generateTab3Content('activeplan_unique_intention');
        content += generateTab3Content('activeplan_common_com');
        content += generateTab3Content('activeplan_unique_deter');
        content += generateTab3Content('activeplan_common_future');
        content += generateTab3Content('activeplan_unique_methods');
        content += generateTab3Content('activeplan_unique_confidence');
        content += generateTab3Content('activeplan_unique_planhow');
        content += generateTab3Content('activeplan_unique_planwhere');
        content += generateTab3Content('activeplan_unique_planwhen');
        content += generateTab3Content('activeplan_unique_planhowwherewhen');
        content += generateTab3Content('activeplan_unique_planpersonal');
        content += '</div>';
    }

    document.getElementById('tab3content').innerHTML += content;
}


function generateTab3Content(variableKey) {
    if (!variableDetails[variableKey]) return '';

    const details = variableDetails[variableKey];
    return `<p><strong><span class="characteristic-name" id="char-${variableKey}">${details.characteristic}:</span></strong> ${details.question} <ul><span id="answerfonttab3">Answer Options: ${details.answer_options}</ul></span></p>`;
}

function exportTab3ToWord() {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export to Word</title></head><body>";
    const footer = "</body></html>";

    let contentHTML = '<h2>Customized Suicide Item Export</h2>';
    let id = 1; // Start enumeration at 1

    const passiveThoughtsChecked = document.getElementById('passive_thoughts').checked;
    const activeThoughtsChecked = document.getElementById('active_thoughts').checked;
    const activeThoughtsPlanChecked = document.getElementById('active_thoughts_plan').checked;

    // Helper function to check if a characteristic is selected and generate Word content if so
    function generateWordIfChecked(variableKey, characteristicName) {
        const checkbox = document.querySelector(`input[name="${characteristicName}"]`);
        if (checkbox && checkbox.checked) {
            contentHTML += `<p><strong>${id++}. </strong> ${generateWordContent(variableKey)}</p>`;
        }
    }

    // Define questions and answer options for each suicide type
const suicideTypeDetails = {
    passive_thoughts: {
        question: "During the past 12 months, have you had wishes that you were dead or that you could go to sleep and not wake up?",
        answer_options: "1) Yes | 0) No",
        suicide_type: "Passive Thoughts"
    },
    active_thoughts: {
        question: "During the past 12 months, have you had thoughts about killing yourself?",
        answer_options: "1) Yes | 0) No",
        suicide_type: "Active Thoughts"
    },
    activeplan_thoughts: {
        question: "During the past 12 months, have you had thoughts about how, where, or when you might kill yourself?",
        answer_options: "1) Yes | 0) No",
        suicide_type: "Active Suicidal Thoughts with Planning"
    }
};

    // Function to add the suicide thought type question and answer options
    function addSuicideTypeDetails(type) {
        contentHTML += `<p><strong>${id++}. ${suicideTypeDetails[type].suicide_type}:</strong> ${suicideTypeDetails[type].question}</p>`;
        contentHTML += `<div style="margin-left: 20px;">${suicideTypeDetails[type].answer_options.replace(/\|/g, '<br>')}</div>`;
    }
    

    // Export Passive Thoughts if selected
    if (passiveThoughtsChecked) {
        addSuicideTypeDetails('passive_thoughts');  // Start enumeration with Passive Thoughts question
        generateWordIfChecked('passive_common_onset', 'onset');
        generateWordIfChecked('passive_common_recency', 'recency');
        generateWordIfChecked('passive_common_freq', 'frequency');
        generateWordIfChecked('passive_common_dur', 'duration');
        generateWordIfChecked('passive_common_control', 'controllability');
        generateWordIfChecked('passive_common_prob', 'problem');
        generateWordIfChecked('passive_common_distress', 'distress');
        generateWordIfChecked('passive_common_desire', 'desire');
        generateWordIfChecked('passive_common_com', 'communication');
        generateWordIfChecked('passive_common_future', 'future');
        addSuicideTypeDetails('active_thoughts');  
        addSuicideTypeDetails('activeplan_thoughts');
    }

    // Export Active Thoughts if selected
    if (activeThoughtsChecked) {
        addSuicideTypeDetails('passive_thoughts'); 
        addSuicideTypeDetails('active_thoughts');  // Start enumeration with Active Thoughts question
        generateWordIfChecked('active_common_onset', 'onset');
        generateWordIfChecked('active_common_recency', 'recency');
        generateWordIfChecked('active_common_freq', 'frequency');
        generateWordIfChecked('active_common_dur', 'duration');
        generateWordIfChecked('active_common_control', 'controllability');
        generateWordIfChecked('active_common_prob', 'problem');
        generateWordIfChecked('active_common_distress', 'distress');
        generateWordIfChecked('active_common_desire', 'desire');
        generateWordIfChecked('active_unique_urge', 'urge');
        generateWordIfChecked('active_unique_serious', 'serious');
        generateWordIfChecked('active_unique_intention', 'intention');
        generateWordIfChecked('active_common_com', 'communication');
        generateWordIfChecked('active_unique_deter', 'deter');
        generateWordIfChecked('active_common_future', 'future');
        addSuicideTypeDetails('activeplan_thoughts');
    }

    // Export Active Plan if selected
    if (activeThoughtsPlanChecked) {
        addSuicideTypeDetails('passive_thoughts'); 
        addSuicideTypeDetails('active_thoughts'); 
        addSuicideTypeDetails('activeplan_thoughts');  // Start enumeration with Active Thoughts with Planning question
        generateWordIfChecked('activeplan_common_onset', 'onset');
        generateWordIfChecked('activeplan_common_recency', 'recency');
        generateWordIfChecked('activeplan_common_freq', 'frequency');
        generateWordIfChecked('activeplan_common_dur', 'duration');
        generateWordIfChecked('activeplan_unique_methods', 'methods');
        generateWordIfChecked('activeplan_unique_confidence', 'confidence');
        generateWordIfChecked('activeplan_unique_planhow', 'planhow');
        generateWordIfChecked('activeplan_unique_planwhere', 'planwhere');
        generateWordIfChecked('activeplan_unique_planwhen', 'planwhen');
        generateWordIfChecked('activeplan_unique_planhowwherewhen', 'planhowwherewhen');
        generateWordIfChecked('activeplan_unique_planpersonal', 'planpersonal');
        generateWordIfChecked('activeplan_common_control', 'controllability');
        generateWordIfChecked('activeplan_common_prob', 'problem');
        generateWordIfChecked('activeplan_common_distress', 'distress');
        generateWordIfChecked('activeplan_common_desire', 'desire');
        generateWordIfChecked('activeplan_unique_urge', 'urge');
        generateWordIfChecked('activeplan_unique_serious', 'serious');
        generateWordIfChecked('activeplan_unique_intention', 'intention');
        generateWordIfChecked('activeplan_common_com', 'communication');
        generateWordIfChecked('activeplan_unique_deter', 'deter');
        generateWordIfChecked('activeplan_common_future', 'future');
    }

    // Combine header, content, and footer
    const sourceHTML = header + contentHTML + footer;

    // Create a downloadable link
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'assessment_tab3.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

function generateWordContent(variableKey) {
    if (!variableDetails[variableKey]) return ''; // Skip if the variable is not defined

    const details = variableDetails[variableKey];
    return `<strong>${details.suicide_type} - ${details.characteristic}</strong>: <p>${details.question}</p>
            <div style="margin-left: 20px;">${details.answer_options.replace(/\|/g, '<br>')}</div>`;
}

function exportTab3ToCSV() {
    let csvContent = "\uFEFFID,Variable,Suicide Type,Characteristic,Question,Answer Options\n"; // Include BOM for UTF-8 encoding
    let id = 1;

    const passiveThoughtsChecked = document.getElementById('passive_thoughts').checked;
    const activeThoughtsChecked = document.getElementById('active_thoughts').checked;
    const activeThoughtsPlanChecked = document.getElementById('active_thoughts_plan').checked;

    // Helper function to check if a characteristic is selected and generate CSV row if so
    function generateCSVIfChecked(variableKey, characteristicName) {
        const checkbox = document.querySelector(`input[name="${characteristicName}"]`);
        if (checkbox && checkbox.checked) {
            csvContent += generateCSVRow(variableKey, id);
        }
    }

    // Only add 'passive_thoughts' section if it was selected, along with characteristics
    if (passiveThoughtsChecked) {
        csvContent += `${id++},passive_thoughts,"Passive Thoughts","","During the past 12 months, have you had wishes that you were dead or that you could go to sleep and not wake up?","Yes | No"\n`;
        generateCSVIfChecked('passive_common_onset', 'onset');
        generateCSVIfChecked('passive_common_recency', 'recency');
        generateCSVIfChecked('passive_common_freq', 'frequency');
        generateCSVIfChecked('passive_common_dur', 'duration');
        generateCSVIfChecked('passive_common_control', 'controllability');
        generateCSVIfChecked('passive_common_prob', 'problem');
        generateCSVIfChecked('passive_common_distress', 'distress');
        generateCSVIfChecked('passive_common_desire', 'desire');
        generateCSVIfChecked('passive_common_com', 'communication');
        generateCSVIfChecked('passive_common_future', 'future');
        csvContent += `${id++},active_thoughts,"Active Thoughts","","During the past 12 months, have you had thoughts about killing yourself?","Yes | No"\n`;
        csvContent += `${id++},activeplan_thoughts,"Active Suicidal Thoughts with Planning","","During the past 12 months, have you had thoughts about how, where, or when you might kill yourself?","Yes | No"\n`;
        
    }

    // Only add 'active_thoughts' section if it was selected, along with characteristics
    if (activeThoughtsChecked) {
        csvContent += `${id++},passive_thoughts,"Passive Thoughts","","During the past 12 months, have you had wishes that you were dead or that you could go to sleep and not wake up?","Yes | No"\n`;
        csvContent += `${id++},active_thoughts,"Active Thoughts","","During the past 12 months, have you had thoughts about killing yourself?","Yes | No"\n`;
        generateCSVIfChecked('active_common_onset', 'onset');
        generateCSVIfChecked('active_common_recency', 'recency');
        generateCSVIfChecked('active_common_freq', 'frequency');
        generateCSVIfChecked('active_common_dur', 'duration');
        generateCSVIfChecked('active_common_control', 'controllability');
        generateCSVIfChecked('active_common_prob', 'problem');
        generateCSVIfChecked('active_common_distress', 'distress');
        generateCSVIfChecked('active_common_desire', 'desire');
        generateCSVIfChecked('active_unique_urge', 'urge');
        generateCSVIfChecked('active_unique_serious', 'serious');
        generateCSVIfChecked('active_unique_intention', 'intention');
        generateCSVIfChecked('active_common_com', 'communication');
        generateCSVIfChecked('active_unique_deter', 'deter');
        generateCSVIfChecked('active_common_future', 'future');
        csvContent += `${id++},activeplan_thoughts,"Active Suicidal Thoughts with Planning","","During the past 12 months, have you had thoughts about how, where, or when you might kill yourself?","Yes | No"\n`;
        
    }

    // Only add 'activeplan_thoughts' section if it was selected, along with characteristics
    if (activeThoughtsPlanChecked) {
        csvContent += `${id++},passive_thoughts,"Passive Thoughts","","During the past 12 months, have you had wishes that you were dead or that you could go to sleep and not wake up?","Yes | No"\n`;
        csvContent += `${id++},active_thoughts,"Active Thoughts","","During the past 12 months, have you had thoughts about killing yourself?","Yes | No"\n`;
        csvContent += `${id++},activeplan_thoughts,"Active Suicidal Thoughts with Planning","","During the past 12 months, have you had thoughts about how, where, or when you might kill yourself?","Yes | No"\n`;
        generateCSVIfChecked('activeplan_common_onset', 'onset');
        generateCSVIfChecked('activeplan_common_recency', 'recency');
        generateCSVIfChecked('activeplan_common_freq', 'frequency');
        generateCSVIfChecked('activeplan_common_dur', 'duration');
        generateCSVIfChecked('activeplan_unique_methods', 'methods');
        generateCSVIfChecked('activeplan_unique_confidence', 'confidence');
        generateCSVIfChecked('activeplan_unique_planhow', 'planhow');
        generateCSVIfChecked('activeplan_unique_planwhere', 'planwhere');
        generateCSVIfChecked('activeplan_unique_planwhen', 'planwhen');
        generateCSVIfChecked('activeplan_unique_planhowwherewhen', 'planhowwherewhen');
        generateCSVIfChecked('activeplan_unique_planpersonal', 'planpersonal');
        generateCSVIfChecked('activeplan_common_control', 'controllability');
        generateCSVIfChecked('activeplan_common_prob', 'problem');
        generateCSVIfChecked('activeplan_common_distress', 'distress');
        generateCSVIfChecked('activeplan_common_desire', 'desire');
        generateCSVIfChecked('activeplan_unique_urge', 'urge');
        generateCSVIfChecked('activeplan_unique_serious', 'serious');
        generateCSVIfChecked('activeplan_unique_intention', 'intention');
        generateCSVIfChecked('activeplan_common_com', 'communication');
        generateCSVIfChecked('activeplan_unique_deter', 'deter');
        generateCSVIfChecked('activeplan_common_future', 'future');
        
    }

    // Use Blob to handle proper encoding
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "assessment_tab3_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function generateCSVRow(variableKey, id) {
    if (!variableDetails[variableKey]) return ''; // If the variable is not defined, skip

    const details = variableDetails[variableKey];
    return `${id++},${variableKey},"${details.suicide_type}","${details.characteristic}","${details.question}","${details.answer_options}"\n`;
}


function addSelectionVariablesTab3() {
    const selections = [
        { variable: 'passive_thoughts', suicide_type: 'Passive Thoughts', characteristic: '', question: 'During the past 12 months, have you had wishes that you were dead or that you could go to sleep and not wake up?', answer_options: 'Yes | No', group: 'a' },
        { variable: 'active_thoughts', suicide_type: 'Active Thoughts', characteristic: '', question: 'During the past 12 months, have you had thoughts about killing yourself?', answer_options: 'Yes | No', group: 'b' },
        { variable: 'activeplan_thoughts', suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: '', question: 'During the past 12 months, have you had thoughts about how, where, or when you might kill yourself?', answer_options: 'Yes | No', group: 'c' }
    ];

    selections.forEach(selection => {
        const exists = variableData.some(variable => variable.variable === selection.variable);
        if (!exists) {
            variableData.push(selection);
        }
    });
}

function exportTab3Measure() {
    const format = document.getElementById('exportOptionTab3').value; // Get the selected format from the combobox

    if (format === 'csv') {
        exportTab3ToCSV();  // Call the CSV export function
    } else if (format === 'word') {
        exportTab3ToWord(); // Call the Word export function
    } else {
        alert('Please select a valid format.');
    }
}
