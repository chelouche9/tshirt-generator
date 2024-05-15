import { Button, Heading, Stack, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack
      bgImage="bg1.jpg"
      backgroundSize="cover"
      backgroundColor="#ccc"
      backgroundPosition="center"
      height="620px"
      padding="50px"
      boxShadow="inset 0 0 0 1000px rgba(0,0,0,.6)"
      justifyContent="end"
      alignItems="center"
      flexDirection="column"
      spacing="24px"
    >
      <Heading as="h2" fontSize="52px" color="white" textAlign="center">
        Unleash Your Creativity and Wear It
      </Heading>
      <Text w="100%" textAlign="center" fontSize="16px" color="white">
        Create Your T-Shirt design with AI
      </Text>
      <Button variant="outline" colorScheme="whiteAlpha" size="lg">
        Design Now
      </Button>
    </Stack>
  );
}
