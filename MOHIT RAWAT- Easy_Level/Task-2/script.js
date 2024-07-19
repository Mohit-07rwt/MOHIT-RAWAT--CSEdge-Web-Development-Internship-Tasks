// Function to update live preview based on form inputs
function updatePreview() {
    const name = document.getElementById('name').value;
    const skills = document.getElementById('skills').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary-text').value;
    // Get other form values similarly

    const template = document.getElementById('template-select').value;
    const previewContainer = document.getElementById('preview-container');

    // Create HTML structure based on inputs (simplified example)
    const htmlContent = `
        <div class="resume ${template}">
            <h2>${name}</h2>
            <p>Skills: ${skills}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Summary</h3>
            <p>${summary}</p>
            <!-- Add other sections as needed -->
        </div>
    `;

    // Update live preview
    previewContainer.innerHTML = htmlContent;
}

// Event listeners for form inputs
document.getElementById('name').addEventListener('input', updatePreview);
document.getElementById('skills').addEventListener('input', updatePreview);
document.getElementById('email').addEventListener('input', updatePreview);
document.getElementById('phone').addEventListener('input', updatePreview);
document.getElementById('summary-text').addEventListener('input', updatePreview);
// Add listeners for other inputs similarly

// Function to handle format choices and possibly save/export functionality
function handleFormatChoices() {
    // Example: get selected formats and handle export
    const formats = document.querySelectorAll('input[name="format"]:checked');
    const selectedFormats = Array.from(formats).map(format => format.value);

    // Example: handle export based on selected formats
    if (selectedFormats.includes('pdf')) {
        // Generate PDF functionality
    }
    if (selectedFormats.includes('docx')) {
        // Generate DOCX functionality
    }
    if (selectedFormats.includes('txt')) {
        // Generate TXT functionality
    }
}

// Event listener for format choices
document.querySelectorAll('input[name="format"]').forEach(item => {
    item.addEventListener('change', handleFormatChoices);
});
