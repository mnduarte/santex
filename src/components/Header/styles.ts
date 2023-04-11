import styled from 'styled-components';

interface HeaderContainerProps {
  children: React.ReactNode;
}
interface InfoProps {
  children: React.ReactNode;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 100px;
  box-shadow: 0 8px 200px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div<InfoProps>`
  margin-right: 20px
`;