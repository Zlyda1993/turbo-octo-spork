const commentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const url = window.location.href;
    const idMatch = url.match(/\/post-by-id\/(\d+)/);
    const blogid = idMatch[1];
    

    if (comment && blogid) {
        const response = await fetch('/api/comments/create-comment', {
            method: 'POST',
            body: JSON.stringify({ comment, blogid }),
            headers: { 'Content-type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create a new comment.');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);