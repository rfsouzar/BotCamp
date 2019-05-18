import styled from 'styled-components';


const BtnBotcamp = styled.button.attrs({
    children: props => props.content
})`
        color:white;
        font-size: 20px;
        width: 280px;
        height: 50px;
        border-radius: 25px;
        background-color: #ee3e25;
        text-transform: uppercase;
        position: relative;
        margin: 15em auto;
        display: block;
        text-align: center;
`;


export default BtnBotcamp;

