import BaseCheckbox from '@Components/Table/Components/CheckBox/CheckBox';
import SortIcons from '@Components/Table/Components/SortIcons/SortIcons';
import { lightTheme } from '@Config/theme';
import { styled } from '@mui/material/styles';
import {
    Box,
    ThemeProvider,
    useTheme
} from '@mui/system';
import {
    DataGrid as MuiDataGrid
} from '@mui/x-data-grid';
import { setAddCreditMonitoringInfoDialog } from '@Screens/Dispute/Store/disputeSlice';
import { setToolbar } from '@Screens/Shared/Store/sharedSlice';
import cls from 'classnames';
import AddCircle from 'public/Assets/Svgs/add-circle.svg';
import HeaderSeparator from 'public/Assets/Svgs/HeaderSeparator.svg';
import { useDispatch } from 'react-redux';
import Toolbar from './Components/Toolbar/Toolbar';

const DataGrid = styled(MuiDataGrid)((
    props
) => {

    const {
        theme,
        headerColor,
        stripedRows,
        rowSeparatorColor,
    } = props || {}

    const {
        text,
        tableBody,
        tableHeader,
        tableRow,
    } = theme.palette || {}

    return {
        '& .MuiDataGrid-columnHeaders': {
            backgroundColor: headerColor,
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
            borderBottomColor: rowSeparatorColor,
        },
        '& .Mui-even': {
            backgroundColor: stripedRows ?
                tableRow.main
                :
                undefined
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
    noRowsAction,
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
                color: xGrey3,
                textAlign: 'center'
            }}
        >
            {`You have no ${title}!`}
        </Box>
        {noRowsAction &&
            <Box
                sx={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    mt: 1,
                    color: xGrey3,
                    textAlign: 'center'
                }}
            >
                {`Click to create your first ${title}`}
            </Box>
        }
    </Box>
)

function Table(props) {

    const {
        palette: {
            text: { xGrey3 },
            tableHeader,
            tableSeparator,
        }
    } = useTheme()

    const {
        rows,
        title,
        columns,
        autoHeight,
        onRowClick,
        borderColor,
        noRowsAction,
        height = 650,
        hidePagination,
        processRowUpdate,
        stripedRows = false,
        setColumnVisibility,
        hideSeparator = false,
        onSelectionModelChange,
        setAllColumnsVisibility,
        checkboxSelection = true,
        setDefaultColumnsVisibility,
        hasCreditMonitoringInfo = true,
        headerColor = tableHeader?.main,
        rowSeparatorColor = tableSeparator?.main,
    } = props || {}

    let columnsToPass = columns
    if (!(
        rows?.length > 0
        && (title != "Dispute" || hasCreditMonitoringInfo)
        && columns.some(obj => obj?.field == 'settings')
    ))
        columnsToPass = columns.filter(
            obj => obj?.field != 'settings'
        )

    const dispatch = useDispatch()

    const handleClick = () => {

        if (hasCreditMonitoringInfo === false)
            dispatch(
                setAddCreditMonitoringInfoDialog(true)
            )
        else if (rows?.length == 0)
            noRowsAction?.()
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
                    experimentalFeatures={{
                        newEditingApi: true,
                    }}
                    processRowUpdate={processRowUpdate}
                    stripedRows={stripedRows}
                    rowSeparatorColor={rowSeparatorColor}
                    headerColor={headerColor}
                    onRowClick={onRowClick}
                    hideFooter={hidePagination}
                    onSelectionModelChange={onSelectionModelChange}
                    loading={false}
                    rows={rows}
                    autoHeight={autoHeight}
                    columns={columnsToPass}
                    rowsPerPageOptions={[5, 25, 50, 100]}
                    disableSelectionOnClick
                    disableColumnMenu
                    checkboxSelection={checkboxSelection}
                    getRowClassName={({
                        indexRelativeToCurrentPage
                    }) =>
                        indexRelativeToCurrentPage % 2 === 0 ?
                            'Mui-even'
                            :
                            'Mui-odd'
                    }
                    localeText={{
                        noRowsLabel:
                            hasCreditMonitoringInfo ?
                                <NoRows
                                    noRowsAction={noRowsAction}
                                    xGrey3={xGrey3}
                                    title={title}
                                />
                                :
                                <NoCreditMonitoringInfo
                                    xGrey3={xGrey3}
                                />
                    }}
                    sx={{
                        mt: 2,
                        backgroundColor: 'tableBody.main',
                        borderColor: 'transparent',
                        color: 'text.grey',
                        border: `1px solid ${borderColor}`,
                        height,
                    }}
                    onColumnHeaderClick={({ field }) => {
                        if (field == 'settings')
                            dispatch(setToolbar(true))
                    }}
                    components={{
                        ColumnResizeIcon: () => (
                            hideSeparator ?
                                null
                                :
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
                {(
                    rows?.length > 0
                    && (title != "Dispute" || hasCreditMonitoringInfo)
                    && columns.some(obj => obj?.field == 'settings')
                ) &&
                    <Toolbar
                        title={title}
                        columns={columns}
                        setColumnVisibility={setColumnVisibility}
                        setAllColumnsVisibility={setAllColumnsVisibility}
                        setDefaultColumnsVisibility={setDefaultColumnsVisibility}
                    />
                }
            </div >
        </ThemeProvider>
    );
}

export default Table