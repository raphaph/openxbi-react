import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { UserProps } from '../../components/Profile&Create/UserProps';
import { MyComponents } from '../../components/Profile&Create/MyComponents';
import { useNavigate } from 'react-router-dom';

export function Profile() {
    document.title = 'OpenXBI | My Profile'
    const { user } =
        useContext(AppContext)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)

        if (user === null || user === '') {
            navigate('/sign-in');
        }
    }, [])

    return (
        <div>
            <UserProps />
            <MyComponents />
        </div>
    )
}