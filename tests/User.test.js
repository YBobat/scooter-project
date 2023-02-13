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

  it('should have a loggedIn property set to false by default', () => {
    expect(user.loggedIn).toBe(false);
  });

  describe('login method', () => {
    it('should log the user in if the password is correct', () => {
      user.login('secret123');
      expect(user.loggedIn).toBe(true);
    });

    it('should throw an error if the password is incorrect', () => {
      expect(() => user.login('incorrect')).toThrow('Incorrect password');
    });
  });

  describe('logout method', () => {
    it('should log the user out', () => {
      user.login('secret123');
      user.logout();
      expect(user.loggedIn).toBe(false);
    });
  });
});
