import FileDropPicker from '@Components/FileDropPicker/FileDropPicker'
import {
    importClientDesc
} from '@Config/constants'
import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout'
import {
    Box,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material'
import LinearProgress, {
    linearProgressClasses
} from '@mui/material/LinearProgress'
import {
    setImportClientsDialog
} from '@Screens/Client/Store/clientsSlice'
import cls from 'classnames'
import Csv from 'public/Assets/Svgs/csv.svg'
import SampleCsv from 'public/Assets/Svgs/sample-csv.svg'
import Tick from 'public/Assets/Svgs/tick.svg'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import ImportClientActions from './ImportClientActions'

const Container = styled(Box)(({ theme }) => {

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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}))


function ImportClientsDialog(props) {

    const defaultValues = {
        files: []
    }

    const dispatch = useDispatch()
    const {
        palette: {
            text,
        }
    } = useTheme()


    const {
    } = useSelector(state => state.shared)
    const {
        importClientsDialog
    } = useSelector(state => state.clients)

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
        setValue,
        getValues,
    } = useForm({
        mode: 'onChange',
        defaultValues,
    })

    const watchFiles = watch('files')

    const renderFiles = () => {

        return watchFiles.map(item =>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingX: "1rem",
                    justifyContent: "space-between",
                }
                }
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingY: "1rem"
                    }}
                >
                    <Csv
                        height={50}
                        width={50}
                    />
                    <Typography
                        color="text.xxxGrey"
                        sx={{
                            paddingLeft: 3,
                            fontWeight: 'bold'
                        }}
                        variant='h6'
                    >
                        {item?.name}
                    </Typography>
                </Box>
                <Box>
                    <Tick
                        height={15}
                        width={15}
                    />
                </Box>
            </Box>
        )

    }
    return (
        <RightDialogLayout
            onClose={() => dispatch(setImportClientsDialog(false))}
            actionButtons={
                <ImportClientActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setImportClientsDialog(false))
                    }
                />
            }
            open={importClientsDialog}
            closeBtnText="IMPORT"
            title={"Import Clients via CSV"}
        >
            <Container>
                <Grid
                    container
                    rowSpacing={3}
                    className={cls(
                        'border-red-700',
                        'border-0',
                        'flex',
                        'items-center',
                    )}
                >
                    <Grid item md="7" xs="12">
                        <Typography
                            sx={{
                                mb: 0.5,
                                fontWeight: 600,
                            }}
                            color="text.xxxGrey"
                            variant='h6'
                        >
                            Import Data
                        </Typography>
                        <Typography
                            className={cls(
                                'text-justify'
                            )}
                            color="text.secondarish"
                            variant='body2'
                            component="div"
                        >
                            {importClientDesc}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md="5"
                        xs="12"
                    >
                        <Box
                            className={cls(
                                'border-red-700',
                                'border-0',
                                'justify-center',
                                'items-center',
                                'flex',
                                'flex-col',
                                'cursor-pointer'
                            )}
                        >
                            <SampleCsv
                                height={100}
                                width={100}
                            />
                            <Typography
                                sx={{
                                    mt: 1,
                                    textDecoration: 'underline'
                                }}
                                color={"text.link"}
                                variant='caption'
                            >
                                Download sample CSV file
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs="12"
                    >
                        <FileDropPicker
                            setValue={setValue}
                            getValues={getValues}
                        />
                        <Box sx={{ marginTop: "1rem" }}>
                            {renderFiles()}
                            <BorderLinearProgress
                                variant="determinate"
                                value={50}
                                sx={{ marginX: "1rem" }}
                            />
                        </Box>

                    </Grid>


                </Grid>
            </Container>
        </RightDialogLayout >
    )
}

export default ImportClientsDialog