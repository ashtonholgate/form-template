import styled from "styled-components";
import { Star } from "./pages/universe/models/universe.models";
import { memo } from "react";
import { Input } from "./Input";

const MainContainer = styled.div`
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

type StarProps = Star;

export const StarComponent = memo(({ name, planets }: StarProps) => {
  return (
    <MainContainer>
      <Input label="Name" value={name} onChange={} />
    </MainContainer>
  );
});
