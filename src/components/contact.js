import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Contact (){
    return(
        <>
            <div className=" container mt-4" style={{backgroundColor: '#121212'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Text</Form.Label>
                        <Form.Control type="text" placeholder="Text" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            </>
    );
}