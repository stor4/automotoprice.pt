import React, {useState} from "react";
import {Box, Container} from "@mui/material";
import ModelList from "../lists/modelList";
import BrandList from "../lists/mainList";
import ModelInfoList from "../lists/modelInfoList";
import PriceList from "../lists/priceList";
import background from '../background/vk1776.webp'


const MainApp = () => {
    const [vHtype, setVHType] = useState('carros')
    const [brand, setBrandName] = useState('')
    const [modelCode, setModelCode] = useState('')
    const [engineType, setEngineType] = useState('')

    const style = {
        backgroundImage: `url(${background})`,
        height: '100%',
        backgroundRepeat: 'repeat',
    }

    return (
        <Box style={style} sx={{padding: '15px'}}>
            <BrandList setVHType={setVHType} setBrandName={setBrandName}/>
            <Container>
                <ModelList vHType={vHtype} brand={brand} setModelCode={setModelCode}/>
                <ModelInfoList vHType={vHtype} brand={brand} modelCode={modelCode} setEngineType={setEngineType}/>
            </Container>
            <PriceList vHType={vHtype} brand={brand} modelCode={modelCode} engineType={engineType}/>
        </Box>
    )
}

export default MainApp