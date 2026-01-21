// Multilingual Webpage logic
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

async function fetchLanguageData(lang) {
    const response = await fetch(`js/language/${lang}.json`);
    return response.json();
}

async function changeLanguage(lang) {
    setLanguagePreference(lang);
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
}
// Change btns colors
function changeColors(anchor) {
    $('#menu ul a').each(function () {
        $(this).css('color', 'rgb(83, 115, 127)');
    });
    $(`#menu ul ${anchor}`).css('color', 'azure');
}

window.addEventListener('DOMContentLoaded', async () => {
    $('#content').scrollTop(0);
    const userPreferredLanguage = localStorage.getItem('language') || 'pt-BR';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);

    $('#language ul a').each(function () {
        $(this).css('color', 'rgb(83, 115, 127)');
    });

    switch (userPreferredLanguage) {
        case 'pt-BR':
            $('#btnPt').css('color', 'azure');
            break;
        case 'en-US':
            $('#btnEn').css('color', 'azure');
            break;
    }
})
// Menu buttons logic
window.onload = () => {
    const cSobre = Math.floor($('#conteudoSobre').position().top);
    const cExp = Math.floor($('#conteudoExperiencia').position().top);
    const cEdu = Math.floor($('#conteudoEducacao').position().top);
    
    $('#content').on('scroll', function() {
        let varCSobre = Math.floor($('#conteudoSobre').position().top);
        if(!(cSobre == 0)) {
            varCSobre -= cSobre * 2;
        }
        if(Math.abs(varCSobre) < (cExp - 200)) {
            changeColors('#btnSobre');
        }else if(Math.abs(varCSobre) < (cEdu - 400)) {
            changeColors('#btnExperiencia'); 
        }else {
            changeColors('#btnEducacao');
        }
    });
}