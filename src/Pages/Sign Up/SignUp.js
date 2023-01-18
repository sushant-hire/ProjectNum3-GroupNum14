import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import Buttons from '../../Molecules/Buttons/Buttons';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const SignUp = () => {

    const [open] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [step1, setStep1] = useState(false)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [uMessage, setUMessage] = useState('')
    const [message, setMessage] = useState('');
    const [message1, setMessage1] = useState('');

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (uMessage !== "Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length.") {
            localStorage.setItem("username", username)
        }
        if (message1 !== "Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.") {
            localStorage.setItem("password", password)
        }
        if (message !== "Invalid email! Your email ID must contain all domain requirements.") {
            localStorage.setItem("email", email)
        }

        if ((uMessage !== "Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length.") && (message1 !== "Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.") && (message !== "Invalid email! Your email ID must contain all domain requirements.")) {
            alert("Successfully registered")
        }
    }

    const usernameValidation = () => {
        const reg = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
        if (username === "") {
            setUMessage("Enter Username")
        }
        else if (!reg.test(username)) {
            setUMessage("Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length.")
        }
        else {
            setUMessage("")
        }
    }

    function Checkpassword() {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!strongRegex.test(password) && password !== "") {
            setMessage1("Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.");
        } else if (password === "") {
            setMessage1("Enter Password")
        } else {
            setMessage1("")
        }
    }

    function Checkemail() {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (!regEx.test(email) && email !== "") {
            setMessage("Invalid email! Your email ID must contain all domain requirements.");
        } else if (email === "") {
            setMessage("Enter Email")
        } else {
            setMessage("")
        }
    }

    function HandleStep1() {
        setStep1(true);
    }

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                aria-labelledby="responsive-dialog-title"
                PaperProps={{
                    style: {
                        borderRadius: '15px',
                    },
                }}
            >
                {step1 ? (
                    <>
                        <div className={styles.newDialogContainer}>
                            <DialogTitle className={styles.dialogHeading} id="responsive-dialog-title">
                                <span style={{ fontSize: '2vw', fontWeight: 'bolder', position: 'relative', top: '40px' }}>{'Create Your Account'}</span>
                            </DialogTitle >
                            <input

                                type="text"
                                placeholder='Username'
                                value={username}
                                onChange={handleUsername} required
                            />
                            <span style={{ color: 'red' }}>{uMessage}</span>

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange} required
                            />
                            <span style={{ color: 'red' }}>{message}</span>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange} required
                            />
                            <span style={{ color: 'red' }}>{message1}</span>


                            <h4>Date of birth</h4>
                            <p style={{ fontSize: '14px', marginLeft: '9.5rem', marginRight: '9.5rem', display: 'flex', alignItems: 'center' }}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        </div>


                        <Stack component="form" noValidate spacing={3} className={styles.birthDayContainer} >
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Stack>


                        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: '40px' }}>
                            <Buttons buttonText="Submit" onClick={() => { Checkpassword(); Checkemail(); usernameValidation(); handleSubmit(); }} />
                        </div>
                    </>)



                    :





                    (<div className={styles.dialogContentContainer} >
                        <TwitterIcon style={{ fontSize: '2.5vw', color: '#00ACEE', position: 'relative', top: '50px' }} />
                        <DialogTitle className={styles.dialogHeading} id="responsive-dialog-title">
                            <span style={{ fontSize: '2vw', fontWeight: 'bolder', position: 'relative', top: '40px' }}>{'Join Twitter today'}</span>
                        </DialogTitle >
                        <Buttons startIcon={<GoogleIcon />} buttonText="Sign in with Google" />
                        <Buttons startIcon={<AppleIcon />} buttonText="Sign in with Apple" />
                        <p className={styles.para}><span className={styles.paraSpan}>or</span></p>
                        <Buttons buttonText="Sign up with phone or email" onClick={HandleStep1} />
                        <p style={{ fontSize: '14px', marginLeft: '9.5rem', marginRight: '9.5rem' }} >By signing up, you agree to the <span style={{ color: 'blue' }}>Terms of Service</span> and <span style={{ color: 'blue' }}>Privacy Policy</span>, including <span style={{ color: 'blue' }}>Cookie Use</span>.</p>
                        <span>Already have an account?  <Link style={{ textDecoration: 'none', color: 'blue' }} to='/'> Login</Link>.</span>
                    </div>)
                }
            </Dialog>
        </>
    )
}

export default SignUp