import { Tooltip } from '@mui/material';

function Status(params) {

    const {
        status
    } = params.row || {}

    return (
        <Tooltip
            title={"Double click to change"}
            placement="right"
        >
            <span className="table-cell-trucate">{status}</span>
        </Tooltip>
    )
}

export default Status