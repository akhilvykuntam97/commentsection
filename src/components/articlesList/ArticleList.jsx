import React from "react";
import Article from "../article/Article";


import {  SimpleGrid } from "@chakra-ui/react";


const ArticleList = (props) => {
    
    const {
        articleData
    }= props
    return (
        <SimpleGrid
        alignSelf={'center'}
        columns={[1,3]} 
        spacing={4}
        >
            {articleData.map((info) => (
                <Article
                article={info}
                key={info.title}
                />
            ))}
        </SimpleGrid>
    );
};

export default ArticleList;