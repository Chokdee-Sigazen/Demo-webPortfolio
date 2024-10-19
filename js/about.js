document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    function animateSkillBars() {
        skillBars.forEach(bar => {
            const skill = bar.getAttribute('data-skill');
            bar.style.width = `${skill}%`;
        });
    }

    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelector('.skills').querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
});