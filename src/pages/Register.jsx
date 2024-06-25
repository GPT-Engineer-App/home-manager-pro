import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Container, Input, Button, VStack, Text } from '@chakra-ui/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Registration successful! Please check your email for verification.');
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Register</Text>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleRegister}>Register</Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Container>
  );
};

export default Register;