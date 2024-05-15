import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

export default function Mockups() {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="1100px">
        <Stack spacing="24px" textAlign="center">
          <Heading as="h3" mt="50px">
            Create Your Own Unique Designs
          </Heading>
          <Text>
            Follow our simple steps to create your own unique designs.
          </Text>
        </Stack>
        <Stack
          spacing="24px"
          // backgroundColor="gray.50"
          alignItems="center"
          // width="100vw"
          padding="50px"
        >
          <SimpleGrid columns={3} spacing="24px">
            {["1", "2", "3", "4", "5", "6"].map((image) => {
              return (
                <Box key={image} padding="20px" bgColor="gray.200">
                  <Image src={`mockups/${image}.png`} alt={image} />
                </Box>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Box>
    </Flex>
  );
}
