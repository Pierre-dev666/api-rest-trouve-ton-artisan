document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Remplace cette URL par celle de ton backend Render :
        const API_URL = 'https://api-rest-trouve-ton-artisan.onrender.com/users/authenticate';

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailInput.value, password: passwordInput.value }),
        })
        .then(async (response) => {
            if (!response.ok) {
                let message = 'Erreur d\'authentification';
                try {
                    const errorData = await response.json();
                    message = errorData.message || message;
                } catch (_) {
                    // Pas de JSON retourné, garder le message par défaut
                }
                throw new Error(message);
            }
            return response.json();
        })
        .then(data => {
            console.log('Réponse du serveur:', data);
            const token = data.token;
            localStorage.setItem('jwtToken', token);
            window.location.href = '/dashboard';
        })
        .catch(error => {
            console.error('Erreur d\'authentification:', error.message);
            alert('Échec de connexion : ' + error.message);
        });
    });
});