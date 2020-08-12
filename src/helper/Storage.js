//Getter and setter class
class Shipments {
  shipments = [];

  setShipments(s) {
    this.shipments = s;
  }

  getShipments() {
    return this.shipments;
  }
}

const shipments = new Shipments();
export default shipments;
