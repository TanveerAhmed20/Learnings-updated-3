import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getTrainings } from "../server";
import Training from "../training/Training";

const Trainings = (props) => {
    const [trainings, setTrainings] = useState([]);
    useEffect(() => {
        getTrainings().then(res => {
            console.log("Response", res.data)
            setTrainings(res.data);
        })
    }, []);
    return (
        <Table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>trainingId</th>
                    <th>trainerId</th>
                    <th>traineeId</th>
                    <th>trainingStartDate</th>
                    <th>trainingEndDate</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>

                {trainings.map(training => {
                    return <Training training={training} key={training.trainingId} />
                })}
            </tbody>
        </Table>
    );
}

export default Trainings;