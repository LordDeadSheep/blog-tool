// The post template
const template = document.getElementById('post-template');

const dropdownPosts = document.getElementById('post-links');

var postCount = 0;
/**
 * The ids of the active posts.
 */
var activePosts = [];


function createPost(data) {
    let post = template.content.cloneNode(true);
    let container = post.querySelector('div');

    container.setAttribute('id', `post-${postCount}`);

    let subtitle = post.querySelector('.subtitle');
    let title = post.querySelector('.title');
    let author = post.querySelector('.author');

    subtitle.appendChild(document.createTextNode(data.subtitle || ''));
    title.appendChild(document.createTextNode(data.title || ''));
    author.appendChild(document.createTextNode(
        `hochgeladen von ${data.author || 'Unbekannt'}${data.date ? (' am ' + data.date) : ''}`
    ));

    for (let p of data.paragraphs) {
        // Create new paragraph.
        // Add a new line for empty paragraphs.
        let paragraph = document.createElement(p ? 'p' : 'br');
        
        if (p) {
            paragraph.classList.add('paragraph');
            paragraph.appendChild(document.createTextNode(p));
        }

        container.appendChild(paragraph);
    }

    if (!subtitle) {
        subtitle.classList.add('hidden');
    }

    if (!title) {
        title.classList.add('hidden');
    }
    
    if (!author) {
        author.classList.add('hidden');
    }

    let button = document.createElement('div');

    button.setAttribute('id', `linkto-${postCount++}`);
    button.classList.add('dropbtn');
    button.addEventListener('click', (ev) => {
        let id = parseInt(ev.target.id.substring(7));
        let post = document.getElementById('post-' + id);
            
        if (activePosts.length > 0) {
            for (let p in activePosts) {
                let post = document.getElementById('post-' + activePosts[p]);
                let btn = document.getElementById('linkto-' + activePosts[p]);

                post.classList.add('hidden');
                btn.classList.remove('selected');
            }
        }
        
        post.classList.remove('hidden');
        ev.target.classList.add('selected');

        activePosts.push(id);
    });
        
    
    button.appendChild(document.createTextNode(data.title));

    let preview = document.createElement('p');

    preview.appendChild(document.createTextNode(data.preview));
    preview.classList.add('preview-text');

    preview.addEventListener('click', (ev) => {
        ev.stopPropagation();
        button.click();
    });

    button.appendChild(preview);


    dropdownPosts.appendChild(button);
    
    if (data.isDefault) {
        activePosts.push(postCount - 1);
    } else {
        container.classList.add('hidden');
    }

    document.getElementById('texts').appendChild(post);
}

const defaultPost = {
	"title": "Herzlich Willkommen!",
	"paragraphs": [
		"Dies ist die Startseite des Blogs. Klicke auf \"Texte\", um einen anderen Text zu laden. Klicke dazu einfach auf den Titel des Textes.",
		"Es können noch einige Fehler auftreten, aktuell sind keine bekannt.",
        "Viel Spaß"
	],
	"preview": "Willkommensnachricht",
	"isDefault": true
};

createPost(defaultPost);

const example = {
	"subtitle": "Dies ist ein Untertitel.",
	"title": "Beispieltext",
	"author": "Test",
    "date": "08. März 2022",
	"paragraphs": [
        "Ein Post wie dieser hat einen Vorschau-Text unter seinem Titel im Texte-Menü.",
        "Außerdem kann ein Post einen Untertitel, einen Titel, einen Autoren, ein Datum und mehrere Absätze haben. Texte können auch auf der Startseite angezeigt werden lassen.",
        "Das Erstellen eines Posts ist relativ einfach. Um einen Post zu erstellen, muss man in einer Javascript-Datei die vorgesehene Funktion aufrufen und ihr ein Objekt mit den richtigen Parametern übergeben.",
        "Das Aussehen eines Posts zu ändern ist auch möglich. Das erfordert jedoch etwas mehr Arbeit und man muss mit CSS-Dateien arbeiten.",
        "",
        "Das sind alle grundlegenden Informationen über Posts."
    ],
	"preview": "Ein Beispieltext, der die Funktionen der Seite demonstriert.",
	"isDefault": false
};

createPost(example);

const oneMoreExample = {
    "title": "Beispiel 2",
    "author": "Test",
    "paragraphs": [
        "Kurzer Text."
    ],
    "preview": "Ein weiteres Beispiel."
}

createPost(oneMoreExample);
