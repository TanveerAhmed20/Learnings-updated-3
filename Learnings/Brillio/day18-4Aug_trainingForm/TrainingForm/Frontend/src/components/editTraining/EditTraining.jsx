import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { editTraining } from "../server";

const EditTraining = ({trainingData}) => {
    const [training, setTraining] = useState({
        id: trainingData.trainingId,
        trainingId: trainingData.trainingId,
        trainerId: trainingData.trainerId,
        traineeId: trainingData.traineeId, 
        trainingStartDate: trainingData.trainingStartDate,
        trainingEndDate: trainingData.trainingEndDate
    });
    const handleChange = (e) => {
        setTraining({...training, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate();
    const editTrainingHandler = (e) => {
        e.preventDefault();
        console.log(training)
        editTraining(training.id, training).then(res => {alert("Edited training", JSON.stringify(training)); navigate(`/Trainings/${training.id}`)});
    }
    return (
        <Form onSubmit={editTrainingHandler}>
            <FormGroup>
                <Label>Training Id</Label>
                <Input type="text" value={training.trainingId} disabled/>
                <Label>Trainer Id</Label>
                <Input type="text" value={training.trainerId} name="trainerId" onChange={handleChange}/>
                <Label>Trainee Id</Label>
                <Input type="text" value={training.traineeId} name="traineeId" onChange={handleChange}/>
                <Label>Training start date</Label>
                <Input type="date" value={training.trainingStartDate} name="trainingStartDate" onChange={handleChange}/>
                <Label>Training end date</Label>
                <Input type="date" value={training.trainingEndDate} name="trainingEndDate" onChange={handleChange}/>
            </FormGroup>
            <Button>Edit Training</Button>
        </Form>
    )
}

export default EditTraining;