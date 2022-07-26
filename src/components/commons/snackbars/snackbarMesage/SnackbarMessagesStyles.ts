import styled from "@mui/material/styles/styled";
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';


interface snackBarStyled extends SnackbarProps {
    iserror: 'true' | 'false';
}

export const SnackbarBCStyles = styled(Snackbar)<snackBarStyled>(({ iserror, theme }) => ({
    "& .MuiSnackbarContent-root": {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        borderColor: '#0065BD',
        borderWidth: '2px',
        borderStyle: 'solid',
        color: '#3B3B3B',

        ...(iserror === 'true' && {
            borderColor: '#EF3333',
        })
    },
    "& .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root": {
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.1),0px 1px 18px 0px rgba(0,0,0,0.1)'
    },

}));