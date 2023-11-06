const blogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-description').value.trim();

    if (title && description) {
        const response = await fetch('/api/blogs/create-blog', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert('Failed to create a new blog post.');
        }
    }
};

document
    .querySelector('.blog-form')
    .addEventListener('submit', blogHandler);
