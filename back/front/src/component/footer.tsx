import React, { Component } from 'react';

import { Button, Modal, ModalBody, ModalTitle, ModalFooter } from 'react-bootstrap';

interface footerState {
    showNADModal: boolean
}

export class Footer extends Component<{}, footerState> {
    constructor(props : any) {
        super(props)

        this.state = {
            showNADModal: false
        };

        this.changeNADState = this.changeNADState.bind(this);
    };

    changeNADState() {
        this.setState({
            showNADModal: !this.state.showNADModal
        });
    }

    render() {
        return (
            <footer id='footer-outer'>
                <div id='footer-inner'>
                    <div>
                        <span>Royal Irish Regiment</span>
                        <br/>
                        <span id='right' onClick={this.changeNADState}>Non-Affiliation Disclaimer</span>

                        <Modal show={this.state.showNADModal} onHide={this.changeNADState}>
                            <Modal.Header closeButton>
                                <ModalTitle>Non-Affiliation Disclaimer</ModalTitle>
                            </Modal.Header>
                            <ModalBody>
                                We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Bohemia Interactive a.s. Bohemia Interactive, the British Army, the Royal Air Force, or any of their subsidiaries or affiliates.<br/><br/>
                                The official Royal Irish Regiment website can be found <a href='https://www.army.mod.uk/who-we-are/corps-regiments-and-units/infantry/royal-irish-regiment/'>here</a>.<br/><br/>
                                The names 'ArmA', 'Royal Irish Regiment', 'Royal Air Force' as well as related names, marks, emblems and images are registered trademarks of their respective owners.</ModalBody>
                            <ModalFooter>
                                <Button variant='secondary' onClick={this.changeNADState}>
                                    Gotcha!
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </footer>
        )
    }
  }