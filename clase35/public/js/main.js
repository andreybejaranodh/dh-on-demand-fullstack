fetch('/auth/token')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('liteflix-token', data.token);
    })
    .catch(error => {
        console.error(error);
    });

setTimeout(() => {
    fetch('/api/movie', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('liteflix-token')}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}, 3000);