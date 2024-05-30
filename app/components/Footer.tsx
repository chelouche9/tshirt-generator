import {
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex
        borderTopWidth="1px"
        borderTopColor="rgba(18, 18, 18, 0.08)"
        width="100%"
        justifyContent="center"
        alignItems="center"
        padding="50px"
      >
        <HStack
          width={["fit-content", "1100px"]}
          spacing="24px"
          justifyContent="space-between"
          flexDirection={["column", "row"]}
        >
          <Stack spacing="24px">
            <Text fontSize="18px">Subscribe for updates</Text>
            <HStack spacing="24px">
              <Input />
              <Button
                colorScheme="teal"
                variant="ghost"
                size="md"
                width="140px"
              >
                Subscribe
              </Button>
            </HStack>
            <Text fontSize="12px">© 2024, wearmy.design</Text>
          </Stack>
          <HStack spacing="24px">
            {["1", "2", "14", "16", "22"].map((image) => (
              <Image
                key={image}
                src={`payments/${image}.png`}
                alt={image}
                width="36px"
              />
            ))}
          </HStack>
        </HStack>
      </Flex>
    </>
  );
}
