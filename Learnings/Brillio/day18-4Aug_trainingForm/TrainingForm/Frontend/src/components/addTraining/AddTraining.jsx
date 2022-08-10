import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createTraining } from "../server";

const AddTraining = () => {
    const [training, setTraining] = useState({
        trainingId: '',
        trainerId: '',
        traineeId: '', 
        trainingStartDate: '',
        trainingEndDate: ''
    });
    const handleChange = (e) => {
        setTraining({...training, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate();
    const addTrainingHandler = (e) => {
        e.preventDefault();
        createTraining(training).then(res => {alert("Added training", training); window.location="/"});
    }
    return (
        <Form onSubmit={addTrainingHandler}>
            <FormGroup>
                <Label>Training Id</Label>
                <Input type="text" value={training.trainingId} name="trainingId" onChange={handleChange}/>
                <Label>Trainer Id</Label>
                <Input type="text" value={training.trainerId} name="trainerId" onChange={handleChange}/>
                <Label>Trainee Id</Label>
                <Input type="text" value={training.traineeId} name="traineeId" onChange={handleChange}/>
                <Label>Training start date</Label>
                <Input type="date" value={training.trainingStartDate} name="trainingStartDate" onChange={handleChange}/>
                <Label>Training end date</Label>
                <Input type="date" value={training.trainingEndDate} name="trainingEndDate" onChange={handleChange}/>
            </FormGroup>
            <Button>Add Training</Button>
        </Form>
    )
}

export default AddTraining;