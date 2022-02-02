import React from 'react';

import QR from './components/QR';
import { Wrapper } from './components/UI';

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
