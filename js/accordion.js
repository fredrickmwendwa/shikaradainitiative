document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.classList.remove('active');
                content.style.maxHeight = '0';
            }
            
            // Close other accordion items
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.classList.remove('active');
                    otherBtn.nextElementSibling.style.maxHeight = '0';
                }
            });
        });
    });
});