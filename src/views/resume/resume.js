import React from "react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import { Box, useStyleConfig, Flex, Button } from "@chakra-ui/react";
import pdfFile from "../../assets/Rajat_FullStack_Resume.pdf"


export default function Resume() {
  const pdf =''
  const styles = useStyleConfig("Card");
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  const handleDownload = () => {
   

      
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            width={{ base: "100%", md: "70%", xl: "70%" }}
            height={{ base: "60vh", md: "100vh", xl: "150vh" }}
            overflow="hidden"
            borderRadius="md"
          >
            <iframe
              src={pdfFile}
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "5px solid" }}
              loading="lazy"
            ></iframe>
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Button
            onClick={handleDownload}
            variant="darkBrand"
            fontSize="sm"
            fontFamily="DM Sans"
          >
            Download Resume
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
