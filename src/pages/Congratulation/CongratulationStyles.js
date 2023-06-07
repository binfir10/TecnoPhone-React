import { styled } from "styled-components";

export const CongratsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 70vh;
    gap: 30px;
    z-index: 5;
    background: none;
`;

export const CongratsDiv = styled(CongratsWrapper)`
    height: auto;
    gap: 0;
    img {
    width: 200px;
    padding: 30px 0;
        @media screen and (max-width: 450px) {
            width: 150px;
  }
    }
    h1 {
        width: 100%;

    }


    p {
        font-size: 1.2em;
        color: white;
    }



`;

