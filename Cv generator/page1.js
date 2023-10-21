window.onload = function() {
    if (localStorage.getItem('modifyIntent') === 'true') {
            // Personal Info
            document.getElementById('fullName').value = localStorage.getItem('fullName') || '';
            document.getElementById('email').value = localStorage.getItem('email') || '';
            document.getElementById('phone').value = localStorage.getItem('phone') || '';
            document.getElementById('currp').value = localStorage.getItem('currp') || '';
            document.getElementById('about').value = localStorage.getItem('about') || '';
        
            const linkedinData = localStorage.getItem('linkd');
            const linkedinToggle = document.getElementById('linkedinToggle');
            const linkedinField = document.getElementById('linkd');
        
            if (linkedinData) {
                linkedinToggle.checked = true;
                linkedinField.value = linkedinData;
                linkedinField.style.display = 'block';
            } else {
                linkedinToggle.checked = false;
                linkedinField.style.display = 'none';
            }
        
            let imgPreview = document.getElementById('imagePreview');
            if (localStorage.getItem('profileImage')) {
                imgPreview.src = localStorage.getItem('profileImage');
                imgPreview.style.display = 'block';
            }
        
          // For languages
const storedLanguages = JSON.parse(localStorage.getItem('languages') || '[]');
const languageContainer = document.getElementById('LangagesFields');

// Step 1: Clear the default fields
while (languageContainer.firstChild) {
    languageContainer.removeChild(languageContainer.firstChild);
}

// Step 2: Repopulate the form
storedLanguages.forEach(lang => {
    // Append the new field
    addLangagesField();
    
    // After appending, get the last appended child and fill its values
    let lastChild = languageContainer.lastChild;
    lastChild.querySelector('input[name="LangagesN"]').value = lang.name;
    lastChild.querySelector('select').value = lang.level;
});


        
            // For Education
            const educations = JSON.parse(localStorage.getItem('educations') || '[]');
            const educationContainer = document.getElementById('educationFields');
            while (educationContainer.firstChild) {
                educationContainer.removeChild(educationContainer.firstChild);
            }
            educations.forEach(edu => {
                addEducationField();
                let container = document.getElementById('educationFields').lastChild;
                container.querySelector('input[name="hiQuali"]').value = edu.grade;
                container.querySelector('input[name="university"]').value = edu.university;
            });
        
            // For Experience
            const experiences = JSON.parse(localStorage.getItem('experiences') || '[]');
            const ExperienceContainer = document.getElementById('ExperienceFields');
            while (ExperienceContainer.firstChild) {
                ExperienceContainer.removeChild(ExperienceContainer.firstChild);
            }
            experiences.forEach(exp => {
                addExperienceField();
                let container = document.getElementById('ExperienceFields').lastChild;
                container.querySelector('input[name="explace"]').value = exp.place;
                container.querySelector('input[name="postTitle"]').value = exp.title;
                container.querySelector('textarea[name="postDescription"]').value = exp.description;
            });
        
            // For Skills
            const skills = JSON.parse(localStorage.getItem('skills') || '[]');
            const skillsContainer = document.getElementById('SkillsFields');
            while (skillsContainer.firstChild) {
                skillsContainer.removeChild(skillsContainer.firstChild);
            }
            skills.forEach(skill => {
                addSkillsField();
                let container = document.getElementById('SkillsFields').lastChild;
                container.querySelector('input[name="skillsD"]').value = skill.domain;
                container.querySelector('input[name="skillsN"]').value = skill.name;
                container.querySelector('input[name="level"]').value = skill.level;
                container.querySelector('span').innerText = skill.level;
            });
        
            // For Hobbies
            const hobbies = JSON.parse(localStorage.getItem('hobby') || '[]');
            const hobbiesContainer = document.getElementById('HobbysFields');
            while (hobbiesContainer.firstChild) {
                hobbiesContainer.removeChild(hobbiesContainer.firstChild);
            }
            hobbies.forEach(hobby => {
                addHobbysField();
                let container = document.getElementById('HobbysFields').lastChild;
                container.querySelector('input[name="HobbiesN"]').value = hobby.name;
            });
        
        
 // Clear the flag so direct opens don't trigger the form population
 localStorage.removeItem('modifyIntent');
}

}     
function addLangagesField() {
    
    let container = document.getElementById('LangagesFields');
    let newItem = document.createElement('div');
    newItem.className = 'LangagesItem';
    let uniqueId = 'LangagesL_' + (container.children.length + 1); // Create a unique ID
    newItem.innerHTML = `
        <label for="LangagesN">Langage  :</label>
        <input type="text" id="LangagesN" name="LangagesN">
        <label for="${uniqueId}">Level:</label>
        <select id="${uniqueId}">
            <option value="basic">basic</option>
            <option value="communication">communication</option>
            <option value="advanced">advanced</option>
            <option value="nature">native</option>
        </select>
    `;
    container.appendChild(newItem);
    if (container.children.length > 1) {
        document.getElementById('removeLangagesBtn').style.display = 'block';
    }
}

      
      function addEducationField() {
            let container = document.getElementById('educationFields');
            let newItem = document.createElement('div');
            newItem.className = 'educationItem';
            newItem.innerHTML = `
                <label for="highestQualification">Grade</label>
                <input type="text" name="hiQuali" data-storage-key="hiQuali">
                <label for="university">University/Institution:</label>
                <input type="text" name="university" data-storage-key="university">
            `;
            container.appendChild(newItem);
            if (container.children.length > 1) {
        document.getElementById('removeEducationBtn').style.display = 'block';
    }
        }

        function addExperienceField() {
            let container = document.getElementById('ExperienceFields');
            let newItem = document.createElement('div');
            newItem.className = 'ExperienceItem';
            newItem.innerHTML = `
            <label for="expplace">where:</label>
                <input type="text" id="expplace" name="explace">
                <label for="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle">
                <label for="postDescription">Post Description:</label>
                <textarea id="postDescription" name="postDescription" rows="4"></textarea>
            `;
            container.appendChild(newItem);
            if (container.children.length > 1) {
        document.getElementById('removeExperienceBtn').style.display = 'block';
    }
        }


        let skillCounter = 0;

        function addSkillsField() {
            let container = document.getElementById('SkillsFields');
            let newItem = document.createElement('div');
            newItem.className = 'SkillsItem';
            newItem.innerHTML = `
                <label for="skillsD">Skill Domain :</label>
                <input type="text" id="skillsD" name="skillsD">
                <label for="skillsN">name  :</label>
                <input type="text" id="skillsN" name="skillsN">
                <label for="skillsL">Level:</label>
                <input type="range" id="level${skillCounter}" name="level" min="1" max="10" value="5" oninput="updateLevelValue(this.value, 'levelDisplay${skillCounter}')">
                <span id="levelDisplay${skillCounter}">5</span> / 10
            `;
        
            skillCounter++; // Increment counter to ensure the next id will be unique
        
            container.appendChild(newItem);
            if (container.children.length > 1) {
                document.getElementById('removeSkillsBtn').style.display = 'block';
            }
        }
        

        function addHobbysField() {
            let container = document.getElementById('HobbysFields');
            let newItem = document.createElement('div');
            newItem.className = 'HobbisItem';
            newItem.innerHTML = `
            <div id="HobbiesFields">
            <div class="HobbiesItem">
        <label for="HobbiesN">Hobby  :</label>
        <input type="text" id="HobbiesN" name="HobbiesN">
            </div>
            `;
            container.appendChild(newItem);
            if (container.children.length > 1) {
        document.getElementById('removeHobbysBtn').style.display = 'block';
    }
        }


        
        function removeLangagesField() {
            let container = document.getElementById('LangagesFields');
            if (container.children.length > 1) {  // Make sure at least one field remains
                container.removeChild(container.lastChild);
            }
            if (container.children.length <= 1) {
                document.getElementById('removeLangagesBtn').style.display = 'none';
            }
        }
        


        function removeEducationField() {
    let container = document.getElementById('educationFields');
    if (container.children.length > 1) {  // Make sure at least one field remains
        container.removeChild(container.lastChild);
    }
    if (container.children.length <= 1) {
        document.getElementById('removeEducationBtn').style.display = 'none';
    }
}

