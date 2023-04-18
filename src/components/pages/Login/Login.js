import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Container, InputLabel, TextField, Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";


const Login=()=> {
    const [loading,setLoading]=useState(false);
    const {register,handleSubmit}=useForm();
    const navigate=useNavigate();
    const onSubmit=async (data)=>{
        setLoading(true);
        try{
           const {email,password}=data;
           const hashedPassword=await bcrypt.hash(password,10);
           const response=await axios.post('http://localhost:8000/login/',{email,hashedPassword});
           if(response.status===200){
               navigate("/navabr")
           }
           setLoading(false);
        }
        catch (error){
            console.log(error,loading);
        }
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
            }}>
                <Box
                    sx={{
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '1rem',
                        maxWidth: '400px',
                        margin: 'auto',
                        marginTop: '2rem',
                        backgroundColor: 'white',
                    }}
                >
                    <Container component="main" maxWidth="xs">
                        <Typography variant="h4" component="h1" gutterBottom>Login Here</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputLabel>Email:</InputLabel>
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                {...register('email')}
                                type="email"
                                label="Please provide your email address"
                            />
                            <InputLabel>Password:</InputLabel>
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="password"
                                margin="normal"
                                {...register('password')}
                                label="Enter your password"
                            /><br/>
                            <Button fullWidth varinat="contained" color="primary" type="submit" disabled={loading}>Sign In</Button>
                        </form>
                    </Container>

                </Box>


            </Box>

        </>
    );
}

export default Login;