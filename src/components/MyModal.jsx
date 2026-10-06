import { Modal } from '@heroui/react'
import React from 'react'

export const MyModal = ({isOpen, setIsOpen, selectedFood}) => {
    console.log(selectedFood)
    return (
        <div>
            <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-90">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>{selectedFood.title}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={'images/'+selectedFood.img} alt={selectedFood.title} />
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </div>
    )
}

