let variableData = [];
let tabHistory = [];

const variableDetails = {

passive_common_onset: { suicide_type: 'Passive Thoughts', characteristic: 'Onset_Timing', question: 'When was the FIRST time you had these wishes that you were dead or that you could go to sleep and not wake up in the past 12 months?', answer_options: '1) Past 1-2 days | 2) Past 3-7 days | 3) Past 8-30 days | 4) Past 2-6 months | 5) Past 7-12 months', output_order: '1'},
passive_common_recency: { suicide_type: 'Passive Thoughts', characteristic: 'Recency_Timing', question: 'When was your LAST time you had these wishes that you were dead or that you could go to sleep and not wake up inthe past 12 months?', answer_options: '1) Past 1-2 days | 2) Past 3-7 days | 3) Past 8-30 days | 4) Past 2-6 months |5) Past 7-12 months ', output_order: '2'},
passive_common_freq: { suicide_type: 'Passive Thoughts', characteristic: 'Frequency', question: 'In the past 12 months, on how many days did you have these wishes that you were dead or that you could go to sleep and not wake up?', answer_options: '1) Every or nearly every day | 2) 3-4 days a week | 3) 1-2 days a week | 4) 1-3 days a month | 5) Less than once a month | 6) 1-2 days per year |7) Less than once a year', output_order: '3'},
passive_common_dur: { suicide_type: 'Passive Thoughts', characteristic: 'Duration', question: 'During the past 12 months, on average, how long did these wishes that you were dead or that you could go to sleep and not wake up usually last each time?', answer_options: '1) < 5 minutes | 2) 6-59 minutes | 3) 5 -60 minutes | 4) 1-4  hours | 5) 5-8 hours | 6) 9 or more hours', output_order: '4'},
passive_common_control: { suicide_type: 'Passive Thoughts', characteristic: 'Controllability', question: 'During the past 12 months, on average, how difficult was it for you to control your wishes that you were dead or that you could go to sleep and not wake up or push them out of your mind when you wanted to?', answer_options: '0) Not difficult at all | 1) A little difficult | 2) Somewhat difficult | 3) Very difficult | 4) Impossible', output_order: '5'},
passive_common_prob: { suicide_type: 'Passive Thoughts', characteristic: 'Problem/Impairing', question: 'In the past 12 months, on average, how problematic for you were these wishes that you were dead or that you could go to sleep and not wake up?', answer_options: '0) Not at all problematic (e.g., The thoughts didn’t impact my ability to work, socialize, or take care of things at home) | 1) A little problematic (e.g., The thoughts interfered a little bit with my ability to work, socialize, or take care of things at home) | 2) Somewhat problematic (e.g., The thoughts made it somewhat difficult for me to work, socialize, or take care of things at home) | 3) Quite problematic (e.g., The thoughts made it quite difficult for me to work, socialize, or take care of things at home) | 4) Extremely problematic (e.g., The thoughts kept me from being able to work, socialize, or take care of things at home) ', output_order: '6'},
passive_common_distress: { suicide_type: 'Passive Thoughts', characteristic: 'Distressing', question: 'In the past 12 months, on average, how did you feel when these wishes that you were dead or that you could go to sleep and not wake up came to mind?', answer_options: '0) No impact on how I felt (e.g., The thoughts didn’t really make me feel anything in particular) | 1) A little bothered or upset | 2) Somewhat bothered or upset | 3) Quite bothered or upset | 4) Extremely bothered or upset | 5) Comforted (e.g., I felt a sense of relief, peace, control, etc.)  ', output_order: '7'},
passive_common_desire: { suicide_type: 'Passive Thoughts', characteristic: 'Desire', question: 'During the past 12 months, on average, how strong was your desire to be dead or go to sleep and not wake up again?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '8'},
passive_common_com: { suicide_type: 'Passive Thoughts', characteristic: 'Communication to Others', question: 'During the past 12 months, have you told someone that you had these wishes that you were dead or that you could go to sleep and not wake up?', answer_options: 'a. Yes, a mental health or medical professional | b. Yes, a family member, partner, or friend | c. Yes, someone else | d. No, I did not tell anyone ', output_order: '9'},
passive_common_future: { suicide_type: 'Passive Thoughts', characteristic: 'Future Likelihood', question: 'What do you think the likelihood is that you will have these wishes that you were dead or that you could go to sleep and not wake up in the future?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '10'},

    //
  
    active_common_onset: { suicide_type: 'Active Thoughts', characteristic: 'Onset_Timing', question: 'When was the FIRST time you had these thoughts about killing yourself in the past 12 months?', answer_options: '1) Past 1-2 days | 2) Past 3-7 days | 3) Past 8-30 days | 4) Past 2-6 months | 5) Past 7-12 months', output_order: '11'},
    active_common_recency: { suicide_type: 'Active Thoughts', characteristic: 'Recency_Timing', question: 'When was your LAST time you had these thoughts about killing yourself inthe past 12 months?', answer_options: '1) Past 1-2 days | 2) Past 3-7 days | 3) Past 8-30 days | 4) Past 2-6 months |5) Past 7-12 months', output_order: '12'},
    active_common_freq: { suicide_type: 'Active Thoughts', characteristic: 'Frequency', question: 'In the past 12 months, on how many days did you have these thoughts about killing yourself?', answer_options: '1) Every or nearly every day | 2) 3-4 days a week | 3) 1-2 days a week 4) 1-3 days a month | 5) Less than once a month | 6) 1-2 days per year |7) Less than once a year', output_order: '13'},
    active_common_dur: { suicide_type: 'Active Thoughts', characteristic: 'Duration', question: 'During the past 12 months, on average, how long did these thoughts about killing yourself usually last each time?', answer_options: '1) < 5 minutes | 2) 6-59 minutes | 3) 5 -60 minutes | 4) 1-4  hours | 5) 5-8 hours | 6) 9 or more hours', output_order: '14'},
    active_common_control: { suicide_type: 'Active Thoughts', characteristic: 'Controllability', question: 'During the past 12 months, on average, how difficult was it for you to control your thoughts about killing yourself or push them out of your mind when you wanted to?', answer_options: '0) Not difficult at all | 1) A little difficult | 2) Somewhat difficult | 3) Very difficult | 4) Impossible', output_order: '15'},
    active_common_prob: { suicide_type: 'Active Thoughts', characteristic: 'Problem/Impairing', question: 'In the past 12 months, on average, how problematic for you were these thoughts about killing yourself?', answer_options: '0) Not at all problematic (e.g., The thoughts didn’t impact my ability to work, socialize, or take care of things at home) | 1) A little problematic (e.g., The thoughts interfered a little bit with my ability to work, socialize, or take care of things at home) | 2) Somewhat problematic (e.g., The thoughts made it somewhat difficult for me to work, socialize, or take care of things at home) | 3) Quite problematic (e.g., The thoughts made it quite difficult for me to work, socialize, or take care of things at home) | 4) Extremely problematic (e.g., The thoughts kept me from being able to work, socialize, or take care of things at home) ', output_order: '16'},
    active_common_distress: { suicide_type: 'Active Thoughts', characteristic: 'Distressing', question: 'In the past 12 months, on average, how did you feel when these thoughts about killing yourself came to mind?', answer_options: '0) No impact on how I felt (e.g., The thoughts didn’t really make me feel anything in particular) | 1) A little bothered or upset | 2) Somewhat bothered or upset | 3) Quite bothered or upset | 4) Extremely bothered or upset | 5) Comforted (e.g., I felt a sense of relief, peace, control, etc.)', output_order: '17'},
    active_common_desire: { suicide_type: 'Active Thoughts', characteristic: 'Desire', question: 'During the past 12 months, on average, how strong was your desire to kill yourself?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '18'},
    active_unique_urge: { suicide_type: 'Active Thoughts', characteristic: 'Urge', question: 'During the past 12 months, on average, how strong was the urge to kill yourself?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '19'},
    active_unique_serious: { suicide_type: 'Active Thoughts', characteristic: 'Seriousness', question: 'During the past 12 months, on average, how seriously did you consider acting on your thoughts about killing yourself?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '20'},
    active_unique_intention: { suicide_type: 'Active Thoughts', characteristic: 'Intention', question: 'During the past 12 months, on average, how strong was your intention to kill yourself?', answer_options: '0. Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '21'},
    active_common_com: { suicide_type: 'Active Thoughts', characteristic: 'Communication to Others', question: 'During the past 12 months, have you told someone that you had these thoughts about killing yourself?', answer_options: 'a. Yes, a mental health or medical professional | b. Yes, a family member, partner, or friend | c. Yes, someone else | d. No, I did not tell anyone', output_order: '22'},
    active_unique_deter: { suicide_type: 'Active Thoughts', characteristic: 'Deterrents', question: 'During the past 12 months, were there things - anyone or anything (e.g., family, religion, pain of death) - that stopped you from acting on your thoughts about killing yourself?', answer_options: '1) Deterrents definitely stopped you from acting | 2) Deterrents probably stopped you | 3) Uncertain that deterrents stopped you | 4) Deterrents most likely did not stop you | 5) Deterrents definitely did not stop you from acting ', output_order: '23'},
    active_common_future: { suicide_type: 'Active Thoughts', characteristic: 'Future Likelihood', question: 'What do you think the likelihood is that you will have these thoughts about killing yourself in the future?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '24'},
    
    //

activeplan_common_onset: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Onset_Timing', question: 'When was the FIRST time you had these thoughts about how, where, or when you might kill yourself in the past 12 months?', answer_options: '1) Past 1-2 days | 2) Past 3-7 days | 3) Past 8-30 days | 4) Past 2-6 months | 5) Past 7-12 months ', output_order: '25'},
activeplan_common_recency: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Recency_Timing', question: 'When was your LAST time you had these thoughts about how, where, or when you might kill yourself inthe past 12 months?', answer_options: '1) Past 1-2 days | 2) Past 3-7 days | 3) Past 8-30 days | 4) Past 2-6 months |5) Past 7-12 months', output_order: '26'},
activeplan_common_freq: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Frequency', question: 'In the past 12 months, on how many days did you have these thoughts about how, where, or when you might kill yourself?', answer_options: '1) Every or nearly every day | 2) 3-4 days a week | 3) 1-2 days a week | 4) 1-3 days a month | 5) Less than once a month | 6) 1-2 days per year |7) Less than once a year', output_order: '27'},
activeplan_common_dur: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Duration', question: 'During the past 12 months, on average, how long did these thoughts about how, where, or when you might kill yourself usually last each time?', answer_options: '1) < 5 minutes | 2) 6-59 minutes | 3) 5 -60 minutes | 4) 1-4  hours | 5) 5-8 hours | 6) 9 or more hours', output_order: '28'},
activeplan_unique_methods: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Methods', question: 'During the past 12 months, when you have had thoughts about how you might kill yourself, what methods did you think about using to attempt suicide?', answer_options: 'a. Overdose of medications | b. Overdose of illegal drugs | c. Poisoning (e.g., with a household substance, farming or industrial agent) | d. Hanging | e. Suffocation or asphyxiation (e.g., plastic bag over head, carbon monoxide poisoning) | f. Drowning | g. Cutting or stabbing | h. Gunshot  | i. Jumping from a high place | j. Motor vehicle crash | k. Any other method(s) --> What other methods did you think about using to attempt suicide? | l. No specific method ', output_order: '29'},
activeplan_unique_confidence: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Confidence-Methods', question: 'During the past 12 months, how confident were you that using those methods could kill you?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely | 5) Not applicable-I never thought of a method within this time period', output_order: '30'},
activeplan_unique_planhow: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Plan-How', question: 'In the past 12 months, how detailed were your thoughts about how you might kill yourself?', answer_options: "0) I haven't had thoughts about any potential method I could use to kill myself (e.g., pills) | 1)  I thought generally of one or more methods  I could use to kill myself (e.g., I would overdose; I would use a gun) | 2) I thought about the specifics of a potential method I could use to kill myself (e.g., consider  what specific pills I could take or how much I would need for it to be lethal;  how I would obtain/locate a method such as a gun; what I would need (e.g., a yard of rope) to enact a method; where I would store/hide a method; how I would get it all  set up or ready)", output_order: '31'},
activeplan_unique_planwhere: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Plan-Where', question: 'In the past 12 months, how detailed were your thoughts about where you might kill yourself?', answer_options: "0) I haven't had thoughts about any potential place to kill myself (e.g., a house, a park) | 1)  I thought generally of one or more places  where I could kill myself (e.g., I could go to a park; I could be at a house) | 2) I thought about the specifics  of a potential place to kill myself (e.g.,  consider what room or location in a building ;  what specific park (vs. a park);  whether  I would have to travel to the location and how long it would take; consider who might  intervene if I went to a certain place; consider who would ultimately find my body at this place)", output_order: '32'},
activeplan_unique_planwhen: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Plan-When', question: 'In the past 12 months, how detailed were your thoughts about when you might kill yourself?', answer_options: "0) I haven't had thoughts about when (day/time/circumstances) I could  kill myself | 1) I thought generally of one or more times  when I could kill myself (e.g., I could do it on a weekend; do it if I started to feel worse;  do it if an event occurred or sometime after a holiday) | 2) I thought about the specifics of a potential time to kill myself (e.g., consider what date/time would provide the most privacy;  would be least likely to have someone intervene; what amount of time I would need to get my affairs in order; consider who would ultimately find my body at this time)", output_order: '33'},
activeplan_unique_planhowwherewhen: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Plan-HowWhereWhen', question: 'In the past 12 months, did you think about using a specific method (how) to kill yourself in a specific place (where) at a specific time (when)?', answer_options: '0) No | 1) Yes', output_order: '34'},
activeplan_unique_planpersonal: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Plan-Personal Affairs', question: 'In the past 12 months, did you think about getting your personal affairs to prepare for killing yourself to help family or friends with your death? This may include thinking about paying off bills/debt; checking insurance; cancelling services; giving away possessions; creating/revising a will, or thinking about rereading the content of a current will, specifically so people know your wishes for after your suicide; thinking about arranging care for kids/pets; thinking about cleaning your house of apartment; thinking about writing a suicide note; and thinking about how to say your goodbyes.', answer_options: '0) No | 1) Yes', output_order: '35'},
activeplan_common_control: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Controllability', question: 'During the past 12 months, on average, how difficult was it for you to control your thoughts about how, where, or when you might kill yourself or push them out of your mind when you wanted to?', answer_options: '0) Not difficult at all | 1) A little difficult | 2) Somewhat difficult | 3) Very difficult | 4) Impossible', output_order: '36'},
activeplan_common_prob: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Problem/Impairing', question: 'In the past 12 months, on average, how problematic for you were these thoughts about how, where, or when you might kill yourself?', answer_options: '0) Not at all problematic (e.g., The thoughts didn’t impact my ability to work, socialize, or take care of things at home) | 1) A little problematic (e.g., The thoughts interfered a little bit with my ability to work, socialize, or take care of things at home) | 2) Somewhat problematic (e.g., The thoughts made it somewhat difficult for me to work, socialize, or take care of things at home) | 3) Quite problematic (e.g., The thoughts made it quite difficult for me to work, socialize, or take care of things at home) | 4) Extremely problematic (e.g., The thoughts kept me from being able to work, socialize, or take care of things at home) ', output_order: '37'},
activeplan_common_distress: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Distressing', question: 'In the past 12 months, on average, how did you feel when these thoughts about how, where, or when you might kill yourself came to mind?', answer_options: '0) No impact on how I felt (e.g., The thoughts didn’t really make me feel anything in particular) | 1) A little bothered or upset | 2) Somewhat bothered or upset | 3) Quite bothered or upset | 4) Extremely bothered or upset | 5) Comforted (e.g., I felt a sense of relief, peace, control, etc.)', output_order: '38'},
activeplan_common_desire: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Desire', question: 'During the past 12 months, on average, how strong was your desire to act on thoughts of how, where, or when you might kill yourself?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '39'},
activeplan_unique_urge: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Urge ', question: 'During the past 12 months, on average, how strong was the urge to act on thoughts of how, where, or when you might kill yourself?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '40'},
activeplan_unique_serious: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Seriousness', question: 'During the past 12 months, on average, how seriously did you consider acting on your thoughts about how, where, or when you might kill yourself?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '41'},
activeplan_unique_intention: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Intention', question: 'During the past 12 months, on average, how strong was your intention to act on thoughts of how, where, or when you might kill yourself?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '42'},
activeplan_common_com: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Communication to Others', question: 'During the past 12 months, have you told someone that you had these thoughts about how, where, or when you might kill yourself?', answer_options: 'a. Yes, a mental health or medical professional | b. Yes, a family member, partner, or friend | c. Yes, someone else | d. No, I did not tell anyone', output_order: '43'},
activeplan_unique_deter: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Deterrents', question: 'During the past 12 months, were there things - anyone or anything (e.g., family, religion, pain of death) - that stopped you from acting on your thoughts about how, where, or when you might kill yourself?', answer_options: '1) Deterrents definitely stopped you from acting | 2) Deterrents probably stopped you | 3) Uncertain that deterrents stopped you | 4) Deterrents most likely did not stop you | 5) Deterrents definitely did not stop you from acting ', output_order: '44'},
activeplan_common_future: { suicide_type: 'Active Suicidal Thoughts with Planning', characteristic: 'Future Likelihood', question: 'What do you think the likelihood is that you will have these thoughts about how, where, or when you might kill yourself in the future?', answer_options: '0) Not at all | 1) A little bit | 2) Somewhat | 3) Very Much | 4) Extremely', output_order: '45'},

};

