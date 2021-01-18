import React from 'react'
import './styles.css'
import {Container,Title,Input,Button} from './styles'
const FifthElement = () => {
    return (
        <div className="fifth-container">
            <Container>
            <Title>Join our membership to get special offer</Title>
            <div>
            <Input variant="outlined" placeholder="Enter your email adresss"/> 
            <Button>Join</Button>
            </div>
            </Container>
        </div>
    )
}

export default FifthElement
