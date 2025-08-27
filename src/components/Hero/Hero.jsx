//#region imports
import { Typography, Grid, Box } from "@mui/material";
import { H1, H2 } from "/src/theme/typography.jsx";
//#endregion


const Hero = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }} >
      <Box item >
        <H1 sx={{ color: '#FFFF', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
          Zaquesazipa
        </H1>
      </Box>
      <Box >
        <H2>
          XVIII FESTIVAL DE ARTE Y CULTURA
        </H2>
      </Box>
      <Grid>
        <Typography
          variant="h5"
          color="accent.main"
        >
          FUNZA 2025
        </Typography>
      </Grid>
    </Box >
  )
}

export default Hero

