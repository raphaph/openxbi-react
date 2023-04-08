import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { LeftSideProfileAvatar, ProfileContainer } from './styles';
import { NavLink } from 'react-router-dom';
import { Code, Cube } from 'phosphor-react';

export function UserProps() {
    const { themeValue, user, setCreateOrEdit, setCode } =
        useContext(AppContext)

    return (
        <ProfileContainer variant={themeValue}>
            <LeftSideProfileAvatar variant={themeValue}>
                {user.user.photoURL && <img src={user.user.photoURL} />}
                <div>
                    <h2>{user.user?.displayName}</h2>
                    <div>
                        <p>{user.user?.email}</p>
                        <p>{user._tokenResponse?.screenName || user.user.email.split('@', 1)}</p>
                    </div>
                </div>

                <nav>
                    <NavLink to={"/profile"}>
                        <span>My Components</span><Cube size={20} weight='bold' /></NavLink>
                    <NavLink to={"/create-component"} onClick={() => { setCreateOrEdit('create'); setCode(`<div class='container'></div>`) }}>
                        <span>Create </span><Code size={20} weight='bold' />
                    </NavLink>
                </nav>
            </LeftSideProfileAvatar>

        </ProfileContainer>
    )
}