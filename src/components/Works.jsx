import { Button, Card } from "react-bootstrap";
import AddWork from "./AddWork";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services";

function Works(props) {
    const [addWork, setAddWork] = useState(false);
    const [works, setWorks] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    function addWorkHandler() {
        setAddWork(true);
    }

    function closeWorkHandler() {
        setAddWork(false);
    }

    const handleAddWork = data => {
        services.addWork(data);
        // setWorks((prevData) => [...works, prevData]);
        closeWorkHandler();
        props.status(true);
    };

    const handleFilter = criteria => {
        const filteredItems = works.filter(item => {
            return Object.keys(criteria).every(filter => {
                return criteria[filter] === item[filter];
            });
        });
        setSearchResult(filteredItems);
        console.log("filteredItems", filteredItems);
    };

    useEffect(() => {
        services.getAllWorks(setWorks);
    }, []);

    return (
        <>
            {addWork && <AddWork setWorks={handleAddWork} />}
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

                <Card.Header>
                    <Filter handleFilter={handleFilter} />
                </Card.Header>
                <WorksTable data={searchResult.length ? searchResult : works} />
            </Card>
        </>
    );
}

export default Works;
