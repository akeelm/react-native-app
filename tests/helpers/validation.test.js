import * as validation from '../../app/helpers/validation';

let mock = Object;
let internalState;

mock.setState = (obj) => {
    internalState = obj;
}

it('should validate an e-mail', () => {
    let validEmail = 'test@test.com';
    validation._validateEmail(validEmail, jest.fn(), mock);
    expect(internalState.error).toBeFalsy();

    let invalidEmail = 'invalid';
    validation._validateEmail(invalidEmail, jest.fn(), mock);
    expect(internalState.error).toBeTruthy();
    expect(internalState.errorMessage).toBe('Not a valid e-mail address');
});


it('should ensure minimum password length', () => {
    let invalidPassword = '123';
    validation._minimumPasswordLength(invalidPassword, jest.fn(), mock);
    expect(internalState.error).toBeTruthy();
    expect(internalState.errorMessage).toBe('Password must be greater than 6 characters');

    let validPassword = '1234567';
    validation._minimumPasswordLength(validPassword, jest.fn(), mock);
    expect(internalState.error).toBeFalsy();

    //test manual length parameter
    validation._minimumPasswordLength(validPassword, jest.fn(), mock, 8);
    expect(internalState.error).toBeTruthy();
    expect(internalState.errorMessage).toBe('Password must be greater than 8 characters');
});

it('should match passwords', () => {
    mock.props = { checkValue : '123' };

    let valid = '123';
    validation._passwordsMustMatch(valid, jest.fn(), mock);
    expect(internalState.error).toBeFalsy();

    let invalid = '456';
    validation._passwordsMustMatch(invalid, jest.fn(), mock);
    expect(internalState.error).toBeTruthy();
    expect(internalState.errorMessage).toBe('Passwords must match');
});