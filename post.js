let posts = [];

function createPost(title, subtitle, author, date, paragraphs, preview, isDefault) {
    if (isDefault) {
        location.hash = '#' + posts.length; 
    }

    posts.push({
        'open': isDefault,
        'title': title,
        'subtitle': subtitle,
        'author': Translations.get('post.uploadedBy').replace(
            '<author>',
            author || Translations.get('post.unknownAuthor')
        ),
        'date': date,
        'paragraphs': paragraphs,
        'preview': preview
    });
}

document.addEventListener('alpine:init', () => {
    Alpine.bind('posts', () => (posts));
});