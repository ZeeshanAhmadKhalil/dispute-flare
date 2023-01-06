import { Box, Typography } from '@mui/material'
import React from 'react'
import File from 'public/Assets/Svgs/file.svg';
function UploadedDocuments() {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "10px" }}>

            <Box sx={{
                clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
                display: "flex",
                width: '190px',
                height: "220px",
                marginBottom: '1em',
                padding: '2rem 0',
                backgroundColor: "white",
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "0px",
                borderRadius: "5px"
            }}>
                <File width={60} height={80} />

                <Box>
                    <Typography color={"black"}>
                        Bank Copy
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
                display: "flex",
                width: '190px',
                height: "220px",
                marginBottom: '1em',
                padding: '2rem 0',
                backgroundColor: "white",
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "0px",
                borderRadius: "5px"
            }}>
                <File width={60} height={80} />

                <Box>
                    <Typography color={"black"}>
                        Bank Copy
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
                display: "flex",
                width: '190px',
                height: "220px",
                marginBottom: '1em',
                padding: '2rem 0',
                backgroundColor: "white",
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "0px",
                borderRadius: "5px"
            }}>
                <File width={60} height={80} />

                <Box>
                    <Typography color={"black"}>
                        Bank Copy
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default UploadedDocuments