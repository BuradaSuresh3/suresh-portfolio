// small interactive helpers
document.getElementById('year').textContent = new Date().getFullYear();

// contact form hint (Formspree posts will redirect or show a message)
// Replace YOUR_FORM_ID in index.html with your actual Formspree form id
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    // let the form submit normally to Formspree; show quick feedback
    const hint = document.getElementById('formHint');
    hint.textContent = 'Sending…';
    // optionally, for AJAX submit you'd intercept here and POST to Formspree endpoint
    setTimeout(()=> hint.textContent = 'Message sent — thank you!', 1200);
  });
}
