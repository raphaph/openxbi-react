import { useContext } from "react"
import { AppContext } from "../../../context/AppContext"
import { ModalContainerDeletion, ModalDeleteContent } from "./styles"
import { Check, Warning, X } from "phosphor-react"


export function ConfirmDeleteComponent({ handleDelete }: any) {

    const { setShowModal, themeValue, languageSelect } = useContext(AppContext)

    return (
        <ModalContainerDeletion>
            <ModalDeleteContent variant={themeValue}>
                <p>{languageSelect === 'pt' ? 'Você tem certeza?' : 'Are you sure?'}</p>
                <div>
                    <Warning color="red" weight="fill" size={19} />
                    <small>{languageSelect === 'pt' ? 'Está operação é irreversível' : 'This operation is irreversible'}</small>
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