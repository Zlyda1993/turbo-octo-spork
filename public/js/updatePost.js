const updateButton = document.querySelector('#updateBlog');
const blogid2 = updateButton.getAttribute('data-blogid');
const title = document.querySelector('.updateTitle').value.trim();
const description = document.querySelector('.updateDescription').value.trim();

updateButton.addEventListener('click', async () => {
    if (blogid2) {

        const newTitle = title;
        const newDescription = description;
console.log(newDescription);
console.log(newTitle);
        const response = await fetch(`/api/blogs/update-blog/${blogid2}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTitle, description: newDescription }),
        });

        if (response.ok) {
            document.location.replace('/post-by-id/' + blogid2)
        } else {
            alert('Failed to update the blog post.');
        }
    }
});

