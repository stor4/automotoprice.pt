import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

const Footer = () => {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    Telegram: @astor4
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Footer