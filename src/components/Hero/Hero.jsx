//#region imports
import { Grid, Box } from "@mui/material";
import { H1, H2, H5 } from "/src/theme/typography.jsx";
import sculpture from "/src/assets/images/sculpture.png";
//#endregion


const Hero = () => {
  return (
    <Box sx={{ textAlign: 'center', alignContent: 'center', height: '100vh' }} >
      <Box item >
        <H1 aria-label="Title">
          Zaquesazipa
        </H1>
      </Box>
      <Box >
        <H2 aria-label="Subtitle">
          XVIII FESTIVAL DE ARTE Y CULTURA
        </H2>
      </Box>
      <Box>
        <H5 aria-label="Location">
          FUNZA 2025
        </H5>
      </Box>
      <Box>
        <img src={sculpture} alt="Sculpture" style={{ width: '300px', height: 'auto', marginTop: '20px' }} />
      </Box>
    </Box >
  )
}

export default Hero

