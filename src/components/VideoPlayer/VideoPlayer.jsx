import { Box, Paper } from "@mui/material";

const VideoPlayer = ({ src, title, autoplay = false, muted = false }) => {
    return (
        <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Box
                component="video"
                controls
                autoPlay={autoplay}
                muted={muted}
                sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                }}
            >
                <source src={src} type="video/mp4" title={title} />
                <source src={src.replace(".mp4", ".webm")} type="video/webm" />
                Your browser does not support the video tag.
            </Box>
        </Paper>
    );
};

export default VideoPlayer;
