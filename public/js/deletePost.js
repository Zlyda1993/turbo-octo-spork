
const deleteButton = document.querySelector('#deleteBlog');
const blogid = deleteButton.getAttribute('data-blogid');

deleteButton.addEventListener('click', async () => {

    if (blogid) {
        const response = await fetch(`/api/blogs/delete-blog/${blogid}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete the blog post.');
        }
    }
});
