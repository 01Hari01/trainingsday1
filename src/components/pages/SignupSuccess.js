import {Box, Typography} from "@mui/material";

const Success=()=>{
    return(
        <>
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    height:'100vh',
                    width:'100vw',

            }}
                >
                <Typography variant="h3" component="h1" sx={{color:'green'}}>Registration Successful!</Typography>
                <Typography variant="body1" gutterBottom component="p" sx={{color:'green'}}>Your account has been successfully created.</Typography>
            </Box>
        </>
    )
}
export default Success;