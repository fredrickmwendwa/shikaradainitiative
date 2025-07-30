// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-question.active');
            if(currentlyActive && currentlyActive !== question) {
                currentlyActive.classList.remove('active');
                currentlyActive.nextElementSibling.style.maxHeight = null;
            }
            
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            
            if(question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
    
    // Open first question by default
    if(faqQuestions.length > 0) {
        faqQuestions[0].classList.add('active');
        faqQuestions[0].nextElementSibling.style.maxHeight = faqQuestions[0].nextElementSibling.scrollHeight + 'px';
    }
});