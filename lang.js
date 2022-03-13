const languages = {
    en: {
        'post.unknownAuthor': 'Unknown',
        'post.uploadedBy': 'uploaded by <author>',
        'dropdown': 'Posts',
        'home': 'Home',
        'error.smallScreenSize': 'The page might break as the width of the screen is too small!',
        'post.date': ' on <date>'
    },
    de: {
        'post.unknownAuthor': 'Unbekannt',
        'post.uploadedBy': 'hochgeladen von <author>',
        'dropdown': 'Texte',
        'home': 'Startseite',
        'error.smallScreenSize': 'Die Seite funktioniert vielleicht nicht richtig, da die Bildschirmbreite zu klein ist!',
        'post.date': ' am <date>'
    }
};

var currentLanguage = languages.en;


class Translations {
    constructor() {
        this.INSTANCE = this;
    }

    static setLanguage(language) {
        currentLanguage = language;
    }

    static get(id) {
        return currentLanguage[id];
    }
}
