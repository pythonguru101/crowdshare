import React from 'react'
import {styled} from '@mui/system'
import { Button } from '@mui/material'



const CustomButton = (onClick,styles,text, variant) => {

    const StyledButton = styled(Button)({
        ...styles
    })

  return (
    <StyledButton variant={variant} onClick={onClick}>{text}</StyledButton>
  )
}

export default CustomButton