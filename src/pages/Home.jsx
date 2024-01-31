// Home.jsx

import { Box, styled } from '@mui/material';
import bg from '../assets/images/bg.jpg';
import bg2 from '../assets/images/bg2.png';
import Form from '../components/Form';
import Information from '../components/Information';
import { useState } from 'react';

const Component = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  width: '65%',

  '@media (max-width: 768px)': {
    flexDirection: 'column', // Stack components vertically on smaller screens
    width: '100%',
  },
});

const Image = styled(Box)({
  backgroundImage: `url(${bg})`,
  height: '80%',
  width: '30%',
  backgroundSize: 'cover',
  borderRadius: '20px 0px 0px 20px',


  '@media (max-width: 768px)': {
    width: '100%', 
    backgroundImage:`url(${bg2})`,
    height: '60%', 
    borderRadius: '0px 0px 0px 0px', 
    margin:20
  },
});

const Home = () => {
  const [result, setResult] = useState({});

  return (
    <Component>
      <Image></Image>
      <Box style={{ width: '73%', height: '80%' }}>
        <Form setResult={setResult} />
        <Information result={result} />
      </Box>
    </Component>
  );
};

export default Home;
