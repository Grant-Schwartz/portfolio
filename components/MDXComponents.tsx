import { Alert, Box, Code, Divider, Heading, Text, Link } from "@chakra-ui/react";

const Quote = (props: any) => {
    const bgColor = {
      light: 'blue.50',
      dark: 'blue.900'
    };
  
    return (
      <Alert
        mt={4}
        w="98%"
        variant="left-accent"
        status="info"
        css={{
          '> *:first-of-type': {
            marginTop: 0,
            marginLeft: 8
          }
        }}
        {...props}
      />
    );
};

export const MDXComponents = {
    //eslint-disable-next-line
    h1: (props: any) => <Heading as="h1" size="xl" {...props} />,
    //eslint-disable-next-line
    h2: (props: any) => (
      <Heading as="h2" size="lg" fontWeight="bold" {...props} />
    ),
    //eslint-disable-next-line
    h3: (props: any) => (
      <Heading as="h3" size="md" fontWeight="bold" {...props} />
    ),
    //eslint-disable-next-line
    h4: (props: any) => (
      <Heading as="h4" size="sm" fontWeight="bold" {...props} />
    ),
    //eslint-disable-next-line
    h5: (props: any) => (
      <Heading as="h5" size="sm" fontWeight="bold" {...props} />
    ),
    //eslint-disable-next-line
    h6: (props: any) => (
      <Heading as="h6" size="xs" fontWeight="bold" {...props} />
    ),
    //eslint-disable-next-line
    code: (props: any) => (
      <Box display="flex" flexDirection="column" bg="gray.100" borderTopLeftRadius="20px" borderRadius="20px"><Code borderRadius="10px" background="gray.100" width="100%" padding="10px" fontSize="0.84em" {...props} /></Box>
    ),
    a: (props: any) => (
      <Link color="blue.600" href={props.url} {...props}>{props.children}</Link>
    ),
    //eslint-disable-next-line
    br: (props: any) => <Box height="24px" {...props} />,
    //eslint-disable-next-line
    p: (props: any) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
    //eslint-disable-next-line
    ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    //eslint-disable-next-line
    ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
    //eslint-disable-next-line
    li: (props: any) => <Box as="li" pb={1} {...props} />,
    blockquote: Quote,
  };