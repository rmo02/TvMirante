import { styled } from "styled-components/native";

export const Container = styled.View`
width: 50px;
height: 50px;
border-radius: 50px;
background-color: ${({ theme }) => theme.COLORS.BLUE_700};;
align-items: center;
justify-content: center;
z-index: 2;
margin-top: -100px;
margin-left: 20px;
`;