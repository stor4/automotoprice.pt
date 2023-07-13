import React, {useEffect, useState} from "react";
import {Container, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const ModelInfoList = ({vHType, brand, modelCode, setEngineType}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${vHType}/marcas/${brand.codigo}/modelos/${modelCode}/anos/`);
                const data = await response.json();
                setData(data);
                setLoading(false);
                console.log(data)
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [brand, vHType, modelCode]);

    return (
        <Container sx={{marginBottom: '15px', marginTop: '15px'}}>
            <FormControl fullWidth style={{backgroundColor: 'white', width: '400px', borderRadius: '15px'}}>
                <InputLabel color='secondary' id="demo-simple-select-label">Choose engine and year</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Choose engine"
                    color='secondary'
                    onChange={(event) => setValue(event.target.value)}
                >
                    {Array.isArray(data) && data.length !== 0 && data.map(item => (
                        <MenuItem onClick={() => setEngineType(item.codigo)} value={item.codigo}>{item.nome}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Container>
    )
}

export default ModelInfoList