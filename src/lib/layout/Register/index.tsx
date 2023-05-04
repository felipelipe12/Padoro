import { Button, Center, Checkbox, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

export const Register = () => {
    return (
        <Center h='100dvh'>
            <Flex bg='original.300' rounded='2xl'>
                <Flex direction='column' gap='3' w='500px' p='10'>
                    <Text textAlign='center' fontSize='32px' fontWeight='bold'>Register</Text>
                    <Flex direction='column'>
                        <FormControl isRequired>
                            <Flex direction='column' gap='5'>
                                <Flex direction='column' gap='2'>
                                    <Flex direction='column'>
                                        <FormLabel fontSize='14' mx='0' my='1'>E-mail</FormLabel>
                                        <Input type='email' name='email' placeholder='email@domain.com' />
                                    </Flex>
                                    <Flex direction='column'>
                                        <FormLabel fontSize='14' mx='0' my='1'>Password</FormLabel>
                                        <Input type='password' name='password' placeholder='********' />
                                    </Flex>
                                    <Flex direction='column'>
                                        <FormLabel fontSize='14' mx='0' my='1'>Confirm Password</FormLabel>
                                        <Input type='password' name='password' placeholder='********' />
                                    </Flex>
                                    <Flex direction='column'>
                                        <Checkbox>
                                            <Text fontSize='12'>
                                                I accept the Terms of Use & Privacy Policy.
                                            </Text>
                                        </Checkbox>
                                    </Flex>
                                </Flex>
                                <Flex direction='column'>
                                    <Button bg='original.100' color='original.200' _hover={{ bg: 'original.200', color: 'original.100' }}>Register Now</Button>
                                </Flex>
                            </Flex>
                        </FormControl>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    );
}