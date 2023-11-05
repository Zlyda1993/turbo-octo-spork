const updateButton = document.querySelector('#updateBlog');
const blogid = updateButton.getAttribute('data-blogid');

updateButton.addEventListener('click', async () => {
    if (blogid) {

        const newTitle = 'New Title';
        const newDescription = 'New Description';

        const response = await fetch(`/api/blogs/update-blog/${blogid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTitle, description: newDescription }),
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
           console.log(err);
            alert('Failed to update the blog post.');
        }
    }
});

