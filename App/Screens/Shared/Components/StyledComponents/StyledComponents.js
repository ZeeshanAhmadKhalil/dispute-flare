import {
    Box,
    styled
} from "@mui/material"

const AddItemContainer = styled(Box)(({ theme }) => {

    const {
        dialog: {
            main
        }
    } = theme.palette || {}

    return {
        backgroundColor: main,
        padding: 20,
        marginTop: 10,
    }
})

export {
    AddItemContainer
}
