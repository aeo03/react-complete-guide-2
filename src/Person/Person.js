import React from 'react';
import styled from 'styled-components';

// import './Person.css'

const StyledDiv = styled.div`
    width: 60%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    margin: 16px auto;
    padding: 16px;
    text-align: center;

    @media( min-width: 500px ) {
        width: 450px;
    }

`;

const person = (props) => {

    // const personStyle = {
    //     '@media(min-width: 500px)' :  {
    //         width: '450px'
    //     }
    // }

    return (
        // <div className="Person" style={personStyle}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
        // </div>
    )};

export default person;
