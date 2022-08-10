import { useEffect, useState } from "react";
import Training from "../training/Training";
import { useParams } from "react-router-dom";
import React from "react";
import { getTrainings } from "../server";
import { Modal, ModalBody, ModalHeader, Table } from "reactstrap";
import EditTraining from "../editTraining/EditTraining";

const ViewTraining = (props) => {
  const [training, setTraining] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getTrainings(id).then((res) => {
      setTraining(res.data[0]);
    }).catch(err => console.log(err));
  }, []);

  const [toggleValue, setToggleValue] = useState({
    modal: false
  })

  const toggleEditTrainingModal = () => {
    setToggleValue({modal: !toggleValue.modal})
  }

  return (
    <>
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
          <Training training={training} details={true} editModalHandler={toggleEditTrainingModal}/>
        </tbody>
      </Table>
      <Modal isOpen={toggleValue.modal} toggle={toggleEditTrainingModal}>
        <ModalHeader>Edit Training Form</ModalHeader>
        <ModalBody><EditTraining trainingData={training}/></ModalBody>
      </Modal>
    </>
  );
};

export default ViewTraining;