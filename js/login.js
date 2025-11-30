<script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            if (username === '' || password === '') {
                errorMessage.textContent = 'Por favor, preencha todos os campos!';
                errorMessage.style.display = 'block';
                return;
            }
            
            if (username === 'ben10' && password === 'omnitrix') {
                errorMessage.style.display = 'none';
                alert('Login realizado com sucesso! Bem-vindo ao Universo Ben 10!');
                window.location.href = 'index.html';
            } else {
                errorMessage.textContent = 'Usuário ou senha incorretos!';
                errorMessage.style.display = 'block';
            }
        });

        document.getElementById('username').addEventListener('input', function() {
            document.getElementById('error-message').style.display = 'none';
        });

        document.getElementById('password').addEventListener('input', function() {
            document.getElementById('error-message').style.display = 'none';
        });
    </script>