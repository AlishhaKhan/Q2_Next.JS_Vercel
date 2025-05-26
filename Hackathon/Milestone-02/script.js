// Function to generate the resume based on form inputs
function generateResume() {
    // Capture form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var duration = document.getElementById('duration').value;
    var school = document.getElementById('school').value;
    var degree = document.getElementById('degree').value;
    var year = document.getElementById('year').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate resume template
    var resumeTemplate = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        \n        <h3>Work Experience</h3>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Position:</strong> ").concat(position, "</p>\n        <p><strong>Duration:</strong> ").concat(duration, "</p>\n        \n        <h3>Education</h3>\n        <p><strong>School:</strong> ").concat(school, "</p>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Graduation Year:</strong> ").concat(year, "</p>\n        \n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Output the generated resume
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeTemplate;
    }
}
// Event listener for the 'Generate Resume' button
var generateButton = document.getElementById('generate');
if (generateButton) {
    generateButton.addEventListener('click', generateResume);
}
