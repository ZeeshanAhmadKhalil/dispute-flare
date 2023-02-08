import { Tooltip } from '@mui/material';

function DropDownCell(props: any) {

    const {
        value
    } = props || {}

    return (
        <Tooltip
            title={"Double click to change"}
            placement="right"
        >
            <span className="table-cell-trucate">{value}</span>
        </Tooltip>
    )
}

export default DropDownCell