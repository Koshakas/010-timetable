import { Button } from "react-bootstrap";
import { deleteCompany } from "../services/companies";
import { Trash } from "react-bootstrap-icons";

const CompanyItem = props => {
    const handleDelete = id => {
        deleteCompany(id);
    };

    return (
        <tr>
            <td>{props.company.code}</td>
            <td>{props.company.title}</td>
            <td>
                <Button variant="danger" onClick={() => handleDelete(props.company.id)}>
                    <Trash />
                </Button>
            </td>
        </tr>
    );
};

export default CompanyItem;
