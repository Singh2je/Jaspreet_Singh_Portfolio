import React from 'react';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap';

export default function Contact() {
  return (
    <div style={{padding:"20px"}}>
         <h1 className="project-heading">
          Contact <strong className="purple">Form </strong>
        </h1>
        <p style={{ color: "white" }}>
          Let's contact if you have any query
        </p>
        <center>
            <Row style={{ width: "70%" }}>
                <Form>
                    <Form.Group as={Col} className="mb-3" controlId="">
                    <Form.Control type="text" placeholder="Your Name" style={{ backgroundColor: '#ffffff' }} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="">
                    <Form.Control type="email" placeholder="Email Address" style={{ backgroundColor: '#ffffff' }} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Message" style={{ backgroundColor: '#ffffff' }} />
                    </Form.Group>
                </Form>
            </Row>
        </center>
    </div>
  )
}
