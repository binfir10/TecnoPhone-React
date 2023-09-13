import { styled } from "styled-components";
import { fade, slideFromBottom } from "../../styles/animations";

export const NotFoundWrapper = styled.div`
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
    animation: ${fade} 1s ease-in, ${slideFromBottom} 1.3s ease-in-out;
`;

export const NotFoundDiv = styled(NotFoundWrapper)`
    height: auto;
    gap: 0;
    img {
    width: 200px;
    padding: 30px 0;
        @media screen and (max-width: 500px) {
            width: 150px;
  }
    }
    h1 {
        width: 100%;
        background: linear-gradient(to top, #E46868, #F73434);
          -webkit-background-clip: text;
  color: transparent;

    }

    p {
        font-size: 1.2em;
        color: white;
        @media (max-width: 768px) {
            font-size: 1em;
        }
    }



`;
