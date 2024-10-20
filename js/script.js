document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Blogger", "Designer", "Freelancer", "Photographer"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if(textArray.length) setTimeout(type, newTextDelay + 250);
});



document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll function
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Add click event to all navigation links
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href');
            smoothScroll(target, 1000); // 1000ms for the scroll duration
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(function(section) {
            var top = section.offsetTop - 100; // Adjust this value based on your header height
            var bottom = top + section.offsetHeight;
            
            if (scrollPosition >= top && scrollPosition < bottom) {
                links.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }

        alert('Thank you for your message! I\'ll get back to you soon.');

        form.reset();
    });
});



document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("demo").innerHTML = "My First JavaScript";
})


document.addEventListener('DOMContentLoaded', function() {
    const addProjectBtn = document.getElementById('add-project-btn');
    const projectContainer = document.getElementById('project-container');
    let projectCount = 4;

    addProjectBtn.addEventListener('click', function() {
        projectCount++;
        const newProject = document.createElement('div');
        newProject.className = 'project-card';
        newProject.innerHTML = `
            <img src="./images/projects/project1.png" alt="Project 1" class="project-image">
                    <div class="project-info">
                        <h3>Project ${projectCount} Title</h3>
                        <p>Brief description of Project 1. Explain what it does and the technologies used.</p>
                        <div class="project-links">
                            <a href="https://chokdee-sigazen.github.io/Algorithm.io/" class="btn">View Project</a>
                            <a href="https://github.com/Chokdee-Sigazen/Algorithm.io" class="btn">GitHub</a>
                        </div>
                    </div>
        `;
        projectContainer.appendChild(newProject);
        console.log(`Project #${projectCount} has been added.`);
    });
});