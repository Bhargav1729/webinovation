document.addEventListener('DOMContentLoaded', function() {
   // Set the initial section visible
   navigate('home'); // Show home section on load

   // Sidebar link click events
   document.querySelectorAll('.sidebar nav a').forEach(link => {
       link.addEventListener('click', function() {
           navigate(this.id.split('-')[0]); // Use the link ID to determine the section
       });
   });
});

function navigate(page) {
   // Hide all sections
   const sections = document.querySelectorAll('.main-content div');
   sections.forEach(section => section.classList.add('hidden'));

   // Show the selected section
   const selectedSection = document.getElementById(page + '-section');
   selectedSection.classList.remove('hidden');
   selectedSection.style.opacity = 0; // Start with hidden

   // Fade-in effect
   setTimeout(() => {
       selectedSection.style.opacity = 1; // Transition to visible
   }, 100); // Short delay to trigger the CSS transition

   // Update the sidebar with the current page name
   document.getElementById('current-page').innerText = page.charAt(0).toUpperCase() + page.slice(1);

   // Remove the 'active' class from all links
   document.querySelectorAll('.sidebar nav a').forEach(link => link.classList.remove('active'));

   // Add the 'active' class to the clicked link
   document.getElementById(page + '-link').classList.add('active');
}
