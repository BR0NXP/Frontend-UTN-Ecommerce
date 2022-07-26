import { SnackbarBCStyles } from './SnackbarMessagesStyles';
import { Typography, Zoom } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export interface StateSnackbar {
  open: boolean;
  vertical: "bottom" | "top";
  horizontal: "right" | "left" | "center";
  handleClose: ()=>void;
  message: string;
  title: string;
  error: boolean;
}

export function SnackbarMessage({ vertical, horizontal, open, handleClose, message, title, error }: StateSnackbar) {
  return (
    <SnackbarBCStyles
      iserror={`${error}`}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message={
        <>
          <Typography sx={{ color: '#3B3B3B', fontWeight: 'bold', fontSize: '16px' }}>{title}</Typography>
          <Typography sx={{ color: '#3B3B3B', fontSize: '16px' }}>{message}</Typography>
        </>}
      onClose={handleClose}
      transitionDuration={{ enter: 200, exit: 400 }}
      TransitionComponent={Zoom}
      TransitionProps={{ enter: true, exit: true }}
      key={vertical + horizontal}
      action={
        <>
          {!error ?
            <CheckIcon sx={{ color: '#0065BD' }} />
            :
            <ErrorOutlineIcon sx={{ color: '#EF3333' }} />}
        </>
      }
    />

  );
}
