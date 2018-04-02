export const loginUser = (username, password) => {
    if (username !== 'test') {
        return {
            type: 'LOGINUSER'
        }
    }
    return {
        type: 'LOGINUSER',
        username: username,
        password: password
    };
}