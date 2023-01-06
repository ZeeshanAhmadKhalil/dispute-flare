import BaseCheckbox from '@Components/Table/Components/CheckBox/CheckBox';
import SortIcons from '@Components/Table/Components/SortIcons/SortIcons';
import { styled } from '@mui/material/styles';
import { Box, ThemeProvider, useTheme } from '@mui/system';
import {
    DataGrid as MuiDataGrid
} from '@mui/x-data-grid';
import { setDefaultColumnsVisibility } from '@Screens/Client/Store/clientsSlice';
import { setToolbar } from '@Screens/Shared/Store/sharedSlice';
import HeaderSeparator from 'public/Assets/Svgs/HeaderSeparator.svg';
import AddCircle from 'public/Assets/Svgs/add-circle.svg';
import { useDispatch } from 'react-redux';
import Toolbar from './Components/Toolbar/Toolbar';
import { lightTheme } from '@Config/theme';
import cls from 'classnames'
import { setAddCreditMonitoringInfoDialog } from '@Screens/Dispute/Store/disputeSlice';

const DataGrid = styled(MuiDataGrid)(({ theme }) => {

    const {
        tableHeader,
        tableSeparator,
        tableBody,
        text,
    } = theme.palette || {}

    return {
        '& .MuiDataGrid-columnHeaders': {
            backgroundColor: tableHeader?.main,
            borderBottomWidth: 0
        },
        '& .MuiDataGrid-columnSeparator': {
            marginRight: 10,
            display: 'none'
        },
        '& .separator-header .MuiDataGrid-columnSeparator': {
            marginRight: 10,
            display: 'flex'
        },
        '& .settings-header': {
            cursor: 'pointer',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 600,
            fontSize: 14,
        },
        '& .MuiDataGrid-cell': {
            borderBottomColor: tableSeparator?.main,
        },
        '& .MuiDataGrid-cell:focus,\
        .MuiDataGrid-cell:focus-within,\
        .MuiDataGrid-columnHeader:focus,\
        .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
        },
        '& .MuiDataGrid-footerContainer': {
            borderTopWidth: 0,
            backgroundColor: tableHeader?.main,
        },
        '& .MuiDataGrid-footerContainer p,\
        .MuiDataGrid-footerContainer button,\
        .MuiSelect-select': {
            color: text.grey,
        },
        '& .Mui-disabled': {
            opacity: 0.5,
        },
        '& .MuiTablePagination-selectIcon': {
            fill: text.grey,
        },
        '& .MuiDataGrid-cell--editing.MuiDataGrid-cell.MuiDataGrid-cell--textLeft.MuiDataGrid-cell--editable': {
            backgroundColor: tableBody.main,
        },
        '& .MuiSvgIcon-root.MuiSelect-icon': {
            color: text.grey,
        },
    }
})

const NoCreditMonitoringInfo = ({
    xGrey3,
}) => (
    <Box
        className={cls(
            'no-credit-monitoring-info'
        )}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '0px solid red',
            zIndex: 999,
        }}
    >
        <Box>
            <AddCircle
                height={80}
                width={80}
            />
        </Box>
        <Box
            sx={{
                fontSize: 20,
                fontWeight: 'bold',
                mt: 3,
                color: xGrey3
            }}
        >
            Please add Credit Monitoring Information to start disputing
        </Box>
    </Box>
)
const NoRows = ({
    title,
    xGrey3,
}) => (
    <Box
        className={cls(
            'no-credit-monitoring-info'
        )}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '0px solid red',
            zIndex: 999,
        }}
    >
        <Box
            sx={{
                fontSize: 40,
                fontWeight: 'bold',
                mt: 3,
                color: xGrey3
            }}
        >
            {`You have no ${title}!`}
        </Box>
        <Box
            sx={{
                fontSize: 20,
                fontWeight: 'bold',
                mt: 1,
                color: xGrey3
            }}
        >
            {`Click to create your first ${title}`}
        </Box>
    </Box>
)

function Table(props) {

    const {
        title,
        columns,
        rows,
        setColumnVisibility,
        setAllColumnsVisibility,
        onSelectionModelChange,
        hasCreditMonitoringInfo,
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            text: { xGrey3 }
        }
    } = useTheme()

    const handleClick = () => {

        if (hasCreditMonitoringInfo === false)
            dispatch(
                setAddCreditMonitoringInfoDialog(true)
            )
        else if (rows?.length == 0)
            null
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <div
                onClick={handleClick}
                style={{
                    height: '70%',
                    width: '100%',
                    cursor: hasCreditMonitoringInfo || rows?.length == 0 ?
                        'pointer'
                        :
                        'default',
                }}

            >
                <DataGrid
                    localeText={{
                        noRowsLabel:
                            hasCreditMonitoringInfo ?
                                <NoRows
                                    xGrey3={xGrey3}
                                    title={title}
                                />
                                :
                                <NoCreditMonitoringInfo
                                    xGrey3={xGrey3}
                                />
                    }}
                    onSelectionModelChange={onSelectionModelChange}
                    loading={false}
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5, 25, 50, 100]}
                    disableSelectionOnClick
                    disableColumnMenu
                    checkboxSelection
                    sx={{
                        mt: 2,
                        backgroundColor: 'tableBody.main',
                        borderColor: 'transparent',
                        color: 'text.grey',
                    }}
                    onColumnHeaderClick={({ field }) => {
                        if (field == 'settings')
                            dispatch(setToolbar(true))
                    }}
                    components={{
                        ColumnResizeIcon: () => (
                            <HeaderSeparator
                                height={35}
                                width={5}
                            />
                        ),
                        BaseCheckbox: (props) => (
                            <BaseCheckbox
                                props={{
                                    ...props,
                                }}
                            />
                        ),
                        ColumnSortedAscendingIcon: () =>
                            <SortIcons asc />,
                        ColumnSortedDescendingIcon: () =>
                            <SortIcons des />,
                        ColumnUnsortedIcon: () =>
                            <SortIcons />,
                    }}
                />
                <Toolbar
                    title={title}
                    columns={columns}
                    setColumnVisibility={setColumnVisibility}
                    setAllColumnsVisibility={setAllColumnsVisibility}
                    setDefaultColumnsVisibility={setDefaultColumnsVisibility}
                />
            </div >
        </ThemeProvider>
    );
}

export default Table