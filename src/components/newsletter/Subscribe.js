import React from 'react'
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


export const Subscribe = () => {

    return (
        <>
            <Grid container spacing={2} direction="row" justifyContent="left" alignItems="left">
                <Grid item>
                    <Typography variant="h6" component="div" gutterBottom fontSize={19}>
                        LET'S STAY IN TOUCH
                    </Typography>
                    <Typography variant="p" component="div" gutterBottom fontSize={11}>
                        Get updates on sales specials and more
                    </Typography>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <IconButton variant="outlined">
                        <SendOutlinedIcon style={{fontSize:'30px'}} />

                    </IconButton>
                </Grid>
               
            </Grid>



        </>
    )
}
