import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

// import SVG from '../../assets/landingPageForms.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Exercise Css Animations</h1>

      <Content>
        <Link to={'/page01'}>PAGE 01</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
        <Link to={'/'}>NONE</Link>
      </Content>
    </Container>
  );
};

export default Home;
