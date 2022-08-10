import React from "react";
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
import CreatePlayer from "../create-player/CreatePlayer";

export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCreatePlayerModal = this.toggleCreatePlayerModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal : false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleCreatePlayerModal(){
    this.setState({ modal:true});
    this.toggle();
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Cricket Application</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/players/">Players</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick = {this.toggleCreatePlayerModal}>Add Player</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <Modal isOpen = {this.state.modal} toggle = {this.toggleCreatePlayerModal}>
              <ModalHeader> Add Player Modal</ModalHeader>
              <ModalBody><CreatePlayer/></ModalBody>
          </Modal>
        </Navbar>

      </div>
    );
  }
}
