var language;
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({
        url:  'lang/' +  localStorage.getItem('language') + '.json',
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

function loadText (){
    $('#title').text(language.title);
    $('#menuTitle').text(language.title);
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
    $('#contactTitle').text(language.contactTitle);
    $('#contactIntro').html(language.contactIntro);
    $('#name').attr('placeholder', language.placeholderName)
        .attr('data-validation-required-message', language.nameRequired);
    $('#email').attr('placeholder', language.placeholderEmail)
        .attr('data-validation-required-message', language.emailRequired)
        .attr('data-validation-email-message', language.emailValid);
    $('#phone').attr('placeholder', language.placeholderPhone);
    $('#message').attr('placeholder', language.placeholderMessage)
        .attr('data-validation-required-message', language.messageRequired);
    $('#sendMessageButton').text(language.sendMessage);
}

$(document).ready(function(){
    getLanguage();
    loadText();
});