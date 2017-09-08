import React from 'react'

class Form extends React.Component {
  onChange = (param) => {
    const name = param.target.name;
    const value = param.target.value;
    this.setState({
      [name]: value
    }, this.validate);
  }

  onBlur = (param) => {
    const name = param.target.name;
    const touched = {...this.state.touched, [name]: true};
    this.setState({
      touched
    }, this.validate)
  }

  validate = () => {
    console.log('Form should implement validate function');
  }
}

export default Form
