import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IData } from "../types";

interface IProps {
  data: IData;
  onClose: () => void;
}

export const NftDetailsCard = ({ data, onClose }: IProps) => {
  const { id, name, image, availablility, owner, description, address } = data;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      //   variant="outline"
      height="full"
    >
      <Image
        objectFit="cover"
        w="300px"
        // maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt={name}
      />

      <Stack>
        <CardBody>
          <Text py="2">{id}</Text>
          <Heading size="md">{name}</Heading>
          <Divider colorScheme="teal" my={"5"} />
          <HStack mb={"2"} fontWeight="bold">
            <Text>Owned by</Text>
            <Text color="teal.400" fontSize="md">
              {owner}
            </Text>
          </HStack>
          <Box>{description}</Box>
          <Box mt={"2"} fontWeight="bold">
            {availablility}
          </Box>
        </CardBody>
        <Divider colorScheme="teal" />
        <CardFooter>
          <HStack w="full" mt={"1.5"} justifyContent="space-between">
            <Button
              as="a"
              href={address}
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              colorScheme="teal"
            >
              Buy {name}
            </Button>
            <Button
              variant="outline"
              colorScheme="teal"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  );
};
