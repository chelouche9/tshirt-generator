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
import { logEvent } from "firebase/analytics";

import { generateImages, saveImage } from "../utils/api";
import { analytics } from "../utils/firebase";

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
      width={["100%", "400px"]}
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

  const [prompt, setPrompt] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const onPrompt = async () => {
    setLoading(true);
    const res = await generateImages({ prompt });
    const images = res.data.map(
      (img: any) => `data:image/jpeg;base64,${img.image_base64}`
    );
    setImages(images);
    setLoading(false);
    logEvent(analytics!, "prompt");
  };

  const onSelected = async () => {
    setSaveLoading(true);
    const path = await saveImage(images[selectedImage]);
    setSaveLoading(false);
    router.push(`tshirt?design=${path}`);
    logEvent(analytics!, "select_image");
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
      padding="50px"
      backgroundColor="gray.50"
      id="start"
    >
      <Stack spacing="24px" maxW="1100px" textAlign="center">
        <Heading as="h3">Start With A Prompt</Heading>
        <Text>
          Choose a prompt that speaks to you. We&apos;ll guide you through the
          rest.
        </Text>
        <Textarea
          width="100%"
          placeholder="Try anything you have in mind"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
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
          <SimpleGrid columns={[1, 2]} spacing="24px">
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
          <HStack
            flexDirection={["column-reverse", "row"]}
            spacing="24px"
            flex={1}
            mt="24px"
          >
            <Button
              colorScheme="teal"
              onClick={onReset}
              variant="ghost"
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
              isLoading={saveLoading}
              onClick={() => onSelected()}
            >
              Continue
            </Button>
          </HStack>
        </Stack>
      </Collapse>
    </Flex>
  );
}
