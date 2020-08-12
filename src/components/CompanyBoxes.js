import React, { useEffect, useState } from 'react';
import shipments from '../helper/Storage';
import { Input, Label } from 'reactstrap';

const getShipment = (id) => {
  return shipments.getShipments().find((s) => s.id === id);
};

const roughObjectData = (shipmentId) => {
  const roughBoxes = getShipment(shipmentId).boxes;
  return roughBoxes !== null ? roughBoxes : [];
};

function CompanyBoxes(props) {
  const { shipmentId, onShipmentsChange } = props;
  const [boxesValue, setBoxesValue] = useState('');

  useEffect(() => {
    if (getShipment(shipmentId).boxes !== null) {
      setBoxesValue(getShipment(shipmentId).boxes || '');
    } else {
      setBoxesValue([]);
    }
  }, [getShipment(shipmentId).boxes]);

  return (
    <div>
      <Label for='boxes' sm={2}>
        Cargo Boxes
      </Label>
      <Input
        type='text'
        name='boxes'
        id='boxes'
        value={boxesValue}
        onChange={(event) => {
          setBoxesValue(event.target.value);
          onShipmentsChange(event.target.value);
        }}
      />
    </div>
  );
}

export default CompanyBoxes;
