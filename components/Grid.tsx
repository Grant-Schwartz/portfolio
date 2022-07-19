import { Box, Center, Grid as ChakraGrid, GridItem, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Grid: FC = () => {
    return (
        <Center>
        <ChakraGrid
            height={["800px", "800px" ,"400px", "400px"]}
            width={["100%", "100%", "80%", "80%"]}
            margin="20px"
            marginTop="40px"
            templateRows={{ base: '1fr 1fr 1fr 1fr', sm: 'repeat(16, 1fr)', md: 'repeat(4, 1fr)' }}
            templateColumns='repeat(4, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(100% 100% at 100% 100%, rgba(255, 255, 255, 0) 15%, blue.100 100%)' padding="10px">
                <Text fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em">👋 Hey! I'm Grant. I'm a coder, designer, entrepreneur, and student based in NYC.</Text>
            </GridItem>
            <GridItem rowSpan={[8,8,4,4]} colSpan={[2, 2, 1, 1]}>
                <Image height="100%" width="100%" objectFit="cover" src="http://localhost:3000/me.jpeg" borderRadius="10px"/>
            </GridItem>
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} bg='papayawhip' />
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} bg='yellow' />
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} borderRadius="10px" bgGradient='radial(130% 130% at 0% 100%, red.200 0%, rgba(255, 255, 255, 0) 100%)' padding="10px">
                <Text fontSize={["18px","18px","18px","20px"]} fontWeight="550" lineHeight="25px" letterSpacing="-0.02em">I'm currently a rising freshman at <Text as="span" color="red.500">Washington University in St. Louis.</Text></Text>
            </GridItem>
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} bg='orange' />
            <GridItem rowSpan={[4,4,2,2]} colSpan={[2, 2, 1, 1]} bg='pink' />
        </ChakraGrid>
        </Center>
    );
}