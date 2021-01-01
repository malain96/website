var language;
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({
        url: 'lang/' + localStorage.getItem('language') + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) {
            language = lang
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage();
    loadText();
}

function loadText() {
    $('#title').text(language.title);
    $('#menuTitle').text(language.menuTitle);
    $('#aboutMenu').text(language.aboutMenu);
    $('#projectsMenu').text(language.projectsMenu);
    $('#contactMenu').text(language.contactMenu);
    $('#aboutTitle').text(language.about);
    $('#nameSpan').text(language.name);
    $('#ageSpan').text(language.age);
    $('#locationSpan').text(language.location);
    $('#aboutMeText').html(language.aboutMe);
    $('#projectsTitle').text(language.projects);
    $('#projectsIntro').html(language.projectsIntro);
    $('#saintHubertTitle').text(language.saintHubertTitle);
    $('#saintHubertBody').text(language.saintHubertBody);
    $('#websiteTitle').text(language.websiteTitle);
    $('#websiteBody').text(language.websiteBody);
    $('#dbSaverTitle').text(language.dbSaverTitle);
    $('#dbSaverBody').text(language.dbSaverBody);
    $('#hlamnikTitle').text(language.hlamnikTitle);
    $('#hlamnikBody').text(language.hlamnikBody);
    $('#contactTitle').text(language.contactTitle);
    $('#contactIntro').html(language.contactIntro);
    $('#resumeLink').attr('href', language.resumeLink);
    $('#resumeIcon').attr('title', language.altResume);
    $('.age').text(getAge('1996/05/11'));
}

$(document).ready(function () {
    getLanguage();
    loadText();
});