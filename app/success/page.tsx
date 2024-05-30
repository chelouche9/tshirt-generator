// import { CheckIcon } from "@chakra-ui/icons";
import { Heading, Text } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function SuccessPage() {
  return (
    <main className={styles.main}>
      <Heading as="h2">We Got Your Order</Heading>
      <Text>
        Thanks from ordering from us, we are now working on your order!
      </Text>
      <Text>
        In the next business day you will get an email with the shipment
        details.
      </Text>
      <Text>
        For any questions please contact us at wearmydesign123@gmail.com
      </Text>
    </main>
  );
}
