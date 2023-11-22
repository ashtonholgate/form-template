import styled from "styled-components";
import { AddButton } from "../../../AddButton";
import { useSelector } from "react-redux";
import { selectUniverse } from "../redux/selectors";
import { addGalaxy } from "../redux/slice";
import { generateNewGalaxy } from "../redux/generators";
import { useAppDispatch } from "../../../hooks/hooks";
import { Galaxy } from "./Galaxy";
import { getHighestUniverseSeverity } from "../redux/validators";

const UniverseContainer = styled.div`
  padding: 40px;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UniversePage = () => {
  const dispatch = useAppDispatch();
  const universe = useSelector(selectUniverse);

  const handleAddGalaxy = () => {
    const galaxy = generateNewGalaxy();
    dispatch(addGalaxy({ galaxy }));
  };

  const highestErrorSeverity = getHighestUniverseSeverity(universe);

  return (
    <UniverseContainer>
      {universe.galaxies.map(galaxy => (<Galaxy galaxyId={galaxy.id} />))}
      <AddButton onClick={handleAddGalaxy}>Add Galaxy</AddButton>
      {highestErrorSeverity}
    </UniverseContainer>
  );
};
