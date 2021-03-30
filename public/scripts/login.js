const loginForm = document.getElementById('login-form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      return user.getIdToken().then((idToken) => {
        return fetch('/resources', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${idToken}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => {
            const html = displayQuotes(resp);
            quotes.innerHTML = html;
            document.title = 'quotes';
            window.history.pushState(
              { html, pageTitle: 'quotes' },
              '',
              '/resources',
            );

            loginForm.style.display = 'none';
            quotes.classList.remove('d-none');
          })
          .catch((err) => {
            console.error(err.message);
            error.innerHTML = err.message;
          });
      });
    })
    .then(() => {
      return firebase.auth().signOut();
    })
    .catch((err) => {
      console.error(err.message);
      error.innerHTML = err.message;
    });
});
