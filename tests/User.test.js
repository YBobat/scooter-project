const User = require('./User');

describe('User class', () => {
  let user;

  beforeEach(() => {
    user = new User('John Doe', 'secret123', 30);
  });

  it('should have a username property', () => {
    expect(user.username).toBe('John Doe');
  });

  it('should have a password property', () => {
    expect(user.password).toBe('secret123');
  });

  it('should have an age property', () => {
    expect(user.age).toBe(30);
  });

});
