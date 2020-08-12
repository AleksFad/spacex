import React, { useEffect, useState } from 'react';
import shipments from '../helper/Storage';
import CompanyBoxes from './CompanyBoxes';

import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function Company(props) {
  const { match } = props;
  const { id, name, email, boxes } = getBusinessDetails(match.params.name);
  const [box, setBox] = useState('');
  const [cargoBays, setCargoBays] = useState(calculateCargoBays(box));

  useEffect(() => {
    setBox(boxes === null ? '' : boxes);
    setCargoBays(calculateCargoBays(getBusinessDetails(name).boxes));
  }, [boxes, name]);

  const updateCargoBays = (props) => {
    setCargoBays(calculateCargoBays(props));
  };

  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <a className='email-link' href={`mailto: ${email}`}>
        {email}
      </a>

      <CardBody>
        Number of required cargo bays
        <CardText>{cargoBays}</CardText>
      </CardBody>

      <Button>
        <CompanyBoxes shipmentId={id} onShipmentsChange={updateCargoBays} />
      </Button>
    </Card>
  );
}

const getBusinessDetails = (name) => {
  return shipments.getShipments().find((r) => r.name === name);
};

const calculateCargoBays = (boxesString) => {
  if (boxesString === null) return 0;

  const total = Math.round(
    boxesString
      .split(',')
      .map(Number)
      .reduce((a, b) => a + b) / 10
  );
  return total;
};

export default Company;
