import BaseCheckbox from '@Components/Table/Components/CheckBox/CheckBox';
import SortIcons from '@Components/Table/Components/SortIcons/SortIcons';
import { styled } from '@mui/material/styles';
import {
    DataGrid as MuiDataGrid
} from '@mui/x-data-grid';
import Toolbar from '@Components/Table/Components/Toolbar/Toolbar'
import HeaderSeparator from 'public/Assets/Svgs/HeaderSeparator.svg';

const DataGrid = styled(MuiDataGrid)(({ theme }) => {

    const {
        tableHeader,
        tableSeparator,
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
        '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 600,
            fontSize: 14,
        },
        '& .MuiDataGrid-cell': {
            borderBottomColor: tableSeparator?.main
        },
        '& .MuiDataGrid-cell:focus,\
        .MuiDataGrid-cell:focus-within,\
        .MuiDataGrid-columnHeader:focus,\
        .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
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
        '& .MuiDataGrid-columnHeaderCheckbox,\
        .MuiDataGrid-cellCheckbox': {
            minWidth: '70px !important',
        },
        // '& .MuiDataGrid-columnHeaderCheckbox \
        // .MuiDataGrid-columnHeaderTitleContainer': {
        //     justifyContent: 'flex-start',
        //     marginLeft: 4,
        // },
    }
})

function Table(props) {

    const {
        columns,
        rows,
    } = props || {}

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowsPerPageOptions={[5, 25, 50, 100]}
                disableSelectionOnClick
                sx={{
                    mt: 2,
                    backgroundColor: 'tableBody.main',
                    borderColor: 'transparent',
                    color: 'text.grey',
                }}
                checkboxSelection
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
                    Toolbar,
                }}
            />
        </div>
    );
}

export default Table