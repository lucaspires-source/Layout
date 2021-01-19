import React from "react";
import "./styles.css";
import { Container, Title, Subtitle } from "./styles";
import Carrousel from 'react-elastic-carousel'
import BlogCard from '../BlogCard/BlogCard'
import blog1 from '../../assets/images/blog_image_1.svg'
import blog2 from '../../assets/images/bloco_image_2.svg'
import blog3 from '../../assets/images/bloco_image_3.svg'
import blog4 from '../../assets/images/bloco_image_4.svg'
const ForthElement = () => {
  const breakpoints = [
    {width:750, itemsToShow:1},
    {width:1500, itemsToShow:3},
  ]
  return (
    <div className="forth-container">
      <Container>
        <Title>Read our Blog</Title>
        <Subtitle>
          Far far away,behind the world mountains,far from the countries Vakalia
          and consonantia, there live the blind texts.
        </Subtitle>
      </Container>
        <Carrousel breakPoints={breakpoints} classname="carrousel">
          <BlogCard imageurl={blog1} user="Lucas Pires" title="Quick start guide to nuts and seeds"/>
          <BlogCard imageurl={blog2} user="Lucas Pires" title="Nutrition:Tips for Improving your Health"/>
          <BlogCard imageurl={blog3} user="Lucas Pires" title="The top 10 Benefits of Eating Healthy"/>
          <BlogCard imageurl={blog4} user="Lucas Pires" title="What Makes us Eat Bad Things"/>
        </Carrousel >
    </div>
  );
};

export default ForthElement;
