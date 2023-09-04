import styled from 'styled-components'
import { Li, Ul } from '../main/main.style'

export const Main = styled.main`
overflow: hidden;
display: flex;
`
export const LeftSection = styled.section`
background-color: var(--secondary-color);
width: 25%;
padding-top:100px ;
display: flex;
flex-direction: column; 
justify-content: space-evenly;

`
export const RightSection = styled.section`
background-color: var(--white-color);
width: 75%;
padding-right: 20px;

`
export const ContactItem = styled(Li)`
display: flex;
flex-direction: column;
align-items: center;

`

export const ContactList = styled(Ul)`
`
export const SkillsList = styled(Ul)`
padding: 20px;

`
export const Skill = styled(Li)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Statment = styled.div`
display: flex;
`
export const StatmentContent = styled.div`
width: 85%;
`
export const StatmentLeft = styled.div`
width: 15%;

`
export const BigIcon = styled.div`
margin: auto;
margin-top: 35px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
`
export const BigIconDown = styled.div<{ $h: number }>`
width: 0px;
border: 2px solid var(--primary-color);
margin: auto;
height: 100%;

`
export const StatmentParagraph = styled.div`
padding-left: 30px;
padding-right: 30px;
margin-top: 50px;
margin-bottom: 50px;
    font-size: 22px;
    line-height: 30px;
`

export const IntersetsLine = styled.div`
display: flex; 
justify-content: space-evenly;
align-items: center;
`
export const IntersetsList = styled.div`
padding: 40px;
text-transform: capitalize;
font-size: 18px;
`