const signupForm = document.getElementById('signup-form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
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
            signupForm.style.display = 'none';
            quotes.classList.remove('d-none');
          })
          .catch((err) => {
            console.error(err.message);
            error.innerHTML = err.message;
          });
      });
    })
    .catch((err) => {
      console.error(err.message);
      error.innerHTML = err.message;
    });
});
