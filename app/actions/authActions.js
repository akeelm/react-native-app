export const loginUser = (username, password) => {
    if (username === 'test' && password === 'password123') {
        return {
            type: 'LOGIN_SUCCESS',
            user: {
                username: username,
                password: password
            }
        };
    } else {
        return {
            type: 'LOGIN_FAILED'
        }
    }
}