import { useContext } from "react"
import { AppContext } from "../../../context/AppContext"
import { ModalContainerDeletion, ModalDeleteContent } from "./styles"
import { Check, Warning, X } from "phosphor-react"


export function ConfirmDeleteComponent({ handleDelete }: any) {

    const { setShowModal, themeValue } = useContext(AppContext)

    return (
        <ModalContainerDeletion>
            <ModalDeleteContent variant={themeValue}>
                <p>Are you sure?</p>
                <div>
                    <Warning color="red" weight="fill" size={19} />
                    <small>This operation is irreversible  </small>
                    <Warning color="red" weight="fill" size={19} />
                </div>

                <div>
                    <button onClick={handleDelete} ><Check size={24} /></button>
                    <button onClick={() => setShowModal(false)}><X size={24} /></button>
                </div>

            </ModalDeleteContent>
        </ModalContainerDeletion>
    )
}