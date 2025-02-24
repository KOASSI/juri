document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Validation simple
    if (!name || !email || !phone || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
  
    // Simuler l'envoi du formulaire
    console.log('Formulaire soumis :', { name, email, phone, message });
    alert('Votre message a été envoyé avec succès !');
  
    // Réinitialiser le formulaire
    document.getElementById('contact-form').reset();
  });
  // server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`

