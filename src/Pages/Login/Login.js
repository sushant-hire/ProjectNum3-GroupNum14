import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import Buttons from '../../Molecules/Buttons/Buttons';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './Login.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Login = () => {
    const [open] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog
            className={styles.dialogContainer}
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="responsive-dialog-title"
            PaperProps={{
                style: {
                    borderRadius: '15px',
                },
            }}
        >
            <div className={styles.dialogContentContainer} >
                <TwitterIcon style={{ fontSize: '2.5vw', color: '#00ACEE', position: 'relative', top: '50px' }} />
                <DialogTitle className={styles.dialogHeading} id="responsive-dialog-title">
                    <span style={{ fontSize: '2vw', fontWeight: 'bolder', position: 'relative', top: '40px' }}>{'Log in to Twitter'}</span>
                </DialogTitle >
                <Buttons startIcon={<GoogleIcon />} buttonText="Sign in with Google" />
                <Buttons startIcon={<AppleIcon />} buttonText="Sign in with Apple" />
                <p className={styles.para}><span className={styles.paraSpan}>or</span></p>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Phone, email or username" variant="outlined" />
                </Box>
                <Buttons buttonText="Next" />
                <Buttons buttonText="Forgot Password" />
                <span>Don't have an account? <Link style={{ textDecoration: 'none', color: 'blue' }} to='/signup'> Sign up</Link>.</span>
            </div>
        </Dialog>
    )
}

export default Login