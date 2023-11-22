import { ChangeEvent, useCallback } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const InnerInput = styled.input``;

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ label, value, onChange }: InputProps) => {
  
  const handleOnChange = useCallback((action: ChangeEvent<HTMLInputElement>) => {
    onChange(action.target.value);
  }, [])
  
  return (
    <MainContainer>
      <Label>{label}</Label>
      <InnerInput value={value} onChange={handleOnChange} />
    </MainContainer>
  );
};
