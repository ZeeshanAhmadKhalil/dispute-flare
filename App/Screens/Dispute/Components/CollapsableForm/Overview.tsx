import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import Table from '@Components/Table/Table';
import {
    Box,
    useTheme
} from '@mui/material';

function Overview(props: any) {

    const {
        tables,
        columns,
        bureauList,
    } = props || {}

    const {
        palette: {
            borders,
        }
    }: any = useTheme()

    const renderCollapses =
        tables.map((
            {
                name,
                rows
            }: any,
            key: any
        ) => {

            return (
                <CollapsableForm
                    title={name}
                    defaultOpen={!key}
                >
                    <Table
                        title={name}
                        checkboxSelection={false}
                        columns={columns}
                        rows={rows}
                        height={280}
                        borderColor={borders?.gray}
                        hidePagination={true}
                    />
                </CollapsableForm >
            )
        })

    return (
        <Box>
            {renderCollapses}
        </Box>
    )
}

export default Overview