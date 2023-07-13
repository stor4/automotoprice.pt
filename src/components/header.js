import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{backgroundColor: '#595959'}}>
                <Typography onClick={() => window.location.reload()} sx={{color: 'white'}}
                            variant='h1'>AutoMotoPrice.pt</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header