function removeExperienceField() {
    let container = document.getElementById('ExperienceFields');
    if (container.children.length > 1) {  // Make sure at least one field remains
        container.removeChild(container.lastChild);
    }
    if (container.children.length <= 1) {
        document.getElementById('removeExperienceBtn').style.display = 'none';
    }
}

function removeSkillsField() {
    let container = document.getElementById('SkillsFields');
    if (container.children.length > 1) {  // Make sure at least one field remains
        container.removeChild(container.lastChild);
    }
    if (container.children.length <= 1) {
        document.getElementById('removeSkillsBtn').style.display = 'none';
    }
}

function removeHobbysField() {
    let container = document.getElementById('HobbysFields');
    if (container.children.length > 1) {  // Make sure at least one field remains
        container.removeChild(container.lastChild);
    }
    if (container.children.length <= 1) {
        document.getElementById('removeHobbysBtn').style.display = 'none';
    }
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('imagePreview');
        output.src = reader.result;
        output.style.display = 'block';  // display the image preview
    };
    reader.readAsDataURL(event.target.files[0]);
}
function toggleLinkedIn() {
    const linkedinToggle = document.getElementById('linkedinToggle');
    const linkedinField = document.getElementById('linkedinField');
    
    if (linkedinToggle.checked) {
        linkedinField.style.display = 'block';
    } else {
        linkedinField.style.display = 'none';
    }
}

