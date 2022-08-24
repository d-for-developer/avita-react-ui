import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

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
      <div className='mt-4 mb-4 text-center'>
        <Row className='mt-4'>
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

          <Col>
            <FormControl>
              <InputLabel style={{ marginTop: '1%' }} htmlFor="email">Phone Number</InputLabel>
              <Input id="phone" aria-describedby="my-helper-phone" />
            </FormControl>
          </Col>

        </Row>
        <Row className='mt-4'>
          <Col>
            <FormControl>
              <InputLabel style={{ marginTop: '1%' }} htmlFor="subject">Subject</InputLabel>
              <Input id="subject" aria-describedby="my-helper-subject" />
            </FormControl>
          </Col>
      
          <Col>
            <FormControl>
              <InputLabel style={{ marginTop: '1%' }} htmlFor="message">Message</InputLabel>
              <Input type='textarea' id="message" aria-describedby="my-helper-message" />
            </FormControl>
          </Col>
      
          <Col>
            <FormControl>
              <Input type="submit" value="Submit" id="submit" aria-describedby="my-helper-submit"  />

            </FormControl>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SupportForm