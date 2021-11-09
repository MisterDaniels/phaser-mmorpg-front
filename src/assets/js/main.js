function postData(subpage = '', data = {}) {
    return fetch(`http://localhost:9006/${ subpage }`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status !== 200) throw new Error(res.message);
        return res.json();
    });
}

function putData(subpage = '', data = {}) {
    return fetch(`http://localhost:9006/${ subpage }`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status !== 200) throw new Error(res.message);
        return res.json();
    });
}

function signIn() {
    const body = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    postData('login', body).then(() => {
        window.location.replace('/game');
    }).catch((err) => {
        window.alert(err.message);
        window.location.replace('/login');
    });
}

function signUp() {
    const body = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        username: document.getElementById('username').value
    }

    postData('signup', body).then(() => {
        window.alert('User created successfully');
        window.location.replace('/login');
    }).catch((err) => {
        window.alert(err.message);
        window.location.replace('/signup');
    });
}

function forgotPassword() {
    const body = {
        email: document.getElementById('email').value
    }

    postData('forgot-password', body).then(() => {
        window.alert('Password reset email send');
        window.location.replace('/login');
    }).catch((err) => {
        window.alert(err.message);
        window.location.replace('/forgot-password');
    });
}

function resetPassword() {
    const body = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    const token = document.location.href.split('token=')[1];

    if (!token) {
        window.alert('Not valid reset password request');
        window.location.replace('/login');
    }

    putData(`reset-password?token=${ token }`, body).then(() => {
        window.alert('Password updated');
        window.location.replace('/login');
    }).catch((err) => {
        window.alert(err.message);
        window.location.replace('/login');
    });
}