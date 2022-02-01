import React from 'react';
import styled from 'styled-components';
import QR from './components/QR';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
`;

const qrData = {
  body: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  code: 'images/image-qr-code.png',
  title: 'Improve your front-end skills by building projects',
};

const App = () => (
  <Wrapper>
    <QR
      body={qrData.body}
      code={qrData.code}
      title={qrData.title}
    />
  </Wrapper>
);

export default App;
