import FileDropPicker from '@Components/FIleDropPicker/FIleDropPicker';
import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box, Grid, styled, Typography, useTheme
} from '@mui/material';
import { setImportClientsDialog } from '@Screens/Clients/Store/clientsSlice';
import cls from 'classnames';
import SampleCsv from 'public/Assets/Svgs/sample-csv.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';

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

function ImportClientsDialog(props) {

    const defaultValues = {
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

    const [files, setFiles] = useState([])
    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const renderFiles = () => {


        return files.map(item =>
            <Box>
                {/* <FontAwesomeIcon icon="fa-light fa-file-csv" /> */}
                {item[0].name}

            </Box>
        )

    }
    return (
        <RightDialogLayout
            onClose={() => dispatch(setImportClientsDialog(false))}
            actionButtons={null}
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum est commodo neque dapibus dignissim. Ut et justo dapibus mauris facilisis eleifend in molestie ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Donec vehicula tortor eget mi interdum tempus. Proin a tempus dolor, luctus rutrum sem. Ut viverra dapibus sodales. Vivamus vel nulla at turpis sodales rhoncus. In porta nisi vitae finibus venenatis. Suspendisse pretium, ipsum non tincidunt tincidunt, mi urna semper tellus, non feugiat tellus sem quis sem. Nam viverra vitae ligula sit amet blandit.  Sed ullamcorper porttitor quam in ultrices. Nullam vehicula magna nisl.
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
                        <FileDropPicker setFiles={setFiles} />

                        {console.log("files are ", files)}

                        <Box>
                            {renderFiles()}
                        </Box>

                    </Grid>


                </Grid>
            </Container>
        </RightDialogLayout >
    );
}

export default ImportClientsDialog