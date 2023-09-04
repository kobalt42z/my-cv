import styled from 'styled-components'

export const HeaderContainer = styled.header`
background-color:var(--primary-color);
width: 100%;
display: flex;
align-items: center;
color: var(--white-color);
`
export const TitlesConrtainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    text-align: start;
    width: 75%;
    text-transform: capitalize;

`
export const NameTitle = styled.h1`
    font-size: 100px;
    font-weight:200;
    margin-bottom:0;
`
export const FirstName = styled.span`
    font-weight: 500;
    padding-right:20px;
`

export const ProffesionTitle = styled.h2`
align-self: self-start;
font-size:35px;
font-weight:300 ;
margin-top: 0;
`
export const ProfilePicture = styled.img`
border-radius: 50%;
border: white 5px solid;
top: 150px;
position: relative;
width: 180px;


`
export const ImgContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
`

export const Titles = styled.div``
