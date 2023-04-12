import { useEffect, useState, useContext } from "react";
import { FooterMyComponent, MyComponentsArea, MyComponentsContainer, NoComponent } from "./styles";
import axios from 'axios'
import { AppContext } from "../../../context/AppContext";
import { PreviewComponent } from "../PreviewComponent";
import { Plus, Rocket, Trash } from "phosphor-react";
import { NavLink, useNavigate } from 'react-router-dom';
import { ConfirmDeleteComponent } from "../ConfirmDeleteComponent";


export function MyComponents() {
    const { themeValue, user, setCode, setComponentName, setCreateOrEdit, setShowModal, showModal, languageSelect } = useContext(AppContext)
    const apiKey = import.meta.env.VITE_AUTH_KEY
    const [userComponents, setUserComponents] = useState([])
    const navigate = useNavigate();
    const [deleteComponentName, setDeleteComponentName] = useState('')

    const blank_default = `<div class='container'>
    <p style="color: gray">Hello World</p>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
* {
    font-family: 'Inter', sans-serif;
} 
</style>`

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
            <h2>{languageSelect === 'pt' ? 'Meus Componentes' : 'My Components'}</h2>
            <NoComponent>
                {userComponents.length === 0 ? <h4>{languageSelect === 'pt' ? 'começe criando um componente, ele irá aparecer aqui!' : 'start by creating a component, it will appear here!'}</h4> : null}
                {userComponents.length === 0 ? <NavLink to={"/create-component"} onClick={() => { setCreateOrEdit('create'); setCode(blank_default) }}>
                    <Plus size={20} weight='bold' />Create
                </NavLink> : null}
            </NoComponent>
            <MyComponentsContainer>

                {userComponents.map((component: any) => {
                    const htmlString = component.conteudo.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace('script', '')
                    const encoder = new TextEncoder();
                    const encodedBytes = encoder.encode(htmlString);
                    const encodedHtml = btoa(String.fromCharCode(...new Uint8Array(encodedBytes)));
                    const decodedHtml = decodeURIComponent(escape(atob(encodedHtml)));
                    const dataUrl = `data:text/html;base64,${btoa(decodedHtml)}`;

                    return (
                        <div id="1" key={component.nome}>
                            <h3>{component.nome.replace(".html", "")}</h3>
                            <PreviewComponent code={dataUrl} />
                            {/* <PreviewComponent code={component.conteudo} /> */}
                            <FooterMyComponent>
                                <button onClick={() => alert('Send to community is coming soon!')}>{languageSelect === 'pt' ? <Rocket size={19} /> : <Rocket size={19} />}</button>
                                <button onClick={() => editMyComponent(component.nome, component.conteudo)}>{languageSelect === 'pt' ? 'Editar' : 'Edit'}</button>
                                <button onClick={() => { setShowModal(true); setDeleteComponentName(component.nome) }}><Trash size={19} /></button>
                            </FooterMyComponent>
                        </div>
                    )
                })}
            </MyComponentsContainer>
            {showModal === true ? <ConfirmDeleteComponent handleDelete={() => { deleteMyComponent(deleteComponentName); setShowModal(false) }} /> : null}
        </MyComponentsArea>)
}