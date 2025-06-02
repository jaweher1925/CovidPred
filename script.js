/**
 * COVID-19 Predictive Modeling Project Website
 * Main JavaScript File
 */

// Function to toggle the visibility of phase content
function togglePhase(phaseId) {
    const phaseContent = document.getElementById(phaseId);
    const phaseHeader = phaseContent.previousElementSibling;
    const toggleIcon = phaseHeader.querySelector('.toggle-icon');
    
    // Toggle the active class on the content
    phaseContent.classList.toggle('active');
    
    // Update the toggle icon
    if (phaseContent.classList.contains('active')) {
        toggleIcon.textContent = '-';
    } else {
        toggleIcon.textContent = '+';
    }
}

// Initialize the page - open the first phase by default
document.addEventListener('DOMContentLoaded', function() {
    // Get all phase content elements
    const phaseContents = document.querySelectorAll('.phase-content');
    
    // If there's at least one phase, open the first one
    if (phaseContents.length > 0) {
        const firstPhase = phaseContents[0];
        const firstPhaseHeader = firstPhase.previousElementSibling;
        const toggleIcon = firstPhaseHeader.querySelector('.toggle-icon');
        
        firstPhase.classList.add('active');
        toggleIcon.textContent = '-';
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
