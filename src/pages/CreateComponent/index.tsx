import { UserProps } from '../../components/Profile&Create/UserProps';
import { CodeArea } from '../../components/CodeArea';
import { CreateContainer } from './styles';
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext';
import { ArrowRight, CaretRight } from 'phosphor-react';

export function CreateComponent() {
    document.title = 'OpenXBI | Create Component'
    const { createOrEdit, componentName, themeValue } =
        useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 320)
    }, [])

    return (
        <>
            <UserProps />
            <CreateContainer variant={themeValue}>
                {createOrEdit === 'create' ? <h2>Creating your component</h2> : <h2>Editing your component <CaretRight size={18} weight='bold' /> <span>{componentName}</span></h2>}
                <CodeArea />
            </CreateContainer>
        </>
    )
}