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

  test('Scooter cannot be rented if it is broken', () => {
    scooter.isBroken = true;
    expect(() => {
      scooter.rent();
    }).toThrow('Scooter needs repair');
  });

  test('Scooter is docked successfully', () => {
    scooter.rent();
    scooter.dock('Another Scooter Station');
    expect(scooter.station).toBe('Another Scooter Station');
    expect(scooter.user).toBe(null);
  });

  test('Scooter charge increases until it reaches 100%', () => {
    scooter.charge = 50;
    scooter.recharge();
    jest.advanceTimersByTime(1000);
    expect(scooter.charge).toBe(51);
    jest.advanceTimersByTime(4000);
    expect(scooter.charge).toBe(100);
  });

  test('Scooter is repaired successfully', () => {
    scooter.isBroken = true;
    scooter.requestRepair();
    jest.advanceTimersByTime(1000);
    expect(scooter.isBroken).toBe(false);
  });
});
