import { Box } from "@mui/material";
import videoSrc from "/videos/zaquesazipa_promo.mp4";
import VideoPlayer from "/src/components/VideoPlayer/VideoPlayer.jsx";
import Activities from "./Activities.jsx";

const Info = () => {
    return (
        <>
            <Box
                container
                component="section"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100dvh",
                }}
            >
                <VideoPlayer src={videoSrc} title="Zaquesa Zipa Promo" />
                <Activities />
            </Box>
        </>
    );
};

export default Info;
