import {
    Box, Typography,
} from '@mui/material'
import React from 'react'
import {
    styled, useTheme, theme
} from '@mui/material'
import FileIcon from 'public/Assets/Svgs/file.svg'
import Sendicon from 'public/Assets/Svgs/sendicon.svg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';


const Container = styled(Box)(({ theme, width, height }) => {
    return {
        clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
        display: "flex",
        width: width,
        height: height,
        marginBottom: '1em',
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "0px",
        borderRadius: "1rem"
    }
})

const ActionsWrapper = styled(Box)(({ theme }) => {
    return {
        display: "flex",
        flexDirection: "row",
        gap: "7px",
        marginTop: "1rem"
    }
})
const TitleWrapper = styled(Box)(({ theme }) => {
    return {
        marginTop: "15px",
        width: "100%",
        paddingLeft: "0rem",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    }
})


function FileSingle(props) {

    const { actions, title, width, height } = props || {};
    const {
        palette
    } = useTheme()




    return (
        <Container width={width} height={height}>
            <Box>
                {
                    console.log(palette.icon.inactive)
                }
                <MenuIcon color={palette.icon.inactive} />

            </Box>
            <FileIcon width={53} height={73} />

            {
                actions && <ActionsWrapper>
                    <AddCircleIcon color="secondary" sx={{ width: "40px", height: "40px" }} />
                    <Sendicon width="35px" height="35px" />
                </ActionsWrapper>
            }

            <TitleWrapper>
                <Typography color="text.xxxGrey" >

                    {title}
                </Typography>
            </TitleWrapper>
        </Container>
    )
}

export default FileSingle


