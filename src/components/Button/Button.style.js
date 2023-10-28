import styled from "styled-components";

export const Button = styled.button`
color: ${(props) => props.variant == 'outline' ? "green" : "white"};
background-color: ${(props) => props.variant == 'outline' ? "white" : "green"};
font-size: 20px;
padding: 10px;
`