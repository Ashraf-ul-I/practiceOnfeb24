import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [userPass, setUserpass] = useState('');
    const [conFirmPass, setconFirmPass] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangepass = (e) => {
        setUserpass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (userPass === conFirmPass) {
            setSuccessMessage(`Congratulations ${username}, you succeeded`);
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label>User Name</label>
                <input type="text" value={username} name='usernameN' autoComplete='new-name' onChange={onChangeUsername} />
                <label>Password:</label>
                <input type="password" value={userPass} name='passwordN' onChange={onChangepass} autoComplete="new-password" />
                <label>Confirm password:</label>
                <input type="password" value={conFirmPass} name='ConfirmpasswordN' autoComplete="new-password" onChange={(e) => setconFirmPass(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            {submitted && (
                <div>
                    <p>Username: {username}</p>
                    <p>Password: {userPass}</p>
                    {successMessage && <p>{successMessage}</p>}
                </div>
            )}
        </div>
    )
}

export default Login;
