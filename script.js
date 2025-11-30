// Simple tab toggle (keeps focus and accessibility attributes)
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const formLogin = document.getElementById('form-login');
    const formSignup = document.getElementById('form-signup');
    const gotoLogin = document.getElementById('goto-login');

    function activateLogin(){
      tabLogin.classList.add('active');
      tabLogin.setAttribute('aria-selected','true');
      tabSignup.classList.remove('active');
      tabSignup.setAttribute('aria-selected','false');

      formLogin.style.display = '';
      formLogin.setAttribute('aria-hidden','false');
      formSignup.style.display = 'none';
      formSignup.setAttribute('aria-hidden','true');
    }

    function activateSignup(){
      tabSignup.classList.add('active');
      tabSignup.setAttribute('aria-selected','true');
      tabLogin.classList.remove('active');
      tabLogin.setAttribute('aria-selected','false');

      formSignup.style.display = '';
      formSignup.setAttribute('aria-hidden','false');
      formLogin.style.display = 'none';
      formLogin.setAttribute('aria-hidden','true');
    }

    tabLogin.addEventListener('click', activateLogin);
    tabSignup.addEventListener('click', activateSignup);
    tabLogin.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') activateLogin() });
    tabSignup.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') activateSignup() });
    gotoLogin && gotoLogin.addEventListener('click', activateLogin);

    // Placeholder handlers for forms (replace with real fetch to your backend)
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      alert('You would send these to backend:\n' + email + '\n(Implement fetch POST to /api/login and receive JWT)');
    });

    formSignup.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      alert('Signup flow — send to backend:\n' + name + '\n(Implement fetch POST to /api/signup)');
    });

    // Google buttons: these are placeholders — integrate Google Identity or One Tap later
    document.getElementById('google-login').addEventListener('click', () => {
      alert('Open Google sign-in flow here (frontend). After Google returns credential, POST it to your backend /api/auth-google to get JWT.');
    });
    document.getElementById('google-signup').addEventListener('click', () => {
      alert('Same as above — Google Sign Up flow.');
    });