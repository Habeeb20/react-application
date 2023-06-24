import { useState } from 'react';
import { modal, Button, Modal } from 'react-bootstrap';

function Update() {
    const [isShow, invokeModel] = useState(false);

    const initModel = () => {
        return invokeModel(isShow);
    }

    return(
        <>
        <Button variant='success' onClick={initModel}>
            Add item
        </Button>

        <Modal show= {isShow}>
            <Modal.Header closeButton onClick={initModel}>

                <Modal.Title>Update post</Modal.Title>

            </Modal.Header>

            <Modal.Body>

                This is my react modal
            </Modal.Body>


            <Modal.Footer>
                <Button variant='danger' onClick={initModel}>
                    close

                </Button>

                <Button variant='danger' onClick={initModel}>
                    update

                </Button>

            </Modal.Footer>

        </Modal>
        </>

    )
}

export default Update