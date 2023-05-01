import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Grid as ChakraGrid,
  GridItem,
  Heading,
  Image as ChakraImage,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import { FC } from "react";

export const Grid: FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin="20px">
      <ChakraGrid
        height={["800px", "800px", "400px", "400px"]}
        width={["100%", "100%", "80%", "80%"]}
        marginTop="20px"
        templateRows={{
          base: "1fr 1fr 1fr 1fr",
          sm: "repeat(16, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={[4, 4, 2, 2]}
          colSpan={[2, 2, 1, 1]}
          borderRadius="10px"
          bgGradient="radial(130% 130% at 100% 100%, rgba(255, 255, 255, 0) 15%, blue.100 100%)"
          padding="10px"
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)" }}
        >
          <Text
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
          >
            👋 Hey! I&#39;m Grant. I&#39;m a coder, designer, entrepreneur, and
            student from{" "}
            <Text as="span" color="blue.500">
              NYC
            </Text>
            .
          </Text>
        </GridItem>
        <GridItem
          rowSpan={[8, 8, 4, 4]}
          colSpan={[2, 2, 1, 1]}
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)" }}
        >
          <ChakraImage
            alt="an image of me"
            height="100%"
            width="100%"
            objectFit="cover"
            src="/me.jpg"
            borderRadius="10px"
          />
        </GridItem>
        <GridItem
          as={Link}
          href="/posts/flow-fantasy"
          data-group
          display="flex"
          rowSpan={[4, 4, 2, 2]}
          colSpan={[2, 2, 1, 1]}
          borderRadius="10px"
          bgGradient="radial(100% 100% at 100% 0%, #ED64A6 0%, rgba(255, 255, 255, 0) 130%)"
          padding="10px"
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)", textDecoration: "none" }}
        >
          <Text
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
          >
            Learn about how I built my first company, Flow Fantasy, and{" "}
            <Text as="span" color="pink.500">
              how I royally messed it up
            </Text>
          </Text>
          <ArrowForwardIcon
            transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
            _groupHover={{ transform: "rotate(-45deg)" }}
            h={6}
            w={6}
            alignSelf="end"
          />
        </GridItem>
        {/* <GridItem
          as={Link}
          href="/posts/the-ampersand"
          data-group
          display="flex"
          rowSpan={[4, 4, 2, 2]}
          colSpan={[2, 2, 1, 1]}
          borderRadius="10px"
          bgGradient="radial(100% 100% at 0% 100%, purple.200 0%, rgba(255, 255, 255, 0) 100%)"
          padding="10px"
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)" }}
        >
          <Text
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
          >
            Learn a bit more about why I use{" "}
            <Text as="span" color="purple.500">
              the ampersand
            </Text>
          </Text>
          <ArrowForwardIcon
            transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
            _groupHover={{ transform: "rotate(-45deg)" }}
            h={6}
            w={6}
            alignSelf="end"
          />
        </GridItem> */}
        <GridItem
          data-group
          display="flex"
          rowSpan={[4, 4, 2, 2]}
          colSpan={[2, 2, 1, 1]}
          borderRadius="10px"
          bgGradient="radial(100% 100% at 0% 100%, purple.200 0%, rgba(255, 255, 255, 0) 100%)"
          padding="10px"
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)" }}
          flexDirection="column"
        >
          <Text
            color="purple.500"
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
          >
            Press
          </Text>
          <Link
            target="blank"
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
            href="https://laxallstars.com/flow-fantasy-lacrosse/"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Lacrosse
          </Link>
          <Link
            target="blank"
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
            href="https://open.spotify.com/episode/4avkuhfxkbaH2EZ892UU77"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Featured Podcast
          </Link>
          <Link
            target="blank"
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
            href="https://www.bxtimes.com/bronx-student-nominated-for-usa-footballs-heart-of-a-giant-award/"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Football Award
          </Link>
          <Link
            target="blank"
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
            href="https://www.youtube.com/watch?v=K42ZGXnWAmc)"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Award Winning Film
          </Link>
        </GridItem>
        <GridItem
          rowSpan={[4, 4, 2, 2]}
          colSpan={[2, 2, 1, 1]}
          borderRadius="10px"
          bgGradient="radial(120% 120% at 0% 100%, red.200 0%, rgba(255, 255, 255, 0) 100%)"
          padding="10px"
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)" }}
        >
          <Text
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
          >
            I&#39;m currently a freshman at{" "}
            <Text as="span" color="red.500">
              Washington University in St. Louis.
            </Text>
          </Text>
        </GridItem>
        <GridItem
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          rowSpan={[4, 4, 2, 2]}
          colSpan={[2, 2, 1, 1]}
          borderRadius="10px"
          bgGradient="radial(100% 100% at 100% 100%, #48BB78 0%, rgba(255, 255, 255, 0) 100%)"
          padding="10px"
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)" }}
        >
          <Text
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
            color="green.400"
          >
            I was unhappy with{" "}
            <Text as="span" color="black">
              pocket constitutions
            </Text>
            , so I made a new one. You can get it for free{" "}
            <Link
              color="black"
              _hover={{ textDecoration: "none", opacity: "0.7" }}
              href="/posts/a-well-designed-constitution"
            >
              here
            </Link>
          </Text>
          {/* <ArrowForwardIcon alignSelf="end" w={6} h={6} transform="rotate(-45deg)"/> */}
        </GridItem>
        <GridItem
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          rowSpan={[4, 4, 2, 2]}
          colSpan={[2, 2, 1, 1]}
          borderRadius="10px"
          bgGradient="radial(120% 120% at 0% 0%, rgba(168, 181, 197, 0.91411) 0%, rgba(255, 255, 255, 0) 100%)"
          padding="10px"
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _hover={{ transform: "scale(0.98)" }}
        >
          <Text
            fontSize={["18px", "18px", "18px", "20px"]}
            fontWeight="550"
            lineHeight="25px"
            letterSpacing="-0.02em"
            color="gray.700"
          >
            Wanna learn more or get in touch?
          </Text>
          <Box
            alignSelf="flex-end"
            display="flex"
            flexDirection="column"
            alignItems="end"
          >
            <Link
              _hover={{
                textDecoration: "none",
                transform: "translateX(-10px)",
                opacity: "0.7",
              }}
              fontSize="20px"
              fontWeight="600"
              letterSpacing="-0.015em"
              marginBottom="-5px"
              href="/Resume.pdf"
              target="_blank"
            >
              Resume
            </Link>
            <Link
              _hover={{
                textDecoration: "none",
                transform: "translateX(-10px)",
                opacity: "0.7",
              }}
              fontSize="20px"
              fontWeight="600"
              letterSpacing="-0.015em"
              marginBottom="-5px"
              href="https://github.com/Grant-Schwartz"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              _hover={{
                textDecoration: "none",
                transform: "translateX(-10px)",
                opacity: "0.7",
              }}
              fontSize="20px"
              fontWeight="600"
              letterSpacing="-0.015em"
              margin="0px"
              href="https://www.linkedin.com/in/grant-w-schwartz/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Box>
        </GridItem>
      </ChakraGrid>
      <Box
        height="100px"
        marginTop="20px"
        width={["100%", "100%", "80%", "80%"]}
        padding="10px"
        borderRadius="10px"
        transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
        color="white"
        display="flex"
        justifyContent="space-between"
        as={Link}
        href="/posts/the-word"
        bgGradient="radial(130% 130% at 0% 0%, #323E56 0%, rgba(255, 255, 255, 0) 100%)"
        _hover={{ transform: "scale(0.98)", textDecoration: "none" }}
        role="group"
      >
        <Text
          fontSize={["18px", "18px", "18px", "20px"]}
          fontWeight="550"
          lineHeight="25px"
          letterSpacing="-0.02em"
          color="white"
        >
          {"I've"} been building a new company called the word! Learn more here.
        </Text>
        <ArrowForwardIcon
          transition="all .2s cubic-bezier(0.8,0.04,0.4,1)"
          _groupHover={{ transform: "rotate(-45deg)" }}
          h={6}
          w={6}
          color="#242424"
          alignSelf="end"
        />
      </Box>
    </Flex>
  );
};
