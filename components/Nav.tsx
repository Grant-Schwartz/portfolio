import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import { FC } from "react";


export const Nav: FC = () => {
    return (
        <Flex margin="20px">
            <Heading as={Link} href="/" _hover={{ textDecoration: 'none' }}>& grant schwartz</Heading>
        </Flex>
    );
}