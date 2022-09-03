import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Table(props) {

    const {
        columns,
        rows,
    } = props || {}

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                sx={{
                    mt: 2,
                    backgroundColor: 'tableBody.main',
                    borderColor: 'transparent',
                    color: 'text.grey',
                    '& .custom-header': {
                        backgroundColor: 'rgba(255, 7, 0, 0.55)',
                    },
                }}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default Table