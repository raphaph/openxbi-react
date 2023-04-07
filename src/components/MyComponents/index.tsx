import { useEffect, useState, useContext } from "react";
import { FooterMyComponent, MyComponentsContainer } from "./styles";
import axios from 'axios'
import { AppContext } from "../../context/AppContext";
import { PreviewComponent } from "../PreviewComponent";
import { Trash } from "phosphor-react";
import { useNavigate } from 'react-router-dom';

export function MyComponents() {
    const { themeValue, user, setCode, setComponentName, setCreateOrEdit } = useContext(AppContext)
    const apiKey = import.meta.env.VITE_AUTH_KEY
    const [userComponents, setUserComponents] = useState([])
    const navigate = useNavigate();

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
        <MyComponentsContainer>
            {userComponents.length === 0 ? <h4>Começe criando um componente, ele aparecerá aqui!</h4> : null}
            {userComponents.map((component: any) => {
                return (
                    <div>
                        <h3>{component.nome.replace(".html", "")}</h3>
                        <PreviewComponent code={component.conteudo} />
                        <FooterMyComponent>
                            <button onClick={() => editMyComponent(component.nome, component.conteudo)}>Editar</button>
                            <button onClick={() => deleteMyComponent(component.nome)}><Trash size={19} /></button>
                        </FooterMyComponent>
                    </div>

                )
            })}
        </MyComponentsContainer>
    )
}