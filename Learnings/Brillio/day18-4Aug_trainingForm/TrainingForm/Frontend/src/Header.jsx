import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import AddTraining from "../addTraining/AddTraining";

const AppNavbar = () => {
  const [toggleValue, setToggleValue] = useState({
    isOpen: false,
    modal: false
  })
  const toggle = () => {
    setToggleValue({...toggleValue,
      isOpen: !toggleValue.isOpen,
    });
  }
  const toggleCreateTrainingModal = () => {
    setToggleValue({...toggleValue,
      modal: !toggleValue.modal
    })
  }

  return (
    <div>
      <Navbar color="secondary" dark expand="md">
        <NavbarBrand href="/" className="ml-3">Training Database</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" className="ml-3">Training</NavLink>
            </NavItem>
            <NavItem>

            <a onClick={toggleCreateTrainingModal}>Add Training</a>
            </NavItem>

          </Nav>

        <Modal isOpen={toggleValue.modal} toggle={toggleCreateTrainingModal}>
          <ModalHeader>Add Training Form</ModalHeader>
          <ModalBody><AddTraining /></ModalBody>
        </Modal>
      </Navbar>
      
    </div>
  );

}

export default AppNavbar;
