import * as authActions from './../../../app/actions/authActions';

it('loginUser action should return LOGIN_SUCCESS when given username test', () => {
    let value = authActions.loginUser('test', 'password123');
    expect(value.type).toBe('LOGIN_SUCCESS');
});


it('loginUser action should return LOGIN_FAILED when given username dumy', () => {
    let value = authActions.loginUser('dummy', 'password123');
    expect(value.type).toBe('LOGIN_FAILED');
});
