import React, {useEffect, useState} from "react";
import {Card, CardContent, Container, Typography} from "@mui/material";

const PriceList = ({brand, vHType, modelCode, engineType}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${vHType}/marcas/${brand.codigo}/modelos/${modelCode}/anos/${engineType}/`);
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
    }, [brand, vHType, modelCode, engineType]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    return (
        <Container>
            {data &&
                <Card>
                    <CardContent>
                        <Typography variant="h6">Model year:</Typography>
                        <Typography>{data.AnoModelo}</Typography>
                        {/*<Typography variant="h6">CodigoFipe:</Typography>*/}
                        {/*<Typography>{data.CodigoFipe}</Typography>*/}
                        <Typography variant="h6">Fuel:</Typography>
                        <Typography>{data.Combustivel}</Typography>
                        <Typography variant="h6">Brand:</Typography>
                        <Typography>{data.Marca}</Typography>
                        {/*<Typography variant="h6">MesReferencia:</Typography>*/}
                        {/*<Typography>{data.MesReferencia}</Typography>*/}
                        <Typography variant="h6">Model:</Typography>
                        <Typography>{data.Modelo}</Typography>
                        <Typography variant="h6">Fuel abbreviation:</Typography>
                        <Typography>{data.SiglaCombustivel}</Typography>
                        <Typography variant="h6">Vehicle type:</Typography>
                        <Typography>{data.TipoVeiculo}</Typography>
                        <Typography variant="h6">Price:</Typography>
                        <Typography>{data.Valor}</Typography>
                    </CardContent>
                </Card>}
        </Container>
    )
}

export default PriceList