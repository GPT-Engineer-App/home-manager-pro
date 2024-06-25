import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Container, Input, Button, VStack, Text } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Login successful!');
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Login</Text>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Container>
  );
};

export default Login;