import React, { Component } from 'react';
import { Consumer } from '../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone,
      id: res.data.id,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, email, phone } = this.state;
    const updateContact = {
      name,
      email,
      phone,
    };

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );
    dispatch({ payload: res.data, type: 'UPDATE_CONTACT' });

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
              <div className="card-header">Edit Contact</div>
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
                      value="Update Contact"
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

export default EditContact;
