import styled from 'styled-components';

interface RowProps {
  isTitle?: boolean;
}

export const Container = styled.div`
  margin: 0px 50px;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;  
  border-bottom: 1px solid #6e8a9c;
  
  ${({ isTitle }: RowProps) =>
    isTitle &&
    `
  background: #6c7ae0;
  color: white;
  border-bottom: none;
  `}
  }};
`;

export const Column = styled.div`
  flex: 1;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;

  button {
    background-color: #008cba;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }

  img {
    height: 50px;
  }
`;