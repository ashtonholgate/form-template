import styled from "styled-components";
import { AddButton } from "../../../AddButton";
import { selectStar } from "../redux/selectors";
import { addPlanet, changeStar } from "../redux/slice";
import { generateNewPlanet } from "../redux/generators";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Input } from "../../../Input";
import { Planet } from "./Planet";
import { memo, useMemo } from "react";
import { validateStar } from "../redux/validators";

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
};

export const Star = memo(({ galaxyId, starId }: StarProps) => {
  const dispatch = useAppDispatch();
  const star = useAppSelector((state) => selectStar(state, galaxyId, starId));
  const starErrors = useMemo(() => validateStar(star), [star]);

  const handleChangeName = (value: string) => {
    dispatch(changeStar({galaxyId, starId, key: "name", value: value === "" ? null : value}))
  }

  const handleAddPlanet = () => {
    const planet = generateNewPlanet();
    dispatch(addPlanet({ galaxyId, starId, planet }));
  };

  return (
    <GalaxyContainer>
      <Input label="Name" value={star.name || ""} onChange={handleChangeName}/>
      {starErrors.name && <p>{starErrors.name.message}</p>}
      {star.planets.map(planet => (<Planet galaxyId={galaxyId} starId={starId} planetId={planet.id} />))}
      <AddButton onClick={handleAddPlanet}>Add Planet</AddButton>
    </GalaxyContainer>
  );
});
