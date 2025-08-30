import { Grid, Box, Button } from "@mui/material";

const Activities = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
                <Grid item size={12}>
                    <Button size="large">PROGRAMACIÓN COMPLETA</Button>
                </Grid>
                <Grid item size={6}>
                    <Button>CONCIERTOS Y FERIAS</Button>
                </Grid>
                <Grid item size={6}>
                    <Button>ESCENARIOS ARTÍSTICOS</Button>
                </Grid>
                <Grid item size={6}>
                    <Button>EXPOSICIONES</Button>
                </Grid>
                <Grid item size={6}>
                    <Button>TALLERES ACADÉMICOS</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Activities;
