import style from "styled-components";

export const StyledDiv = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffff;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
      width: 95%;
      margin: 5px;
  }

  `;

export const AlignItemsInCenter = style.div`
display:flex;
justify-content:center;
`;

export const StyledNewDiv = style(AlignItemsInCenter)`
margin-top: 3%;
`;

export const StyledTd = style.td`
box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
border-raduius: 10px;
margin: 2px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
font-size:12px;
`;
export const StyledTr = style.tr`
box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
border-raduius: 10px;
margin: 2px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 16px;
font-size:20px;
`;

export const StyledTbody = style.tbody`
display:flex;
`;

export const StyledButton = style.button`
 display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.1em 0.1em 0;
 border:0.16em solid rgba(255,255,255,0);
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
font-family: 'pokemon-font', monospace;
 font-weight:300;
 color:#FFFFFF;
 text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
 text-align:center;
 transition: all 0.2s;
background-color:#f1bb4e;

  &:hover {
    background-color: #2a75bb;
  }

`;
