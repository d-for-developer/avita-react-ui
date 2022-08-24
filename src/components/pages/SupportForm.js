import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';


class SupportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='mt-4 text-center'>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <FormControl>

              <InputLabel style={{ marginTop: '1%' }} htmlFor="name">Full Name</InputLabel>
                <Input id="name" aria-describedby="my-helper-name" />
                </FormControl>

            </Col>
            <Col>
                <FormControl>

                <InputLabel style={{ marginTop: '1%' }} htmlFor="email">Email address</InputLabel>
                <Input id="email" aria-describedby="my-helper-email" />
                <FormHelperText id="my-helper-email">We'll never share your email.</FormHelperText>
                
                
              </FormControl>
            </Col>
          </Row>

        </form >
      </div>
    );
  }
}

export default SupportForm