import React, { Component, Fragment } from 'react';
import ModalTrigger from "./ModalTrigger"
import ModalContent from "./ModalContent"

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }



    onOpen = () => {
        this.setState({ isOpen: true });
    };

    onClose = () => {
        this.setState({ isOpen: false });
      };

    render() {
        const { isOpen } = this.state;
        const { triggerText } = this.props;

        return (
            <Fragment>
                <ModalTrigger
                    onOpen={this.onOpen}
                    text={triggerText}
                    
                />
                {isOpen &&
                    <ModalContent
                    onClose={this.onClose}
                    onAdSubmit={this.props.onAdSubmit} 
                    admins={this.props.admins}
                    

                  />
                }


            </Fragment>

            
        );
    }
}

export default Modal;