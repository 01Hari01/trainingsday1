import React from 'react';
import { styled } from '@mui/material/styles';
import { Tab } from '@mui/material';

const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
        opacity: 1,
    },
}));

export default StyledTab;