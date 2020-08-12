import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { ListGroup, ListGroupItem } from 'reactstrap';

class Sidebar extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='sidebar-sticky'>
        <ListGroup className='nav flex-column'>
          {data !== null ? (
            data.map((business) => (
              <Link
                className='list-item'
                key={business.id}
                to={`/${business.name}`}
              >
                {business.name}
              </Link>
            ))
          ) : (
            <ListGroupItem className='no-shipments'>
              <h2>No shipments</h2>
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    );
  }
}

export default Sidebar;
