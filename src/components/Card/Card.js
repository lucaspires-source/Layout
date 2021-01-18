import React from 'react'
import {CardContainer,CardTitle,ImageContainer,CardButton,SideContainer} from './styles'
const Card = ({title,imageUrl}) => {
    return (
        <CardContainer>
            <ImageContainer><img src={imageUrl} alt=''/></ImageContainer>
            <SideContainer>
            <CardTitle>{title}</CardTitle>
            <CardButton>See Recipe</CardButton> 
            </SideContainer>
        </CardContainer>
    )
}

export default Card
