import PropTypes from 'prop-types';
import React from 'react';

import {
  Body, Card, Code, Info, Title,
} from './components';

const QR = ({ body, code, title }) => (
  <Card>
    <Code src={code} alt="qr-code" />
    <Info>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Info>
  </Card>
);

QR.propTypes = {
  body: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default QR;