function addVariableToData(variable) {
    if (!variableData.some(v => v.variable === variable)) {
        variableData.push({ variable, ...variableDetails[variable] });
    }
}

function removeVariableFromData(variableKey) {
    // Filter out the variable from variableData
    variableData = variableData.filter(item => item.variable !== variableKey);
}


function getCheckedCheckboxes() {
    const themes = {
        'Passive Thoughts': [],
        'Active Thoughts': [],
        'Active Plan': []
    };

    if (document.getElementById('passive_thoughts').checked) {
        themes['Passive Thoughts'].push('passive_thoughts');
    }
    if (document.getElementById('active_thoughts').checked) {
        themes['Active Thoughts'].push('active_thoughts');
    }
    if (document.getElementById('active_thoughts_plan').checked) {
        themes['Active Plan'].push('active_thoughts_plan');
    }

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked && checkbox.name !== 'selectAll') {
            const name = checkbox.name;
            if (name.startsWith('passive')) {
                themes['Passive Thoughts'].push(name);
            } else if (name.startsWith('activeplan')) {
                themes['Active Plan'].push(name);
            } else if (name.startsWith('active')) {
                themes['Active Thoughts'].push(name);
            }
        }
    });

    return themes;
}

function removeParentThemesFromSubBullets(summary) {
    const parentThemes = ['passive_thoughts', 'active_thoughts', 'active_thoughts_plan'];
    Object.keys(summary).forEach(theme => {
        summary[theme] = summary[theme].filter(item => !parentThemes.includes(item));
    });
    return summary;
}

function showTab(tabIndex, fromBackButton = false) {
    if (!fromBackButton) {
        tabHistory.push(tabIndex);
    }

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById('tab' + tabIndex).classList.add('active');

    if (tabIndex === 4) {
        populateTab4Content();
    } else if (tabIndex === 3) {
        populateTab3Content();
    }
}

function goBack() {
    const currentTab = tabHistory[tabHistory.length - 1];
    if (currentTab === 4) {
        showTab(1, true);
        tabHistory.pop(); // Remove the current tab from the history
    } else if (tabHistory.length > 1) {
        tabHistory.pop(); // Remove current tab
        const lastTab = tabHistory.pop(); // Get the previous tab
        if (lastTab !== undefined) {
            showTab(lastTab, true);
        }
    }
}
