import React, {useEffect, useState} from "react";
import {Container, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";

const ModelList = ({brand, vHType, setModelCode}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${vHType}/marcas/${brand.codigo}/modelos`);
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
    }, [brand, vHType]);


    return (
        <Container>
            <Typography sx={{marginBottom: '15px', marginTop: '15px'}}
                        style={{backgroundColor: 'white', borderRadius: '15px', width: '400px'}}
                        variant="h3">{brand.nome}</Typography>
            {/*<List style={{overflow: 'scroll', height: '10vh'}}>*/}
            {/*    {data && data.modelos && data.modelos.map(item => (*/}
            {/*        <ListItem style={{backgroundColor: 'white'}}*/}
            {/*                  key={item.codigo}>*/}
            {/*            <ListItemText*/}
            {/*                primary={item.nome}*/}
            {/*                secondary={item.codigo}*/}
            {/*            />*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
            <FormControl fullWidth style={{backgroundColor: 'white', width: '400px', borderRadius: '15px'}}>
                <InputLabel color='secondary' id="demo-simple-select-label">Choose model</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Choose model"
                    onChange={(event) => setValue(event.target.value)}
                    color='secondary'
                >
                    {data && data.modelos && data.modelos.map(item => (
                        <MenuItem onClick={() => setModelCode(item.codigo)} value={item.codigo}>{item.nome}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Container>
    )
}

export default ModelList