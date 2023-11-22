import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: white;
  border: 1px dashed grey;
  border-radius: 8px;
  cursor: pointer;
`

type AddButtonProps = {
  onClick: () => void;
}

export const AddButton: React.FC<PropsWithChildren<AddButtonProps>> = ({children, onClick}) => {

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}