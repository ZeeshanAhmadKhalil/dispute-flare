import BaseCheckbox from '@Components/Table/Components/CheckBox/CheckBox';
import SortIcons from '@Components/Table/Components/SortIcons/SortIcons';
import { styled } from '@mui/material/styles';
import {
    DataGrid as MuiDataGrid
} from '@mui/x-data-grid';
import { setDefaultColumnsVisibility } from '@Screens/Client/Store/clientsSlice';
import { setToolbar } from '@Screens/Shared/Store/sharedSlice';
import HeaderSeparator from 'public/Assets/Svgs/HeaderSeparator.svg';
import { useDispatch } from 'react-redux';
import Toolbar from './Components/Toolbar/Toolbar';

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

function Table(props) {

    const {
        title,
        columns,
        rows,
        setColumnVisibility,
        setAllColumnsVisibility,
        onSelectionModelChange,
    } = props || {}

    const dispatch = useDispatch()

    return (
        <div style={{ height: '70%', width: '100%' }}>
            <DataGrid
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
        </div>
    );
}

export default Table