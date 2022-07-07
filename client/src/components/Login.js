import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

const Login = ({ onSubmitId }) => {

    // Refs
    const idRef = useRef();

    // Functions
    function handleSubmit(e) {
        e.preventDefault();

        onSubmitId(idRef.current.value);
    }

    function createNewId() {
        onSubmitId(uuid())
    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type='text' ref={idRef} required /> 
                </Form.Group>
                <Button type='submit' className='mr-2'>Login</Button>
                <Button onClick={createNewId} variant='secondary'>Create a New Id</Button>
            </Form>
        </Container>
    )
}

export default Login
