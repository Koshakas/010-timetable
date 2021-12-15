import { Button, Form, Table } from "react-bootstrap";
import { getAllCompanies, addCompany } from "../services/companies";
import { useEffect, useState } from "react";
import CompanyItem from "./CompanyItem";
import { PlusSquare, ArrowReturnLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CompaniesTable = () => {
    const [companies, setCompanies] = useState([]);
    const [companyData, setCompanyData] = useState({
        code: "",
        title: ""
    });

    useEffect(() => {
        getAllCompanies(setCompanies);
    }, []);

    const handleChange = e => {
        setCompanyData({
            ...companyData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        addCompany(companyData);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Title</th>
                    <th>
                        <Link className="btn btn-primary" to="/">
                            <ArrowReturnLeft />
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {companies.map((c, i) => (
                    <CompanyItem key={i} company={c} />
                ))}
                <tr>
                    <td>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Code" name="code" onChange={handleChange} type="text" value={companyData.code} />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Title" name="title" onChange={handleChange} type="text" value={companyData.title} />
                        </Form.Group>
                    </td>
                    <td>
                        <Button onClick={handleSubmit}>
                            <PlusSquare />
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default CompaniesTable;
