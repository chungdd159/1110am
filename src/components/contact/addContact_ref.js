import React, { Component } from 'react'

 class AddContact extends Component {
   constructor(props) {
     super(props);
     this.nameInput = React.createRef();
     this.emailInput = React.createRef();
     this.phoneInput = React.createRef();
   }

   static defaultProps = {
     name:'abc',
     email:'abcd@gmail.com',
     phone:'012-345-6789'
   }

   onSubmit = (e) => {
     e.preventDefault();
     const contact = {
       name: this.nameInput.current.value,
       email: this.emailInput.current.value,
       name: this.nameInput.current.value,
     }
     console.log(contact)
   }

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input type="text" className="form-control form-control-lg" autoComplete="off"
              name="name" placeholder="Enter Name" defaultValue={name} ref={this.nameInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" className="form-control form-control-lg" autoComplete="off"
              name="email" placeholder="Enter Email" defaultValue={email} ref={this.emailInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone"></label>
              <input type="text" className="form-control form-control-lg" autoComplete="off"
              name="phone" placeholder="Enter Phone" defaultValue={phone} ref={this.phoneInput}/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-light btn-block"
               value="Add Contact"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;