        document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section[id]');
        const links = document.querySelectorAll('.sidebar a');

        function highlightCurrentSection() {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            let currentId = null;

            sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if(scrollPos >= sectionTop && scrollPos < sectionBottom) {
                currentId = section.getAttribute('id');
            }
            });

            links.forEach(link => {
            if(link.getAttribute('href').substring(1) === currentId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
            });
        }

        window.addEventListener('scroll', highlightCurrentSection);
        highlightCurrentSection();
        });
  