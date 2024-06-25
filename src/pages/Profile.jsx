import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Container, Text, VStack, Button } from '@chakra-ui/react';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = supabase.auth.user();
      if (user) {
        const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        if (data) {
          setProfile(data);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Profile</Text>
        {profile ? (
          <>
            <Text>Email: {profile.email}</Text>
            <Text>Role: {profile.role}</Text>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </VStack>
    </Container>
  );
};

export default Profile;