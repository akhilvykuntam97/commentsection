import React from "react";
import { Link, Flex, Button } from '@chakra-ui/react'
// import { Link } from "react-router-dom";

function Home() {

  return (

    <Flex direction='column' alignItems={'center'} w='100%' bgColor={'gray.100'} p='30px' >
      <Link href="/articles">
        <Button colorScheme='blue'> Go to Articles</Button>
      </Link>
    </Flex>

  );
}

export default Home;
