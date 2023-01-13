import {
    Box,
    styled
} from "@mui/material";

const Container = styled(Box)(({ theme }) => {

    const {
        background: {
            main,
        }
    } = theme.palette

    return {
        backgroundColor: main,
        border: '0px solid red',
        width: '90%',
        margin: '0 auto',
        marginTop: 25,
        padding: 40,
        borderRadius: 10,
    }
})

const ShadowCard = styled(Box)(({ theme }) => {

    const {
        shadow: {
            main,
        },
    } = theme.palette

    return {
        boxShadow: `0px 2px 7px -3px ${main}`,
    }
})

export {
    Container,
    ShadowCard,
}