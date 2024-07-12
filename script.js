document.addEventListener('keydown', function(event) {
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('key-info').style.display = 'block';
    document.getElementById('code').textContent = event.code;
    document.getElementById('key').textContent = event.key;
    document.getElementById('which').textContent = event.which;
});
