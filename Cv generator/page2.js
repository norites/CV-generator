window.onload = function() {
    // Personal Info
    document.getElementById("resumeName").innerText = localStorage.getItem('fullName');
    document.getElementById("resumePhone").innerText = localStorage.getItem('phone');
    document.getElementById("resumePhone").href = "tel:" + localStorage.getItem('phone');
    document.getElementById("resumeEmail").innerText = localStorage.getItem('email');
    document.getElementById("resumeEmail").href = "mailto:" + localStorage.getItem('email');
    document.getElementById("resumeAbout").innerText = localStorage.getItem('about');
    let linkedInData = localStorage.getItem('linkd');
    let linkedInContainer = document.getElementById("linkedinContainer");
    if (linkedInData) {
        document.getElementById("resumeLinkd").innerText = linkedInData;
        document.getElementById("resumeLinkd").href = linkedInData;
    } else {
        linkedInContainer.style.display = "none";
    }
    
    

    let profileImageSrc = localStorage.getItem('profileImage');
    if (profileImageSrc) {
        document.querySelector('img[alt="profileImage"]').src = profileImageSrc;
    }

    const storedLanguages = JSON.parse(localStorage.getItem('languages') || '[]');
    let languagesContainer = document.getElementById("langages");
    if (storedLanguages.length) {
        let languagesList = "<strong>Langages:</strong><br>";
        storedLanguages.forEach(lang => {
            languagesList += `${lang.name}: ${lang.level.charAt(0).toUpperCase() + lang.level.slice(1)}<br>`;
        });
        languagesContainer.innerHTML = languagesList;
    }
    
    

    // Education
    const educations = JSON.parse(localStorage.getItem('educations'));
    let educationContainer = document.getElementById("educationSection");
    educations.forEach(edu => {
        let eduDetail = document.createElement("p");
        eduDetail.innerHTML = `<strong>${edu.grade}</strong> from ${edu.university}`;
        educationContainer.appendChild(eduDetail);
    });

    // Experience
    const experiences = JSON.parse(localStorage.getItem('experiences'));
    let experienceContainer = document.getElementById("experienceSection");
    experiences.forEach(exp => {
        let expDetail = document.createElement("p");
        expDetail.innerHTML = `<strong>${exp.title}</strong> at ${exp.place} <br> ${exp.description}`;
        experienceContainer.appendChild(expDetail);
    });

    // Skills
    const skills = JSON.parse(localStorage.getItem('skills'));
    let skillsContainer = document.getElementById("skillsSection");
    skills.forEach(skill => {
        let skillDetail = document.createElement("p");
        skillDetail.innerHTML = `${skill.domain} : ${skill.name},  Level: ${skill.level} / 10`;
        skillsContainer.appendChild(skillDetail);
    });

    //Hobbies
    const hobbies = JSON.parse(localStorage.getItem('hobby'));
    let hobbysContainer = document.getElementById("hobbysSection");
    hobbies.forEach(hobby => {
        let hobbysDetail = document.createElement("p");
        hobbysDetail.innerHTML = `${hobby.name}`;
        hobbysContainer.appendChild(hobbysDetail);
    });

}
function downloadFunction() {
    var element = document.getElementById('resume');
    var opt = {
      margin:       10,
      filename:     'myCV.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(element).set(opt).save();
}
function newFunction() {
    localStorage.clear(); // Clear all saved data from the form
    window.location.href = "testcv.html"; // Redirect to the form page
}

function modifyFunction() {
    localStorage.setItem('modifyIntent', 'true');
    window.location.href = "testcv.html";
}

