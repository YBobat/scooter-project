const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter class', () => {
  let scooter;

  beforeEach(() => {
    scooter = new Scooter('Scooter Station');
  });

  test('Scooter is created with correct station and serial number', () => {
    expect(scooter.station).toBe('Scooter Station');
    expect(scooter.serial).toBe(1);
  });

  test('Scooter is rented successfully', () => {
    scooter.rent();
    expect(scooter.station).toBe(null);
    expect(scooter.user).toBe('User');
  });

  test('Scooter cannot be rented if it needs to be charged', () => {
    scooter.charge = 10;
    expect(() => {
      scooter.rent();
    }).toThrow('Scooter needs to charge');
  });


});
