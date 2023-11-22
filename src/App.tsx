import styled from "styled-components";
import { UniversePage } from "./pages/universe/components/UniversePage";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eee;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = () => {
  return (
    <MainContainer>
      <UniversePage />
    </MainContainer>
  );
}
