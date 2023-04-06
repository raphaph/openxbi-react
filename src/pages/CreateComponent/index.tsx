import { UserProps } from '../../components/UserProps';
import { CodeArea } from '../../components/CodeArea';
import { CreateContainer } from './styles';

export function CreateComponent() {
    document.title = 'OpenXBI | Create Component'

    return (
        <>
            <UserProps />
            <CreateContainer>
                <h2>Create your component</h2>
                <CodeArea />
            </CreateContainer>
        </>


    )
}