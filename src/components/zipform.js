import React, { Component } from 'react';

class ZipForm extends Component {
    constructor (props) {
      super(props);
      // ZipForm state instance variable only contains zipcode
      this.state = {
        zipcode: ""
      };
      // bind methods to the class
      this.inputChanged = this.inputChanged.bind(this);
      this.submitZipCode = this.submitZipCode.bind(this);
  }
  // reflects change in input field value in state
  inputChanged(e) {
    const {value} = e.target;
    this.setState( {zipcode: value} );
  }    

  submitZipCode (e) {
    e.preventDefault(); // don’t submit the form
    const { zipcode } = this.state; // get the zipcode from the state
    const { onSubmit } = this.props; // the method from the App 
    onSubmit(zipcode); // the form calls a method on the App and passes the zipcode
    this.setState( {zipcode : ""} ); // clear the zipcode in the class (and on the web page)
  }
    render() {
      return (
        // html converted to jsx
        <div className="zip-form">
            <form id="zipForm" onSubmit={this.submitZipCode}>
                <div className="flex-parent">
                    <label htmlFor="zipcode">Zip</label>
                    <input className="form-control" type="text" 
                      id="zipcode" name="zipcode" required onChange={this.inputChanged}
                      value={this.state.zipcode} />
                    <button type="submit" className="btn btn-success"> Get the forcast!</button>
                </div>
            </form>
        </div>
      );
    }
  }
  
  export default ZipForm;