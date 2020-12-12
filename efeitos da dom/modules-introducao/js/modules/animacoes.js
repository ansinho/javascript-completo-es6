function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            console.log(direcao)
            tabContent[index].classList.add('ativo', direcao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordioList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    if (accordioList.length) {
        accordioList[0].classList.add(activeClass);
        accordioList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordin() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordioList.forEach((item) => {
            item.addEventListener('click', activeAccordin);
        });
    }
}

initAccordion();


function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();


function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const windoMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windoMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }

        animaScroll()

        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll()