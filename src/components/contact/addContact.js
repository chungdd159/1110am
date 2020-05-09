import React, { Component } from 'react';
import { Consumer } from '../Context';
import { v4 as uuid } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === '') {
      return this.setState({ errors: { name: 'Name is required' } });
    }
    if (email === '') {
      return this.setState({ errors: { email: 'Email is required' } });
    }
    if (phone === '') {
      return this.setState({ errors: { phone: 'Phone is required' } });
    }

    const newContact = {
      name,
      email,
      phone,
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({ payload: res.data, type: 'ADD_CONTACT' });

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    name="name"
                    err={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    name="email"
                    type="email"
                    err={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    name="phone"
                    err={errors.phone}
                  />

                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-light btn-block"
                      value="Add Contact"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
