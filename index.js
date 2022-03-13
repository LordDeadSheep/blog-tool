Translations.setLanguage(languages.de);

if (window.screen.width < 250) {
    alert(Translations.get('error.smallScreenSize'));
}


createPost('Herzlich Willkommen!', '', 'Admin', '13. März 2022', ['Diese Seite befindet sich noch im Aufbau!'], 'Erster Beitrag.', true);
