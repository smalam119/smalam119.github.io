import { HStack, Icon, Center, Button, VStack, Link } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa"

function Social() {
    return (
        <VStack >
            <HStack spacing="10">
            <Link _hover="{ text-decoration: none; }" href='https://www.facebook.com/smalam119' isExternal>
                <Icon as={FaFacebookF} boxSize="30" />
                </Link>
                <Icon as={FaGoogle} boxSize="30" onClick={
                    () => window.location = 'mailto:yourmail@domain.com'
                } />
                <Link _hover="{ text-decoration: none; }" href='https://www.instagram.com/sayed.mahmudul.alam/' isExternal>
                <Icon as={FaInstagram} boxSize="30" />
                </Link>
            </HStack>
            <Center pb={5}>
                <Button mt={16} colorScheme="blue" align="center" onClick={
                    () => window.location = 'mailto:smalam119@gmail.com'
                }>Contact Me
                </Button>
            </Center>
        </VStack>
    )
}

export default Social