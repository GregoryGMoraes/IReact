import styled from "styled-components";

const Button = styled.button`
color: var(--white);
border: 1px solid #b81414;
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;
background-color: #b81414;
background: linear-gradient(to right, #870000, #190a05);

&:hover,
&:focus {
opacity: .5;
}
`;

export default Button