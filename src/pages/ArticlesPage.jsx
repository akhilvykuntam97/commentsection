import React from "react";
// import { useState, useEffect } from "react";
import ArticleList from "../components/articlesList/ArticleList";
import { articleData } from '../components/articlesList/articlesData'
import { Center, Link, Button, Box, Heading } from '@chakra-ui/react'



function ArticlesPage() {
    // const [message, setMessage] = useState("");
    // const [articleData,setArticleData] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:5000/articledata")
    //         .then((res) => res.json())
    //         .then((data) =>{
    //              setArticleData(data.articleData)
    //              setMessage(data.message)
    //             });
    // }, []);

    return (
        <Box bgColor={'gray.100'} p='30px' >
            {/* <Heading textAlign='center' pb='16px' as='h1'>{message}</Heading> */}
            <ArticleList articleData={articleData} />
            <Center pt='16px'>
                <Link href="/">
                    <Button colorScheme='blue'> Back to Home</Button>
                </Link>
            </Center>

        </Box>
    );
}

export default ArticlesPage;