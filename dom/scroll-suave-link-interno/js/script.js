function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
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
    const accordioList = document.querySelectorAll('.js-accordion dt');
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
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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