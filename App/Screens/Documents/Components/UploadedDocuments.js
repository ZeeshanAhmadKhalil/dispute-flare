import {
    Box, Typography,
    useTheme
} from '@mui/material'
import React from 'react'
import File from 'public/Assets/Svgs/file.svg';
import Sendicon from 'public/Assets/Svgs/sendicon.svg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {

} from '@mui/material'
function UploadedDocuments() {


    const {
        palette
    } = useTheme()


    return (
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "1rem", marginTop: "1rem" }}>

            <Box sx={{
                writingMode: "vertical-rl", textOrientation: "sideways-right",
                WebkitTransform: "rotate(180deg)", textAlign: "center",
            }}>
                _____  Uploaded Documents _____

            </Box>
            <Box sx={{
                clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
                display: "flex",
                width: '180px',
                height: "220px",
                marginBottom: '1em',
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "0px",
                borderRadius: "5px"
            }}>
                <File width={53} height={73} />

                <Box sx={{ display: "flex", flexDirection: "row", gap: "7px", marginTop: "1rem" }}>
                    <AddCircleIcon color="secondary" sx={{ width: "40px", height: "40px" }} />
                    <Sendicon width="35px" height="35px" />
                </Box>

                <Box sx={{ marginTop: "15px" }}>
                    <Typography color="text.xxxGrey">

                        Bank Copy
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
                display: "flex",
                width: '180px',
                height: "220px",
                marginBottom: '1em',
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "0px",
                borderRadius: "5px"
            }}>
                <File width={53} height={73} />

                <Box sx={{ display: "flex", flexDirection: "row", gap: "7px", marginTop: "1rem" }}>
                    <AddCircleIcon color="secondary" sx={{ width: "40px", height: "40px" }} />
                    <Sendicon width="35px" height="35px" />
                </Box>

                <Box sx={{ marginTop: "15px" }}>
                    <Typography color="text.xxxGrey">

                        Bank Copy
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
                display: "flex",
                width: '180px',
                height: "220px",
                marginBottom: '1em',
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "0px",
                borderRadius: "5px"
            }}>
                <File width={53} height={73} />

                <Box sx={{ display: "flex", flexDirection: "row", gap: "7px", marginTop: "1rem" }}>
                    <AddCircleIcon color="secondary" sx={{ width: "40px", height: "40px" }} />
                    <Sendicon width="35px" height="35px" />
                </Box>

                <Box sx={{ marginTop: "15px" }}>
                    <Typography color="text.xxxGrey">

                        Bank Copy
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default UploadedDocuments