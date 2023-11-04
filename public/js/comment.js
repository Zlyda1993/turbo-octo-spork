const commentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();

    if (comment) {
        const response = await fetch('/api/comments/create-comment', {
            method: 'POST',
            body: JSON.stringify({ comment }),
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