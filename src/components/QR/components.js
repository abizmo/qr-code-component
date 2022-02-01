import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  padding: 16px;
  width: 100%;
`;

export const Code = styled.img`
  border-radius: 18px;
  width: inherit;
`;

export const Info = styled.div`
  margin: 40px auto 32px;
  max-width: 260px;
  text-align: center;
`;

export const Title = styled.h1`
  color: hsl(218, 44%, 22%);
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0.03rem;
  line-height: 28px;
  margin-bottom: 16px;
`;

export const Body = styled.p`
  color: hsl(220, 15%, 55%);
  letter-spacing: 0.01rem;
  line-height: 19px;
`;
