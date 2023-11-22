import styled from "styled-components";
import { selectPlanet } from "../redux/selectors";
import { changePlanet } from "../redux/slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Input } from "../../../Input";
import { memo } from "react";

const GalaxyContainer = styled.div`
  padding: 40px;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export type StarProps = {
  galaxyId: string;
  starId: string;
  planetId: string;
};

export const Planet = memo(({ galaxyId, starId, planetId }: StarProps) => {
  const dispatch = useAppDispatch();
  const star = useAppSelector((state) => selectPlanet(state, galaxyId, starId, planetId));

  const handleChangeName = (value: string) => {
    dispatch(changePlanet({galaxyId, starId, planetId, key: "name", value: value === "" ? null : value}))
  }

  return (
    <GalaxyContainer>
      <Input label="Name" value={star.name || ""} onChange={handleChangeName}/>
    </GalaxyContainer>
  );
});
