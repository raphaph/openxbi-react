import { Heart } from 'phosphor-react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { LeftSideProfileAvatar, ProfileContainer, RightSideProfileFavorites } from './styles';

export function Profile() {
    const { themeValue, user } =
        useContext(AppContext)

    const dataString: any = user?.metadata.creationTime?.toString()
    const data = new Date(dataString);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;

    return (
        <ProfileContainer variant={themeValue}>
            <LeftSideProfileAvatar>
                {user?.photoURL && <img src={user.photoURL} width={170} />}
                <h3>{user?.displayName}</h3>
                <div>
                    <p>{user?.email}</p>
                </div>
                <div>
                    <strong>Membro desde </strong>
                    <p>{dataFormatada}</p>
                </div>

            </LeftSideProfileAvatar>
            <RightSideProfileFavorites variant={themeValue}>
                <div>
                    <h2>Em breve</h2>
                    <p>Quando o volume de componentes crescer, iremos disponibilizar esta área para favoritos.</p>
                    <Heart weight='fill' color='red' size={60} />
                </div>
            </RightSideProfileFavorites>
        </ProfileContainer>
    )
}