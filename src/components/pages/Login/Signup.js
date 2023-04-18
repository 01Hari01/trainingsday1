import {Box, Button, Container, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const Signup=()=>{
    const [loading,setLoading]=useState(false);
    const {register, handleSubmit,formState: {errors}} = useForm();
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const onSignup=async(data,e)=>{
        setLoading(true);
        try{
           const response=await axios.post('http://localhost:8000/users/',{
               username:data.username,
               email:data.email,
               password:data.password,
               confirm_password:data.confirm_password
           });
           console.log("inside POST",response.data);
           e.target.reset();
           navigate("/login");
        }
        catch (error) {
            console.log("error",error);
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',

                }}>
                <Box sx={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '1rem',
                    maxWidth: '400px',
                    margin: 'auto',
                    marginTop: '2rem',
                    backgroundColor: 'white',

                }}>
                    <Typography sx={{textAlign:"center"}} variant="h4" component="h2" gutterBottom>Signup Form</Typography>
                    <Container>
                        <form onSubmit={handleSubmit((data, e) => onSignup(data, e))}>

                        <TextField
                            fullWidth
                            name="username"
                            label="Username"
                            variant="outlined"
                            {...register("username")}

                        />
                            {errors.username && <p>Username is mandatory</p>}
                        <TextField
                            fullWidth
                            name="email"
                            type="email"
                            label="Email"
                            {...register("email")}
                            variant="outlined"
                            margin="normal"
                            />
                            {errors.email && <p>Username is mandatory</p>}
                        <TextField
                            fullWidth
                            name="password"
                            type={showPassword? 'text' : 'password'}
                            label="Password"
                            {...register("password")}
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={()=>setShowPassword(!showPassword)} aria-label="toggle password visibility">
                                        {showPassword? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                </InputAdornment>
                                        }}
                            />
                            {errors.password?.type==='required' && <p>Password is mandatory</p>}
                            {errors.password?.type==='minLength' && <p>Password must be at least 6 characters long</p>}
                            <TextField
                                fullWidth
                                name="confirm_password"
                                type={showConfirmPassword ? "text" : "password"}
                                label="Confirm Password"
                                {...register("confirm_password")}
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label="toggle password visibility">
                                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {errors.confirm_password?.type === 'required' && <span>Confirm Password is required</span>}
                            {errors.confirm_password?.type === 'validate' && <span>Passwords should match</span>}
                        <Button fullWidth variant="contained" color="primary" type="submit" disabled={loading}>Register here</Button>
                        </form>
                    </Container>
                </Box>
            </Box>
    </>)
}
export default Signup;