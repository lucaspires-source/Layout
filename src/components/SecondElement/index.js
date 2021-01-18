import React from "react";
import { Container, Title, Subtitle,CardContainer } from "./styles";
import "./styles.css";
import recipe1 from '../../assets/images/comida_1.svg'
import recipe2 from '../../assets/images/comida_2.svg'
import recipe3 from '../../assets/images/comida_3.svg'
import recipe4 from '../../assets/images/comida_4.svg'
import Card from '../Card/Card'
const SecondElement = () => {
  return (
    <div className="second-container">
      <Container>
        <Title>Our Best Recipes</Title>
        <Subtitle>
          Far far away,behind the world mountains,far from the countries Vakalia
          and consonantia, there live the blind texts.
        </Subtitle> 
      </Container>
      <CardContainer>
        <Card 
            title='Broccoli Salad with Bacon'
            imageUrl={recipe1}
        
        />
        <Card 
            title='Classic Beef Burgers'
            imageUrl={recipe2}
        
        />
        <Card 
            title='Classic Potato Salad'
            imageUrl={recipe3}
        
        />
          <Card 
            title='Cherry Gobbler on the Grill'
            imageUrl={recipe4}
        
        />
      </CardContainer>
    </div>
  );
};

export default SecondElement;
