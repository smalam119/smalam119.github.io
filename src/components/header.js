import { Stack, useMediaQuery, Flex, Box, Text, Link, List, ListItem, ListIcon, HStack, VStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePlayArrow } from "react-icons/md";

function Header() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode == "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack pb={isNotSmallerScreen ? 0 : 20}>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="100px" p={isNotSmallerScreen ? "20" : "0"} pb={"0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
                    <Text fontSize="2xl" fontWeight="semibold" color="gray.400"> Hi, my name is</Text>
                    <Text fontSize="5xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r,cyan.400, blue.500, purple.600)"
                        bgClip="text">Sayed Mahmudul Alam.
                    </Text>
                    <Stack spacing={3}>
                        <Text color={isDark ? "gray.200" : "gray.700"}> I enjoy creating things that
                            lives on people's phone. My interest in software development started back in 2014 when I took part on my university hackathon,
                            build an mobile app to assist visually impared people and came out as the champion. </Text>

                        <Text color={isDark ? "gray.200" : "gray.700"}> Fast-forward to today, and I’ve had the privilege of working at start-ups, as well as big corporates e.g.,
                            <Link color='purple.300' href='https://www.mindvalley.com/' isExternal> Mindvalley which is the number 1 personal growth platform</Link> and
                            <Link color='green.300' href='https://www.bdjobs.com/' isExternal> BdJobs.com which is the largest job portal in Bangladesh.</Link>
                        </Text>

                        <Text color={isDark ? "gray.200" : "gray.700"}>My biggest source of motivation is seeing positive impact in people's lives by using the products I am working on.
                            I always look for projects that have the ability to level up people, make their lives easier or solve social issues, all by using technology.</Text>

                        <Text color={isDark ? "gray.200" : "gray.700"}>Here are a few things I’ve been working with recently: </Text>

                        <HStack>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={MdOutlinePlayArrow} color='cyan.400' /> Swift
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdOutlinePlayArrow} color='cyan.400' /> UIKit
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdOutlinePlayArrow} color='cyan.400' /> MVVM
                                </ListItem>
                            </List>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={MdOutlinePlayArrow} color='cyan.400' /> SwiftUI
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdOutlinePlayArrow} color='cyan.400' /> Async/Await
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdOutlinePlayArrow} color='cyan.400' /> Combine
                                </ListItem>
                            </List>
                        </HStack>
                    </Stack>
                </Box>
            </Flex>
        </VStack>
    )
}

export default Header