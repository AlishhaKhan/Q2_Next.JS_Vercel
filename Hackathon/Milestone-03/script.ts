// Function to generate the resume based on form inputs
function generateResume() {
    // Capture form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Generate resume template
    const resumeTemplate = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> <span id="edit-name" class="editable"> ${email}</span></p>
        <p><strong>Phone:</strong> <span id="edit-email" class="editable"> ${phone}</span></p>
        
        <h3>Work Experience</h3>
        <p><strong>Company:</strong> <span id="edit-company" class="editable"> ${company}</span></p>
        <p><strong>Position:</strong> <span id="edit-position" class="editable"> ${position}</span></p>
        <p><strong>Duration:</strong> <span id="edit-duration" class="editable"> ${duration}</span></p>
        
        <h3>Education</h3>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Graduation Year:</strong> ${year}</p>
        
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Output the generated resume
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeTemplate;
    }
}

// Event listener for the 'Generate Resume' button
const generateButton = document.getElementById('generate');
if (generateButton) {
    generateButton.addEventListener('click', generateResume);
}
