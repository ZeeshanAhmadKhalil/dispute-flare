import {
    Box,
    styled,
    Divider as MuiDivider,
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
const FormDivider = styled(MuiDivider)(({ theme: {
    palette: {
        tableSeparator,
    }
} }) => {
    return {
        backgroundColor: tableSeparator.dark,
        width: '100%',
        marginTop: 20,
    }
})

export {
    FormDivider,
    AddItemContainer,
}
