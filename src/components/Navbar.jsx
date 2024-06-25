import { Link } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/register" colorScheme="teal" variant="ghost">
          Register
        </Button>
        <Button as={Link} to="/login" colorScheme="teal" variant="ghost">
          Login
        </Button>
        <Button as={Link} to="/profile" colorScheme="teal" variant="ghost">
          Profile
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;