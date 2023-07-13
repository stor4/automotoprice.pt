import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, Container} from '@mui/material';


const BrandList = ({setVHType, setBrandName}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [type, setType] = useState('carros')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/`);
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
    }, [type]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Container sx={{maxWidth: '100%'}}>
            <ButtonGroup variant="contained" color="secondary" sx={{marginBottom: '15px'}}>
                <Button onClick={() => {
                    setType('carros')
                    setVHType('carros')
                    setBrandName('')
                }}>Cars</Button>
                <Button onClick={() => {
                    setType('motos')
                    setVHType('motos')
                    setBrandName('')
                }}>Moto</Button>
                <Button onClick={() => {
                    setType('caminhoes')
                    setVHType('caminhoes')
                    setBrandName('')
                }}>Trucks</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="secondary" sx={{
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: '100%',
                '& > *': {
                    flex: '0 0 auto',
                    margin: '4px',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                },
            }}>
                {data.map((brand) => (
                    <Button onClick={() => setBrandName(brand)} key={brand.codigo}>{brand.nome}</Button>
                ))}
            </ButtonGroup>
        </Container>
    );
};

export default BrandList;
