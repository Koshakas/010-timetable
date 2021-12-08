import { Button, Card } from "react-bootstrap";
import AddWork from "./AddWork";
import React, { useEffect, useState, useMemo } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services";

export const WorkContext = React.createContext();

function Works(props) {
    const [workId, setWorkId] = useState("");
    const [addWork, setAddWork] = useState(false);
    const [works, setWorks] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const value = useMemo(
        () => ({
            workId,
            setWorkId
        }),
        [workId]
    );

    function addWorkHandler() {
        setAddWork(true);
    }

    function closeWorkHandler() {
        setAddWork(false);
    }

    function onUpdateWorkHandler(id, data) {
        services.updateWork(id, data);
        setWorkId("");
    }

    const handleAddWork = data => {
        services.addWork(data);
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

    console.log(workId);
    return (
        <>
            {(addWork || workId) && <AddWork onUpdate={onUpdateWorkHandler} setWorks={handleAddWork} updateId={workId} />}
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
                <Card.Body>
                    <WorkContext.Provider value={value}>
                        <WorksTable data={searchResult.length ? searchResult : works} />
                    </WorkContext.Provider>
                </Card.Body>
            </Card>
        </>
    );
}

export default Works;
