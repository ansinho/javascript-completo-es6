export default function initAccordion() {
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
