import { Table } from "react-bootstrap";
import * as services from "../services";
import Work from "./Work";
import { Button } from "react-bootstrap";

const WorksTable = props => {
    const deleteItemHandler = id => {
        services.deleteWork(id);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>
                        Klientas
                        <Button className="btn btn-danger" onClick={props.SortCompanyHandler}>
                            SortByCompany
                        </Button>
                    </th>
                    <th>
                        Suteikta paslauga
                        <Button className="btn btn-danger" onClick={props.SortServiceHandler}>
                            SortByService
                        </Button>
                    </th>
                    <th>Aprašymas</th>
                    <th>Trukmė</th>
                    <th>Redaguoti</th>
                    <th>Šalinti</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((w, i) => (
                    <Work key={i} work={w} deleteW={deleteItemHandler} />
                ))}
            </tbody>
        </Table>
    );
};

export default WorksTable;
