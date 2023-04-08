import { useEffect, useState, useContext } from "react";
import { FooterMyComponent, MyComponentsArea, MyComponentsContainer } from "./styles";
import axios from 'axios'
import { AppContext } from "../../../context/AppContext";
import { PreviewComponent } from "../PreviewComponent";
import { Trash } from "phosphor-react";
import { useNavigate } from 'react-router-dom';
import { ConfirmDeleteComponent } from "../ConfirmDeleteComponent";


export function MyComponents() {
    const { themeValue, user, setCode, setComponentName, setCreateOrEdit, setShowModal, showModal } = useContext(AppContext)
    const apiKey = import.meta.env.VITE_AUTH_KEY
    const [userComponents, setUserComponents] = useState([])
    const navigate = useNavigate();
    const [deleteComponentName, setDeleteComponentName] = useState('')

    useEffect(() => {
        axios.get(`https://uxbi.com.br/api/get-all-components/${user.user.uid.substring(0, 22)}`, {
            headers: {
                "api-key": `${apiKey}`
            }
        })
            .then(response => {
                setUserComponents(response.data)
            })

        setComponentName('')
    }, [deleteMyComponent])

    function deleteMyComponent(name: string) {
        axios.delete(`https://uxbi.com.br/api/delete-component/${user.user.uid.substring(0, 22)}/${name.replace(".html", "")}`, {
            headers: {
                "api-key": `${apiKey}`
            }
        })
            .then(response => console.log(response))
    }

    function editMyComponent(name: string, content: string) {
        setCode(content)
        setComponentName(name.replace(".html", ""))
        setCreateOrEdit('edit')
        navigate("/create-component")
    }

    return (
        <MyComponentsArea variant={themeValue} >
            <h2>My Components</h2>
            <MyComponentsContainer>
                {userComponents.length === 0 ? <h4>start by creating a component, it will appear here!</h4> : null}
                {userComponents.map((component: any) => {
                    const htmlString = component.conteudo
                    const encodedHtml = btoa(htmlString)
                    const dataUrl = `data:text/html;base64,${encodedHtml}`;

                    return (
                        <div id="1">
                            <h3>{component.nome.replace(".html", "")}</h3>
                            <PreviewComponent code={dataUrl} />
                            {/* <PreviewComponent code={component.conteudo} /> */}
                            <FooterMyComponent>
                                <button onClick={() => editMyComponent(component.nome, component.conteudo)}>Edit</button>
                                <button onClick={() => { setShowModal(true); setDeleteComponentName(component.nome) }}><Trash size={19} /></button>
                            </FooterMyComponent>
                        </div>
                    )
                })}
            </MyComponentsContainer>
            {showModal === true ? <ConfirmDeleteComponent handleDelete={() => { deleteMyComponent(deleteComponentName); setShowModal(false) }} /> : null}
        </MyComponentsArea>)
}