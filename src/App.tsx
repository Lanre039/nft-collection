import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  HStack,
  Container,
  Heading,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NftCard } from "./components/NftCard";
import { NftModal } from "./components/Modal";
import { useState } from "react";
import mockdata from "./mock-data.json";
import { IData } from "./types";
import { CustomParticles } from "./CustomParticles";

export const App = () => {
  const [modalData, setModalData] = useState<IData>({} as IData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (data: IData) => {
    onOpen();
    setModalData(data);
  };

  const handleClose = () => {
    onClose();
    setModalData({} as IData);
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <CustomParticles color={theme.colors.current} />
        <Box paddingTop="6">
          <Container maxW="1240px">
            <HStack margin={4} justifyContent="space-between">
              <Box>
                <Heading>NFT Collections</Heading>
              </Box>
              <ColorModeSwitcher justifySelf="flex-end" />
            </HStack>
          </Container>
          <Divider my="6" />
          <Container maxW="1240px">
            {/* <Grid minH="100vh" templateColumns="repeat(3, 1fr)"> */}
            <Grid templateColumns="repeat(4, 1fr)">
              {mockdata.map((item, idx) => (
                <NftCard key={idx} data={item} onClick={handleClick} />
              ))}
            </Grid>
          </Container>
          <NftModal data={modalData} isOpen={isOpen} onClose={handleClose} />
        </Box>
      </ChakraProvider>
    </>
  );
};
