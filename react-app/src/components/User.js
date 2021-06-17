import React from 'react' 
import Styled from 'styled-components'


const StyledUser = Styled.div`
    border: 2px solid black;
    margin: 2% auto 0 auto;
    width: 40%;
`


const User = (props) => {

    const { user } = props


    return (
        <StyledUser>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </StyledUser>
    )
}

export default User