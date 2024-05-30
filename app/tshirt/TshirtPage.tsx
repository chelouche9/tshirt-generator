"use client";
import { useSearchParams } from "next/navigation";
import {
  Badge,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import styles from "./page.module.css";
import SizeRadio from "@/app/tshirt/components/SizeRadio";
import ColorRadio from "@/app/tshirt/components/ColorRadio";
import Quantity from "@/app/tshirt/components/Quantity";
import Info from "@/app/tshirt/components/Info";
import { getImage, order } from "../utils/api";
import { logEvent } from "firebase/analytics";
import { analytics } from "../utils/firebase";

export default function TshirtPage() {
  const params = useSearchParams();
  const design = params.get("design");
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onOrder = async () => {
    setLoading(true);
    const res = await order({
      design,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    setLoading(false);
    logEvent(analytics!, "order");
    window.location.href = res.data.url;
  };

  useEffect(() => {
    const getImagee = async (design: string) => {
      const url = await getImage(design);
      // console.log(url);
      setImage(url);
    };
    if (design) {
      getImagee(design);
    }
  }, [design]);

  return (
    <main className={styles.main}>
      <Stack flex={1}>
        <Badge
          fontSize="14px"
          p="4px 8px"
          bgColor="gray.500"
          color="white"
          width="fit-content"
          mb="6px"
        >
          Unique Design
        </Badge>
        <Heading as="h3" fontSize="30px" mb="10px">
          Unisex Classic T-Shirt
        </Heading>
        <Text fontSize="20px" fontWeight="600" mb="20px">
          <Text
            as="span"
            color="gray.400"
            textDecoration="line-through"
            mr="8px"
          >
            $40.00
          </Text>
          $30.00
        </Text>
        <Text fontSize="16px" mb="20px">
          With a sleek design and a captivating essence, this is a modern
          Classic made for every occasion.
        </Text>
        <Text fontSize="14px" fontWeight="500" mb="8px">
          Size: {selectedSize}
        </Text>
        <SizeRadio onChange={setSelectedSize} />
        <Text fontSize="14px" fontWeight="500" mb="8px">
          Color: {selectedColor}
        </Text>
        <ColorRadio onChange={setSelectedColor} />
        <Text fontSize="14px" fontWeight="500" mb="8px">
          Quantity
        </Text>
        <Quantity value={quantity} onChange={setQuantity} />
        <Button
          colorScheme="teal"
          size="lg"
          w="100%"
          mb="20px"
          onClick={onOrder}
          isLoading={loading}
        >
          Buy Now
        </Button>
        <Info />
      </Stack>
      <Stack flex={1}>
        <Box
          padding={!!image ? "20px" : "0"}
          bgColor="gray.300"
          position="relative"
        >
          <Skeleton isLoaded={!!image}>
            <Image src={`${selectedColor.toLowerCase()}.png`} alt="Test" />
            <Image
              src={image as string}
              alt="Test"
              position="absolute"
              top="25%"
              left="34%"
              width="33%"
            />
          </Skeleton>
        </Box>
      </Stack>
    </main>
  );
}
