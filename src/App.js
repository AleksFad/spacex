import React, { useState, Fragment } from 'react';
import './App.scss';
import shipments from './helper/Storage';

import cargo from './shipments.json';
import Company from './components/Company';
import { Switch, Route } from 'react-router-dom';

import NavbarComp from './components/Navbar';

import Sidebar from './components/Sidebar';

import { Button } from 'reactstrap';

function App() {
  const __init = () => {
    return JSON.parse(localStorage.getItem('companies'));
  };
  shipments.setShipments(__init());

  const [data, setData] = useState(shipments.getShipments());

  const savePressed = () => {
    localStorage.setItem('companies', JSON.stringify(shipments.getShipments()));
  };

  const loadPressed = () => {
    shipments.setShipments(cargo);
    localStorage.setItem('companies', JSON.stringify(cargo));
    setData(cargo);
  };

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    const filteredInput = cargo.filter((company) =>
      company.name.toLowerCase().includes(input)
    );
    setData(filteredInput);
  };

  return (
    <Fragment>
      <NavbarComp
        loadPressed={loadPressed}
        savePressed={savePressed}
        handleSearch={handleSearch}
      />
      <div className='container-fluid'>
        <div className='row'>
          <nav className='col-md-3 d-none d-md-block bg-light sidebar'>
            <Sidebar data={data} />
          </nav>
          <main className='col-md-9 ml-sm-auto col-lg-9 pt-3 px-4'>
            <div className='toolbar' />
            {data === null ? (
              <div className='load-page'>
                <h3>No Shipments Were Found.</h3>
                <div>
                  <Button color='primary' onClick={loadPressed}>
                    Load Shipments
                  </Button>
                </div>
              </div>
            ) : (
              <Switch>
                <Route path={'/:name'} component={Company} />
              </Switch>
            )}
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
