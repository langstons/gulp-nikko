/*
 * Find parents elements =====>
 * element = the element whose parent we are looking for
 * parentClass = the class of the parent element to be searched for
 */
const findParents = (element, parentClass) => {
    return element.parentNode.closest(parentClass);
};

// Toggle visible Navigation on click to Burger =====>
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger?.addEventListener('click', (e) => {
    e.target.classList.toggle('js-active');
    nav.classList.toggle('js-active');
});

// Dropdowns =====>
let dropdownTriggers = document.querySelectorAll('.dropdown__trigger');

dropdownTriggers?.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const dropdownParent = findParents(trigger, '.dropdown');

        dropdownParent.classList.toggle('js-active');
    });
});

// Click outside =====>
document.addEventListener("click", (event) => {
    /* Hide Dropdowns */
    if (event.target.closest(".dropdown")) return;
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('js-active');
    });
    // /* Hide Navigation */
    // if (event.target.closest(".nav.js-active")) return;
    // nav.classList.remove('js-active');
    // burger.classList.remove('js-active');
});

