// Function to generate the resume based on form inputs
function generateResume() {
    // Capture form data
    var username = document.getElementById('username').value;
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
    // Handle image upload
    var imageInput = document.getElementById('image');
    var imageURL = '';
    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            imageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Generate resume URL
            var resumeURL = "".concat(window.location.origin, "/").concat(username, "_cv.html");
            // Generate resume template with the image
            var resumeTemplate = "\n                <h2>".concat(name, "</h2>\n                <img src=\"").concat(imageURL, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; border-radius:50%;\" />\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                \n                <h3>Work Experience</h3>\n                <p><strong>Company:</strong> ").concat(company, "</p>\n                <p><strong>Position:</strong> ").concat(position, "</p>\n                <p><strong>Duration:</strong> ").concat(duration, "</p>\n                \n                <h3>Education</h3>\n                <p><strong>School:</strong> ").concat(school, "</p>\n                <p><strong>Degree:</strong> ").concat(degree, "</p>\n                <p><strong>Graduation Year:</strong> ").concat(year, "</p>\n                \n                <h3>Skills</h3>\n                <ul>\n                    ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n\n                <p><strong>Resume Link:</strong> <a href=\"").concat(resumeURL, "\" target=\"_blank\">").concat(resumeURL, "</a></p>\n            ");
            // Output the generated resume
            var resumeOutput = document.getElementById('resumeOutput');
            if (resumeOutput) {
                resumeOutput.innerHTML = resumeTemplate;
                setupDownloadAndCopy(resumeTemplate, resumeURL); // Setup download and copy link
            }
        };
        // Read the selected image file
        reader.readAsDataURL(imageInput.files[0]);
    }
    else {
        // Generate resume URL
        var resumeURL = "".concat(window.location.origin, "/").concat(username, "_cv.html");
        // Generate resume template without the image
        var resumeTemplate = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            \n            <h3>Work Experience</h3>\n            <p><strong>Company:</strong> ").concat(company, "</p>\n            <p><strong>Position:</strong> ").concat(position, "</p>\n            <p><strong>Duration:</strong> ").concat(duration, "</p>\n            \n            <h3>Education</h3>\n            <p><strong>School:</strong> ").concat(school, "</p>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Graduation Year:</strong> ").concat(year, "</p>\n            \n            <h3>Skills</h3>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n\n            <p><strong>Resume Link:</strong> <a href=\"").concat(resumeURL, "\" target=\"_blank\">").concat(resumeURL, "</a></p>\n        ");
        // Output the generated resume
        var resumeOutput = document.getElementById('resumeOutput');
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeTemplate;
            setupDownloadAndCopy(resumeTemplate, resumeURL); // Setup download and copy link
        }
    }
}
// Function to set up PDF download and copy shareable link
function setupDownloadAndCopy(resumeTemplate, resumeURL) {
    // Create or update the download button
    var downloadButton = document.getElementById('download');
    if (!downloadButton) {
        var actionsSection = document.getElementById('actions');
        if (actionsSection) {
            var button = document.createElement('button');
            button.id = 'download';
            button.textContent = 'Download as PDF';
            button.addEventListener('click', function () {
                Promise.resolve().then(function () { return require('jspdf'); }).then(function (_a) {
                    var jsPDF = _a.jsPDF;
                    var pdf = new jsPDF();
                    pdf.html(document.getElementById('resumeOutput'), {
                        callback: function (pdf) {
                            pdf.save('resume.pdf');
                        },
                        x: 10,
                        y: 10,
                    });
                });
            });
            actionsSection.appendChild(button);
        }
    }
    // Create or update the copy link button
    var copyButton = document.getElementById('copyLink');
    if (!copyButton) {
        var actionsSection = document.getElementById('actions');
        if (actionsSection) {
            var button = document.createElement('button');
            button.id = 'copyLink';
            button.textContent = 'Copy Shareable Link';
            button.addEventListener('click', function () {
                navigator.clipboard.writeText(resumeURL)
                    .then(function () { return alert('Resume link copied to clipboard!'); })
                    .catch(function (err) { return console.error('Failed to copy: ', err); });
            });
            actionsSection.appendChild(button);
        }
    }
}
// Event listener for the 'Generate Resume' button
var generateButton = document.getElementById('generate');
if (generateButton) {
    generateButton.addEventListener('click', generateResume);
}
