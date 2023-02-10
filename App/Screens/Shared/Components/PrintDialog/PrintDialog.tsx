import Button from '@Components/Button/Button'
import Table from '@Components/Table/Table'
import CloseIcon from '@mui/icons-material/Close'
import {
    Box,
    DialogActions,
    DialogContent,
    Paper,
    styled,
    Typography,
    useTheme
} from '@mui/material'
import MuiDialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { setPrintDialog } from '@Screens/Shared/Store/sharedSlice'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Draggable from 'react-draggable'
import {
    useDispatch,
    useSelector
} from 'react-redux'

const Dialog = styled(MuiDialog)(({ theme }) => {

    const {
        text,
        dialog,
    }: any = theme.palette

    return {
        '& .MuiPaper-root': {
            backgroundColor: dialog.main,
            color: text.contrastText,
        }
    }
})

function PaperComponent(props: any) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    )
}

const Title = (props: any) => {
    const { children,
        onClose,
        ...other
    } = props

    const {
        palette: { text }
    }: any = useTheme()

    return (
        <DialogTitle
            sx={{
                m: 0,
                p: 2,
                fontSize: 20,
                fontWeight: 'bolder',
                color: text.grey,
            }}
            {...other}
        >
            {children}
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: ({
                        palette: { icon }
                    }: any) => icon.lightActive,
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
    )
}

function PrintDialog({
    columns,
    tables,
}: any) {

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator,
            text,
            borders,
        }
    }: any = useTheme()

    const {
        printDialog,
    } = useSelector((state: any) => state.shared)

    const handlePrint = () => {

        let overviewWrapper: any = document.querySelector("#overview-wrapper")

        html2canvas(overviewWrapper, {
            windowWidth: overviewWrapper.scrollWidth + 550,
            windowHeight: overviewWrapper.scrollHeight
        }).then(canvas => {

            const imgData = canvas.toDataURL('image/png')

            const pdf = new jsPDF("p", "mm", "a4")

            const imgProps = pdf.getImageProperties(imgData)

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(
                imgData,
                'JPEG',
                0,
                0,
                pdfWidth,
                pdfHeight,
            )
            pdf.save("disputes.pdf")
        })
    }

    const renderTables =
        tables.map(
            ({
                name,
                rows
            }: any, key: any) => {

                return (
                    <Box
                        key={key}
                        sx={{
                            mt: 2,
                        }}
                    >
                        <Typography
                            sx={{
                            }}
                        >
                            {name}
                        </Typography>
                        <Divider
                            sx={{
                                backgroundColor: tableSeparator?.light,
                                mt: 1,
                            }}
                        />
                        <Table
                            title={name}
                            checkboxSelection={false}
                            columns={columns}
                            rows={rows}
                            autoHeight={true}
                            borderColor={borders?.gray}
                            hidePagination={true}
                        />
                    </Box>
                )
            })

    return (
        <Dialog
            onClose={() => dispatch(setPrintDialog(false))}
            open={printDialog}
            fullWidth={true}
            maxWidth="lg"
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <Title
                style={{ cursor: 'move' }}
                id="customized-dialog-title"
                onClose={() => dispatch(setPrintDialog(false))}
            >
                {`Print`}
            </Title>
            <Divider
                sx={{
                    backgroundColor: tableSeparator?.main
                }}
            />
            <DialogContent
            >
                <Box
                    id="overview-wrapper"
                    sx={{ p: 1 }}
                >
                    {renderTables}
                </Box>
            </DialogContent>
            <DialogActions>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            color={"primary"}
                            onClick={handlePrint}
                            style={{
                                borderRadius: 3,
                                paddingLeft: 20,
                                paddingRight: 20,
                                color: text.grey,
                                fontWeight: 'bold',
                                marginLeft: 30,
                            }}
                        >
                            PRINT
                        </Button>
                        <Button
                            color={"text"}
                            onClick={() => dispatch(setPrintDialog(false))}
                            disableElevation
                            style={{
                                color: text.grey,
                                fontWeight: 'bold',
                                marginLeft: 10,
                            }}
                        >
                            CANCEL
                        </Button>
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default PrintDialog