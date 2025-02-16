document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                localStorage.setItem('user', username);
                alert(`Welcome, ${username}!`);
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials!');
            }
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            alert(`Account created for: ${username}`);
        });
    }

    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const fileInput = document.getElementById('rbxlFile');
            if (fileInput.files.length > 0) {
                document.getElementById('uploadStatus').textContent = 'File uploaded successfully!';
            } else {
                alert('Please select a .rbxl file to upload.');
            }
        });
    }
});
