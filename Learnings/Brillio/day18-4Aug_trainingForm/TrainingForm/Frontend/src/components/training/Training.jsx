import { useNavigate } from "react-router-dom";
import { ButtonGroup, Modal, ModalBody, ModalHeader } from "reactstrap";
import EditTraining from "../editTraining/EditTraining";
import { deleteTraining } from "../server";

const Training = ({ training, details, editModalHandler }) => {
    const { trainingId,
        trainerId,
        traineeId, trainingStartDate,
        trainingEndDate } = training;
    const navigate = useNavigate();
    const deleteHandler = () => {
        deleteTraining(trainingId).then(res => {alert("Deleted training with id:", trainingId); window.location="/"});
    }
    return (
        <>
            <tr>
                <td>{trainingId}</td>
                <td>{trainerId}</td>
                <td>{traineeId}</td>
                <td>{(trainingStartDate).toString().split("T")[0]}</td>
                <td>{new Date(trainingEndDate).toDateString()}</td>
                {!details && <td><button className="btn btn-outline-info" onClick={() => navigate(`/ViewTraining/${training.trainingId}`)}>Details</button></td>}
                {details && trainingId &&
                    <td>
                        <ButtonGroup>
                            <button className="btn btn-outline-success" onClick={() => editModalHandler()}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={deleteHandler}>Delete</button>
                        </ButtonGroup>
                    </td>
                }
            </tr>
        </>
    )
}

export default Training;