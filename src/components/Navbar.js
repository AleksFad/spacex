import React from 'react';

import {
  Button,
  Navbar,
  NavbarBrand,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

const NavbarComp = (props) => {
  const { savePressed, loadPressed, handleSearch } = props;

  return (
    <Navbar
      className='sticky-top flex-md-nowrap p-10'
      color='light'
      light
      expand='md'
    >
      <NavbarBrand href='/'>Cargo planner</NavbarBrand>
      <InputGroup className='search'>
        <InputGroupAddon addonType='prepend' className='search-icon'>
          <InputGroupText>&#128270;</InputGroupText>
        </InputGroupAddon>
        <Input
          type='search'
          name='search'
          id='search'
          placeholder='Search'
          onChange={(e) => {
            handleSearch(e);
          }}
        />
      </InputGroup>

      <div className='control-buttons'>
        <Button onClick={loadPressed} color='secondary'>
          Load
        </Button>{' '}
        <Button onClick={savePressed} color='primary'>
          Save
        </Button>{' '}
      </div>
    </Navbar>
  );
};

export default NavbarComp;
