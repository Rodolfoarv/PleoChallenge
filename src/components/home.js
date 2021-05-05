import React from "react";
import { Flex, Box, Text, Stack, Link, Image, SimpleGrid } from "@chakra-ui/core";
import { ArrowRight } from "react-feather";
import { Link as BrowserLink } from "react-router-dom";
import "./home.css"
import StarfieldAnimation from 'react-starfield-animation'



export default function Home() {

  return (
    <>
      <div class="scene">
        <StarfieldAnimation
        numParticles={600}
        className=""
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}  
        />
        <SimpleGrid columns={3} >

          <div className="launches">
          <PageLink color="white" url="/launches" >
            Browse SpaceX Launches
          </PageLink>
            </div>
          <Box>

          <Box>
            <div class="rocket">
              <Image src={require("../assets/rocket.png")} alt="Rocket" />
            </div>
          </Box>

          </Box>
          <div className="launches">
          <PageLink color="white" url="/launch-pads">Browse SpaceX Launch Pads</PageLink>
            </div>
          <Box>

          </Box>
        </SimpleGrid>




      </div>

    </>
  );
}

function PageLink({ url, children, ...rest }) {
  return (
    <Link as={BrowserLink} to={url} {...rest}>
      <Flex
        justifyContent="space-between"
        p="6"
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="lg">{children}</Text>
        <Box as={ArrowRight} />
      </Flex>
    </Link>
  );
}
