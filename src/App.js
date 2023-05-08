import { Flex, IconButton, Spacer, useColorMode, VStack, Button, Link, Avatar } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'
import Header from "./components/header";
import Social from "./components/social";
import Profile from "./components/profile"
import avatar from "./images/avatar.png";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Avatar size='lg' name='Sayed' src={avatar} />
        <Spacer></Spacer>
        <Link _hover="{ text-decoration: none; }" href='https://www.linkedin.com/in/sayed-mahmudul-alam' isExternal>
          <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
        </Link>
        <Link _hover="{ text-decoration: none; }" href='https://github.com/smalam119' isExternal>
          <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
        </Link>
        <Link _hover="{ text-decoration: none; }" href='https://medium.com/@smalam119' isExternal>
          <IconButton ml={2} icon={<SiMedium />} isRound="true"></IconButton>
        </Link>
        <Link _hover="{ text-decoration: none; }" href='https://drive.google.com/file/d/1120OkchAo_NZ8Cg_BYM3W4CnWNvf1M-t/view?usp=sharing' isExternal>
          <Button w={90} ml={5} colorScheme='blue' variant='outline'>Resume</Button>
        </Link>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}> </IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Social></Social>
    </VStack>
  );
}

export default App;
