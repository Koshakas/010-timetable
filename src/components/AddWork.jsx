import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";

function AddWork() {
    return (
        <Card>
            <Card.Header>Pridėkite Darbą</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <FloatingLabel className="mb-3" label="Pasirinkite įmonę">
                        <Form.Select aria-label="Floating label select example">
                            <Companies />
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className="mb-3" label="Pasirinkite suteiktą paslaugą">
                        <Form.Select aria-label="Floating label select example">
                            <Services />
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Atlikto darbo aprašymas">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} />
                    </FloatingLabel>

                    <Form.Group className="mb-3">
                        <Form.Label>Nuo:</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Iki:</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Saugoti
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddWork;
