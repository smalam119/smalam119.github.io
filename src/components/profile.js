import { Flex, useMediaQuery, Text, Link, HStack, VStack, Spacer } from "@chakra-ui/react";
import React from "react";
import Icon from "@chakra-ui/icon"
import { GiSuitcase } from "react-icons/gi"
import { MdArticle, MdLeaderboard } from "react-icons/md"
import { FaGithub, FaAward } from "react-icons/fa"
import { useColorMode } from "@chakra-ui/react";

function Profile() {

    const { colorMode, toggleColorMode } = useColorMode();
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const isDark = colorMode == "dark";

    return (
        <VStack>
            <Text fontSize="2xl" fontWeight="semibold" color={isDark ? "gray.200" : "gray.500"} p={isNotSmallerScreen ? "10" : "0"} align="center">
                An experienced iOS developer, Lead engineer, Technical article writter and open source contributor </Text>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="center"
            >
                <Link _hover="{ text-decoration: none; }" href='https://www.mindvalley.com/apps' isExternal>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="purple.500" h="250px" w="250px" justify="center" _hover={{ bg: "blue.600" }} >
                        <Icon color="white" p="4" as={GiSuitcase} w="24" h="24" />
                        <Text color="white" p="4" fontSize="l" fontWeight="semibold">
                            Engineering Lead (Mobile), Mindvalley
                        </Text>
                    </Flex>
                </Link>
                <Link _hover="{ text-decoration: none; }" color='purple.300' href='https://medium.com/@smalam119/viper-design-pattern-for-ios-application-development-7a9703902af6' isExternal>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.500" h="250px" w="250px" justify="flex-end" _hover={{ bg: "teal.400" }}>
                        <Icon color="white" p="4" as={MdArticle} w="24" h="24" />
                        <Text color="white" p="4" fontSize="sm" fontWeight="semibold">
                            VIPER Design Pattern in Swift for iOS Application Development.
                        </Text>
                        <HStack spacing={-5}>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                Design Pattern
                            </Text>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                Viper
                            </Text>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                Swift
                            </Text>
                        </HStack>
                    </Flex>
                </Link>
                <Link _hover="{ text-decoration: none; }" color='purple.300' href='https://medium.com/@smalam119/the-kiss-principle-in-coding-with-swifty-examples-841993b6c653' isExternal>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="yellow.500" h="250px" w="250px" justify="flex-end"
                        _hover={{ bg: "cyan.400", }}>
                        <Icon color="white" as={MdArticle} p="4" w="24" h="24" />
                        <Text color="white" p="4" fontSize="l" fontWeight="semibold">
                            The KISS principle in coding for Swift developers.
                        </Text>
                        <HStack spacing={-5}>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                Kiss Principle
                            </Text>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                Swift
                            </Text>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                Clean Coding
                            </Text>
                        </HStack>
                    </Flex>
                </Link>

            </Flex>
            <Flex
                direction={{ base: 'column-reverse', md: 'row' }}
                justify="center"
            >
                <Link _hover="{ text-decoration: none; }" href='https://www.bdjobs.com/apps/ios/index.html' isExternal>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="pink.500" h="250px" w="250px" justify="center" _hover={{ bg: "teal.700" }}>
                        <Icon color="white" p="4" as={GiSuitcase} w="24" h="24" />
                        <Text color="white" p="4" fontSize="l" fontWeight="semibold">
                            Former Software Engineer (iOS), Bdjobs.com
                        </Text>
                    </Flex>
                </Link>
                <Link _hover="{ text-decoration: none; }" color='purple.300' href='https://github.com/smalam119/classic-problem-solving-algorithms-and-data-structures-in-swift' isExternal>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="green.400" h="250px" w="250px" justify="center" _hover={{ bg: "blue.600" }}>
                        <Icon color="white" p="4" as={FaGithub} w="24" h="24" />
                        <Text color="white" p="4" fontSize="=sm" fontWeight="semibold">
                            Classic problem solving, algorithms & data structures in swift
                        </Text>
                        <HStack spacing={-5}>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                Swift
                            </Text>
                            <Text color="gray.200" p="4" fontSize="xs" fontWeight="semibold">
                                LeetCode
                            </Text>
                        </HStack>
                    </Flex>
                </Link>
                <Link _hover="{ text-decoration: none; }" href='http://159.100.250.9/users/search?login=smalam119' isExternal>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.300" h="250px" w="250px" justify="center" _hover={{ bg: "orange.200" }} pt="8">
                        <Icon color="white" p="4" as={MdLeaderboard} w="24" h="24" />
                        <Text color="white" p="4" fontSize="l" fontWeight="semibold">
                            World Wide Git Ranking
                        </Text>
                        <Text color="gray.200" p="4" pt="4" fontSize="xs" fontWeight="semibold">
                            In top 4% World Wide
                        </Text>
                    </Flex>
                </Link>
            </Flex>
            <Flex
                direction={{ base: 'column-reverse', md: 'row' }}
                justify="center"
                pb={8}
            >
                <Link _hover="{ text-decoration: none; }" href='' isExternal>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="red.300" h="250px" w="250px" justify="center"
                        _hover={{ bg: "green.400", }}>
                        <Icon color="white" as={FaAward} p="4" w="24" h="24" />
                        <Text color="white" p="4" fontSize="l" fontWeight="semibold">
                            Runner up at National Hackathon Bangladesh
                        </Text>
                        <Text color="gray.200" p="4" pt="4" fontSize="xs" fontWeight="semibold">
                            Worked on women and children security app
                        </Text>
                    </Flex>
                </Link>
            </Flex>
        </VStack>

    )
}

export default Profile