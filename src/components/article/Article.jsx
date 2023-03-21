
import React from "react";
import { Box, Flex, Heading, Image, Link, Text, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon, ChatIcon } from '@chakra-ui/icons'


const Article = ({ article: { title, body, imgUrl, articleLink } }) => {
    return (
        <Box p='24px'
            bgColor={'white'}
        >
            <Box>
                <Image
                    w='100%'
                    height='300px'
                    src={imgUrl}
                    alt="article"
                />
            </Box>
            <Heading
                as='h5'
                fontSize={['16px', '24px']}
                textAlign={'left'}
                py='10px'
                noOfLines={2}
                maxHeight={'4.5rem'}
            >
                {title}
            </Heading>
            <Text paddingY='10px' fontSize={['14px', '16px']} >
                {body}
            </Text>
            <Flex
                direction={'row'}
            >
                <Link
                    color={'green'}
                    href={articleLink}
                >
                    Read article  <ExternalLinkIcon mx='2px' />
                </Link>
                <Spacer />
                <Link
                    color={'red.800'}
                >
                    Comment <ChatIcon mx='2px' />
                </Link>
            </Flex>

        </Box >
    );
};

export default Article;