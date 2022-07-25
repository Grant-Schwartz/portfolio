import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Center, Grid as ChakraGrid, GridItem, Heading, Image, Link, Text, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";

export const Grid: FC = () => {
    return (
        <Flex flexDirection="column" alignItems="center" margin="20px">
        <ChakraGrid
            height={["800px", "800px" ,"400px", "400px"]}
            width={["100%", "100%", "80%", "80%"]}
            marginTop="20px"
            templateRows={{ base: '1fr 1fr 1fr 1fr', sm: 'repeat(16, 1fr)', md: 'repeat(4, 1fr)' }}
            templateColumns='repeat(4, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(130% 130% at 100% 100%, rgba(255, 255, 255, 0) 15%, blue.100 100%)' padding="10px" transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _hover={{ transform: 'scale(0.98)' }}>
                <Text fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em">👋 Hey! I'm Grant. I'm a coder, designer, entrepreneur, and student from <Text as="span" color="blue.500">NYC</Text>.</Text>
            </GridItem>
            <GridItem rowSpan={[8,8,4,4]} colSpan={[2, 2, 1, 1]} transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _hover={{ transform: 'scale(0.98)' }}>
                <Image height="100%" width="100%" objectFit="cover" src="http://localhost:3000/me.jpeg" borderRadius="10px"/>
            </GridItem>
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(120% 120% at 100% 0%, orange.200 0%, rgba(255, 255, 255, 0) 100%)' padding="10px" transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _hover={{ transform: 'scale(0.98)' }}>
                <Text fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em">I founded a company called <Text as="span" textColor="orange.400">Flow Fantasy</Text> and royally f*#cked it up. Learn more about it <Link color="orange.400" _hover={{ textDecoration: 'none', opacity: '0.7' }}>here</Link></Text>
            </GridItem>
            <GridItem data-group display="flex" rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(100% 100% at 0% 100%, purple.200 0%, rgba(255, 255, 255, 0) 100%)' padding="10px" transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _hover={{ transform: 'scale(0.98)' }}>
                <Text  fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em">Learn a bit more about why I use <Text as="span" color="purple.500">the ampersand</Text></Text>
                <ArrowForwardIcon transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _groupHover={{ transform: 'rotate(-45deg)'}} h={6} w={6} alignSelf="end"/>
            </GridItem>
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(120% 120% at 0% 100%, red.200 0%, rgba(255, 255, 255, 0) 100%)' padding="10px" transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _hover={{ transform: 'scale(0.98)' }}>
                <Text fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em">I'm currently a rising freshman at <Text as="span" color="red.500">Washington University in St. Louis.</Text></Text>
            </GridItem>
            <GridItem display="flex" flexDirection="column" justifyContent="space-between" rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(100% 100% at 100% 100%, #48BB78 0%, rgba(255, 255, 255, 0) 100%)' padding="10px" transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _hover={{ transform: 'scale(0.98)' }}>
                <Text fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em" color="green.400">You can watch some of my mediocre movies <Link color="black" _hover={{ textDecoration: 'none', opacity: '0.7' }} href="https://www.youtube.com/watch?v=K42ZGXnWAmc" target="_blank">here</Link></Text>
                {/* <ArrowForwardIcon alignSelf="end" w={6} h={6} transform="rotate(-45deg)"/> */}
            </GridItem>
            <GridItem display="flex" flexDirection="column" justifyContent="space-between" rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(120% 120% at 0% 0%, rgba(168, 181, 197, 0.91411) 0%, rgba(255, 255, 255, 0) 100%)' padding="10px" transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _hover={{ transform: 'scale(0.98)' }}>
                <Text fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em" color="gray.700">Wanna learn more or get in touch?</Text>
                <Box alignSelf="flex-end" display="flex" flexDirection="column">
                    <Link _hover={{ textDecoration: 'none', transform: "translateX(-10px)", opacity: "0.7" }} fontSize="20px" fontWeight="600" letterSpacing="-0.015em" margin="0px">GitHub</Link>
                    <Link _hover={{ textDecoration: 'none', transform: "translateX(-10px)", opacity: "0.7" }} fontSize="20px" fontWeight="600" letterSpacing="-0.015em" margin="0px" marginTop="-5px">Email</Link>
                </Box>
            </GridItem>
            
        </ChakraGrid>
        <Box width={["100%", "100%", "80%", "80%"]} marginTop="20px">
            <Heading  alignSelf="start">Projects</Heading>
        </Box>
        <ChakraGrid
            height={["800px", "800px" ,"400px", "400px"]}
            width={["100%", "100%", "80%", "80%"]}
            marginTop="20px"
            templateRows={{ base: '1fr 1fr 1fr 1fr', sm: 'repeat(16, 1fr)', md: 'repeat(4, 1fr)' }}
            templateColumns='repeat(4, 1fr)'
            gap={4}
        >
            <GridItem data-group as={Link} href="/flow-fantasy" rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(130% 130% at 100% 100%, rgba(255, 255, 255, 0) 15%, #99ccff 100%)' padding="10px" transition="all .2s cubic-bezier(0.8,0.04,0.4,1)">
                <Box transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _groupHover={{ display: 'inline', opacity: 1 }} opacity="0" display="block" position="absolute" zIndex={10}>
                    <Heading transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" fontSize="26px" color="#fff">Flow Fantasy</Heading>
                    <Text marginTop="-5px" padding="0px" fontWeight="600">#entrepreneurship</Text>
                    <Text marginTop="-5px" w={100} fontWeight="600">#coding</Text>
                    <Text marginTop="-5px" w={100} fontWeight="600">#design</Text>
                    <Text marginTop="-5px" w={100} fontWeight="600">#marketing</Text>
                </Box>
                <Image transition="all .2s cubic-bezier(0.8,0.04,0.4,1)" _groupHover={{ transform: 'translateY(70px)', opacity: 0 }} zIndex={-10} height="100%" width="100%" objectFit="cover" src="http://localhost:3000/flow-fantasy-logo.png" borderRadius="10px"/>
            </GridItem>
        </ChakraGrid>
        </Flex>
    );
}