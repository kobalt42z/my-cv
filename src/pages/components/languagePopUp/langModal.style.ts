import { styled } from "styled-components";

export const DialogBox = styled.dialog`
border-radius: 5px;

background-color: var(--white-color);


border:none;
`
export const Message =styled.div`
width: 500px; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
` 
export const Text = styled.p`
font-size: 24px; 
text-transform: capitalize;

`

export const LangueBtn = styled.button`
  border: none;
  background: none;
`
export const CloseBtn = styled(LangueBtn)`
position: relative;
left: 230px;
`