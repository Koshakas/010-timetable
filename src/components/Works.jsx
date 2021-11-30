import { Button, Card, Table } from "react-bootstrap";
import AddWork from "./AddWork";
import React, { useState } from "react";

function Works() {
    const [addWork, setAddWork] = useState(false);

    function addWorkHandler() {
        setAddWork(true);
    }

    function closeWorkHandler() {
        setAddWork(false);
    }

    return (
        <>
            {addWork && <AddWork />}
            <Card>
                <Card.Header>
                    {addWork ? (
                        <Button className="btn btn-danger" onClick={closeWorkHandler}>
                            Atšaukti
                        </Button>
                    ) : (
                        <Button className="btn btn-primary" onClick={addWorkHandler}>
                            Pridėti
                        </Button>
                    )}
                </Card.Header>
                <Card.Header>
                    <h3>Darbų sąrašas</h3>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Klientas</th>
                                <th>Suteikta paslauga</th>
                                <th>Aprašymas</th>
                                <th>Trukmė</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11-12</td>
                                <td>Markas Tvenas</td>
                                <td>Higiena</td>
                                <td>Ivalyti tarpudančius</td>
                                <td>30min.</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
}

export default Works;
