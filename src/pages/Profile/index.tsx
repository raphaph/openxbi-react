import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { UserProps } from '../../components/Profile&Create/UserProps';
import { MyComponents } from '../../components/Profile&Create/MyComponents';

export function Profile() {
    document.title = 'OpenXBI | My Profile'
    const { themeValue, user } =
        useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <UserProps />
            <MyComponents />
        </div>
    )
}