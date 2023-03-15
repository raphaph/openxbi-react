import styled from "styled-components";

export const CookiesContainer = styled.div`
    position: fixed;
    bottom: 0;
    margin: 20px;
    z-index: 3;

    div {
        width: 400px;
        height: auto;
        bottom: 0;
        color: black;
        background: white;
        padding: 1rem;
        border-radius: 6px;
        box-shadow: 0 0 2px 1px;
    }

    p {
        margin: .5rem 0;
    }

    li {
        margin-bottom: 2rem;
    }

    button {
        cursor: pointer;
        position: absolute;
        border: 0;
        margin-top: 1rem;
        background: black;
        color: white;
        padding: .5rem;
        bottom: 15px;
        right: 15px;
        border-radius: 3px;
    }
`