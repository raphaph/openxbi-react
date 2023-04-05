import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { UserProps } from '../../components/UserProps';
import { MyComponents } from '../../components/MyComponents';

export function Profile() {
    document.title = 'OpenXBI | My Profile'
    const { themeValue, user } =
        useContext(AppContext)

    return (
        <div>
            <UserProps />
            <MyComponents />
        </div>
    )
}