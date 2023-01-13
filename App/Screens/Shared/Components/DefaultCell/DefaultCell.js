import { Typography } from "@mui/material";

function DefaultCell({ value }) {
    return (
        <Typography variant="caption" fontWeight="medium" color="text">
            {value}

        </Typography>
    );
}
export default DefaultCell;