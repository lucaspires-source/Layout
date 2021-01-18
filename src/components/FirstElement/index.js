import React from 'react'
import './styles.css'
import {Container,Title,Input,Button,Search} from './styles'
const FirstElement = () => {
    return (
        <div className="first-container">
            <Container>
            <Title>Ready for Trying a new recipe?</Title>
            <div>
            <Input variant="outlined" placeholder="Search Healty Recipes"/>
            <Button><Search/></Button>
            </div>
            </Container>
        </div>
    )
}

export default FirstElement
