"use client";

import { FC, useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Image,
  HStack,
} from "@chakra-ui/react";
import { ArrowLeftIcon, CheckIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

interface ImageBoxProps {
  isSelected?: boolean;
  src: string;
  setSelectedImage: (index: number) => void;
  index: number;
}

const ImageBox: FC<ImageBoxProps> = ({
  isSelected = false,
  src,
  setSelectedImage,
  index,
}) => {
  return (
    <Box
      border={isSelected ? "dashed 6px teal" : "none"}
      boxSizing="border-box"
      width="400px"
      height="400px"
      onClick={() => setSelectedImage(index)}
      cursor="pointer"
      transition={"all 0.3s ease"}
    >
      <Image src={src} alt="test" />
    </Box>
  );
};

export default function Hero() {
  const router = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const onPrompt = async () => {
    setLoading(true);
    setTimeout(() => {
      setImages(["test.png", "test.png", "test.png", "test.png"]);
      setLoading(false);
    }, 2000);
  };

  const onReset = () => {
    setImages([]);
  };

  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      //   padding="50px"
      backgroundColor="gray.50"
    >
      <Stack spacing="24px" maxW="1100px" textAlign="center">
        <Heading as="h3" mt="50px">
          Start With A Prompt
        </Heading>
        <Text>
          Choose a prompt that speaks to you. We&apos;ll guide you through the
          rest.
        </Text>
        <Textarea width="100%" placeholder="Try anything you have in mind" />
        <Button
          colorScheme="teal"
          isLoading={loading}
          onClick={onPrompt}
          marginBottom="50px"
        >
          Create
        </Button>
      </Stack>
      <Collapse in={!!images.length}>
        <Stack
          spacing="24px"
          backgroundColor="gray.50"
          alignItems="center"
          width="100vw"
          padding="50px"
        >
          <Heading as="h3">Your Masterpieces</Heading>
          <Box>Choose an Image</Box>
          <SimpleGrid columns={2} spacing="24px">
            {images.map((image, i) => (
              <ImageBox
                key={i}
                isSelected={selectedImage === i}
                src={image}
                index={i}
                setSelectedImage={setSelectedImage}
              />
            ))}
          </SimpleGrid>
          <HStack spacing="24px" flex={1} mt="24px">
            <Button
              colorScheme="teal"
              onClick={onReset}
              variant="outline"
              leftIcon={<ArrowLeftIcon />}
              flex={1}
              size="lg"
              width="300px"
            >
              Reset
            </Button>
            <Button
              colorScheme="teal"
              size="lg"
              width="300px"
              leftIcon={<CheckIcon />}
              onClick={() => router.push("/tshirt?design=1231231")}
            >
              Continue
            </Button>
          </HStack>
        </Stack>
      </Collapse>
    </Flex>
  );
}
