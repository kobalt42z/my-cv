import styled from 'styled-components'


export const MainContainer = styled.div`
    margin-top: 2%;
    padding-left: 3%;
    padding-right: 3%;
    filter: drop-shadow(20px 10px 4px gray);
`

export const Hr = styled.hr<{$full?:boolean}>`
width:${p=>p.$full?  100 : 80 }%;
border: 1px solid var(--primary-color);
`
export const Title = styled.h2<{ 
    $position?: "center" | "start" | "end",
    $size?:number
    $m?:number

    }>`

text-transform: uppercase;
font-size: ${p=>p.$size?p.$size:35}px;
font-weight: 400;
text-align: ${p => p.$position};
margin:${p=>p.$m} ;
`

export const A = styled.a`
color: var(--primary-color);
padding: 5px;
text-decoration: none;
font-weight: 600;
font-size: 20px;
`

export const Ul = styled.ul`
margin:0;
padding: 0;

list-style: none;
`
export const Li = styled.li`
padding: 0;
padding-top: 10px;
padding-bottom: 10px;
`

export const ProgressBarContainer = styled.div`
justify-self: end;
  width: 200px;
  background-color: #ccc;
  height: 8px;
  border :3px solid var(--primary-color); 
`;

export const ProgressBar = styled.div<{ $val: number }>`
  height: 100%;
  width: ${p => `${p.$val}%`};
  background-color: var(--primary-color);
`;
export const Span = styled.span`
    margin-left: 10px;
    margin-right: 10px;
`