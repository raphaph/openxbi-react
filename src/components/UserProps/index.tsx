import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { LeftSideProfileAvatar, ProfileContainer } from './styles';
import { NavLink } from 'react-router-dom';
import { Plus } from 'phosphor-react';

export function UserProps() {
    const { themeValue, user } =
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
            </LeftSideProfileAvatar>
            <nav>
                <NavLink to={"/profile"}>
                    My Components</NavLink>
                <NavLink to={"/create-component"}>
                    + Create
                </NavLink>
            </nav>
        </ProfileContainer>
    )
}