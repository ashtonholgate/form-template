import styled from "styled-components";
import { AddButton } from "../../../AddButton";
import { selectGalaxy } from "../redux/selectors";
import { addStar, changeGalaxy } from "../redux/slice";
import { generateNewStar } from "../redux/generators";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Input } from "../../../Input";
import { Star } from "./Star";
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

export type GalaxyProps = {
  galaxyId: string;
};

export const Galaxy = memo(({ galaxyId }: GalaxyProps) => {
  const dispatch = useAppDispatch();
  const galaxy = useAppSelector((state) => selectGalaxy(state, galaxyId));

  const handleChangeName = (value: string) => {
    dispatch(changeGalaxy({galaxyId, key: "name", value: value === "" ? null : value}))
  }

  const handleAddStar = () => {
    const star = generateNewStar();
    dispatch(addStar({ galaxyId, star }));
  };

  return (
    <GalaxyContainer>
      <Input label="Name" value={galaxy.name || ""} onChange={handleChangeName}/>
      {galaxy.stars.map(star => (<Star galaxyId={galaxyId} starId={star.id} />))}
      <AddButton onClick={handleAddStar}>Add Star</AddButton>
    </GalaxyContainer>
  );
});
