function postData(subpage = '', data = {}) {
    fetch(`http://localhost:9006/${ subpage }`, {
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
        return res.json();
    });
}

function signIn() {
    const body = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    postData('/login', body).then((res) => {
        if (res.status !== 200) throw new Error(res.message);
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

    postData('/signup', body).then((res) => {
        if (res.status !== 200) throw new Error(res.message);
        window.location.replace('/game');
    }).catch((err) => {
        window.alert(err.message);
        window.location.replace('/login');
    });
}

function forgotPassword() {
    console.log('Works doode');
}

function resetPassword() {
    console.log('Works dookie');
}