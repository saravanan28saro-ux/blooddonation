import styled from "styled-components";
import bg from "../image/bg1.png";


export const Container = styled.div`
    
    margin-top: 0px; 
    background-image: url(${bg});
    background-size: cover;
    height: 100vh;
  `

export const Button = styled.button`
    padding: 10px 20px; 
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;  `

export const Header1 = styled.header`
    background-color: rgba(255, 255, 255,0.7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
      `
export const Card = styled.ul`
padding: 20px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`
export const Li = styled.li`
    margin-bottom: 10px;
    font-size: 18px; 
    margin: 20px;
    background-color: rgba(232, 108, 108, 0.7);
    
    border-radius: 8px;
    list-style-type: none;  
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(97, 181, 74, 0.7);
        box-shadow: 0 8px 8px ;
        transform: translateY(-10px);
    }

    `