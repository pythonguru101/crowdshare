import React from 'react'
import {styled} from '@mui/system'
import { Typography } from '@mui/material'
const CustomTypography = ({styles,variant,children}) => {

    const StyledTypography = styled(Typography)({
        ...styles
    })

  return (
    <StyledTypography variant={variant}>
        {children}
    </StyledTypography>
  )
}

export default CustomTypography