function updateLevelValue(val, displayId) {
    const levelDisplay = document.getElementById(displayId);
    levelDisplay.textContent = val;
}





    
function saveDataAndRedirect() {
    // Save all individual form elements to LocalStorage
    localStorage.setItem('fullName', document.getElementById('fullName').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('phone', document.getElementById('phone').value);
    localStorage.setItem('currp', document.getElementById('currp').value);
    localStorage.setItem('about', document.getElementById('about').value);

    const linkedinToggle = document.getElementById('linkedinToggle');
    const linkdField = document.getElementById('linkd').value.trim();
    if (linkedinToggle.checked && linkdField) {
        localStorage.setItem('linkd', linkdField);
    } else {
        localStorage.removeItem('linkd');
    }
    
    // For profile image, save its base64 string to LocalStorage
    let imgPreview = document.getElementById('imagePreview');
    if (imgPreview.getAttribute('src')) {
        localStorage.setItem('profileImage', imgPreview.getAttribute('src'));
    }
    
    let languages = [];
    document.querySelectorAll('.LangagesItem').forEach(item => {
        const langName = item.querySelector('input[name="LangagesN"]').value;
        const langLevel = item.querySelector('select').value;

        if (langName) { // Only save if a language name is entered
            languages.push({
                name: langName,
                level: langLevel
            });
        }
    });
    localStorage.setItem('languages', JSON.stringify(languages));




    let educations = [];
    document.querySelectorAll('.educationItem').forEach(item => {
        educations.push({
            grade: item.querySelector('input[name="hiQuali"]').value,
            university: item.querySelector('input[name="university"]').value
        });
    });
    localStorage.setItem('educations', JSON.stringify(educations));

    let experiences = [];
    document.querySelectorAll('.ExperienceItem').forEach(item => {
        experiences.push({
            place: item.querySelector('input[name="explace"]').value,
            title: item.querySelector('input[name="postTitle"]').value,
            description: item.querySelector('textarea[name="postDescription"]').value
        });
    });
    localStorage.setItem('experiences', JSON.stringify(experiences));

    let skills = [];
    document.querySelectorAll('.SkillsItem').forEach(item => {
        skills.push({
            domain: item.querySelector('input[name="skillsD"]').value,
            name: item.querySelector('input[name="skillsN"]').value,
            level: item.querySelector('input[name="level"]').value
        });
    });
    localStorage.setItem('skills', JSON.stringify(skills));

    let hobby = [];
    document.querySelectorAll('.HobbiesItem').forEach(item => {
        hobby.push({
            name: item.querySelector('input[name="HobbiesN"]').value
        });
    });
    localStorage.setItem('hobby', JSON.stringify(hobby));



    window.location.href = "resume.html";
    
}
function goToNext(current, next) {
    if (current === 'personalInfoBlock') {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;

        if (!fullName || !email) {
            alert('Please fill in the required fields!');
            return;
        }
    }

    document.getElementById(current).style.display = 'none';
    document.getElementById(next).style.display = 'block';
}


function goToPrevious(current, previous) {
    document.getElementById(current).style.display = 'none';
    document.getElementById(previous).style.display = 'block';
}


