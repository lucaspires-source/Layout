import React from 'react'
import {BlogCardContainer,ImageContainer,CardTitle,AvatarContainer} from './styles'
import avatar from '../../assets/images/user.jpg'
const BlogCard = ({title,user,imageurl}) => {
    return (
        <BlogCardContainer>
            <ImageContainer>
                <img src={imageurl} alt=""/>
            </ImageContainer>
            <CardTitle>{title}</CardTitle>
            <AvatarContainer><img src={avatar} alt=""/><p>{user}</p></AvatarContainer>
        </BlogCardContainer>

    )
}

export default BlogCard
