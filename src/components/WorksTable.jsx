import { Card, Table } from "react-bootstrap";
import Work from "./Work";

const WorksTable = props => {
    return (
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
                    {props.data.map((w, i) => (
                        <Work key={i} work={w} />
                    ))}
                </tbody>
            </Table>
        </Card.Body>
    );
};

export default WorksTable;
