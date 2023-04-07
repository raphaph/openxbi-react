import { UserProps } from '../../components/UserProps';
import { CodeArea } from '../../components/CodeArea';
import { CreateContainer } from './styles';
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

export function CreateComponent() {
    document.title = 'OpenXBI | Create Component'
    const { themeValue, createOrEdit } =
        useContext(AppContext)

    return (
        <>
            <UserProps />
            <CreateContainer>
                {createOrEdit === 'create' ? <h2>Creating your component</h2> : <h2>Editing your component</h2>}
                <CodeArea />
            </CreateContainer>
        </>


    )
}