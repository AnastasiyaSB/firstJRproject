const menuBtn = document.getElementById('tickets-btn');
const globeBtn = document.getElementById('globe-btn');
const chooseLanguage = document.getElementById('language');
const infoList = document.querySelector('.info-list');

menuBtn.addEventListener('click', function() {
    if (chooseLanguage.classList.contains('show')) {
        chooseLanguage.classList.remove('show');
    } 
    infoList.classList.toggle('show');
});
globeBtn.addEventListener('click', function() {
    if (infoList.classList.contains('show')) {
        infoList.classList.remove('show');
    }
    chooseLanguage.classList.toggle('show');
});


// if (window.innerWidth <= 768) {
//     const languageSelect = document.getElementById('language');
//     languageSelect.addEventListener('change', function () {
//         const selectedOption = languageSelect.querySelector('option:checked');
//         if (selectedOption) {
//             selectedOption.style.display = 'none';
//         }
//     });
// }


document.querySelectorAll('.footer-text').forEach(function (footer) {
    footer.addEventListener('click', function () {
        const sectionList = footer.nextElementSibling.querySelector('.section-list');
        const isOpen = sectionList.classList.contains('show');
        document.querySelectorAll('.section-list').forEach(function (list) {
            list.classList.remove('show');
        });
        if (!isOpen) {
            sectionList.classList.add('show');
        }
    });
});