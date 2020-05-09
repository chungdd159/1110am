import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  deleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h3>
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                />
                <i
                  style={{ color: 'red', float: 'right' }}
                  className="fas fa-times"
                  onClick={this.deleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      float: 'right',
                      marginRight: '20px',
                      cursor: 'pointer',
                      fontSize: '25px',
                    }}
                  ></i>
                </Link>
              </h3>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
