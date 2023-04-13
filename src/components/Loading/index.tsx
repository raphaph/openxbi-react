import React from 'react';
import styled from 'styled-components';


const Spinner = styled.span`
    position: absolute;
    display: flex;
    width: 55px;
    height: 55px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #FF8C00;
    animation: SpinnerAnimation .6s linear infinite;

    @keyframes SpinnerAnimation {
    0% {
        transform: rotate(0deg);
        
    }
    100% {
        transform: rotate(360deg);
    }
    }
`

const LoadingWrapper = styled.span`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.3);
    z-index: 3;
    bottom: 0;
`

interface Props {
    isLoading: boolean;
}

const Loading: React.FC<Props> = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <LoadingWrapper>
            <Spinner />
        </LoadingWrapper>
    );
};

export default Loading;