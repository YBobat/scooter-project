class Scooter {
  static nextSerial = 1;
  station = null;
  user = null;
  serial = Scooter.nextSerial++;
  charge = 100;
  isBroken = false;

  constructor(station) {
    this.station = station;
  }

  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = 'User';
    } else if (this.charge <= 20) {
      throw new Error('Scooter needs to charge');
    } else if (this.isBroken) {
      throw new Error('Scooter needs repair');
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  recharge() {
    this.charge = 100;
  }

  requestRepair() {
    this.isBroken = false;
  }
}

module.exports = Scooter;
