const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

const firebaseConfig = {
  apiKey: "AIzaSyBe-GwxFabt6nqCd-wG-b0ZhddmSBpy-KM",
  authDomain: "elevate-team-app.firebaseapp.com",
  projectId: "elevate-team-app",
  storageBucket: "elevate-team-app.appspot.com",
  messagingSenderId: "853385050770",
  appId: "1:853385050770:web:267ca0972d173e1acf844b",
  measurementId: "G-JS7V30VSBJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote of allQuotes) {
    html += `<blockquote class="wp-block-quote">
                <p>${quote.quote}. </p><cite>${quote.character}</cite>
            </blockquote>`;
  }

  return html;
};
