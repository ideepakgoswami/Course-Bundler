import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bg from '../../assets/Images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import '../Home/Home.css';
import introVideo from '../../assets/Videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Flex
          direction={['column', 'row']}
          alignItems="center"
          justify="center"
          height="100vh"
        >
          <Box
            w={['100%', '50%']}
            p={[4, 0]}
            textAlign={['center', 'right']}
            ml={[0, '10%']}
          >
            <Heading size="2xl" mb={4}>
              LEARN FROM THE EXPERTS
            </Heading>
            <Text mb={8} fontFamily={"cursive"}>Find Valuable Content At Reasonable Price</Text>
            <Link to="/">
              <Button colorScheme="yellow" size={'lg'}>
                Explore Now{' '}
              </Button>
            </Link>
          </Box>
          <Box w={['100%', '50%']} display="flex" alignItems="center">
            <Image
              className="vector-graphics"
              src={bg}
              alt="Home Image"
              objectFit="contain"
              w="100%"
              maxW="350px"
              mx="auto"
            />
          </Box>
        </Flex>
      </div>

      <Box bg={'blackAlpha.800'} padding={'8'} mb={'5rem'}>
        <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.400'}>
          OUR BRANDS
        </Heading>
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          mt={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
