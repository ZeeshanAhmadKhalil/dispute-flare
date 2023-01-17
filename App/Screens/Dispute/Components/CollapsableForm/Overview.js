import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import SecretCell from '@Components/Table/Components/SecretCell/SecretCell';
import Table from '@Components/Table/Table';
import {
    useTheme
} from '@mui/material';
import _ from 'lodash'

function Overview(props) {

    const {
        watchSteps, // watch ur steps -_-
        bureauList,
    } = props || {}

    let columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 50,
            hide: true,
            hidable: true,
        },
        {
            field: 'creditor',
            headerName: 'Creditor',
            width: 210,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'accountNumber',
            headerName: 'Account',
            width: 120,
            headerClassName: 'separator-header',
            hidable: true,
            renderCell: SecretCell,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 120,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'dispute',
            headerName: 'Dispute',
            width: 180,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'reason',
            headerName: 'Reason',
            width: 180,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'instruction',
            headerName: 'Instruction',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'bureaus',
            headerName: 'Bureaus',
            width: 180,
            headerClassName: 'separator-header',
            hidable: true,
        },
    ]
    let rows = [
        {
            id: 1,
            creditor: "HDEKE (Original Creditor: 09)",
            accountNumber: "74346256747565758678456",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: null,
        },
        {
            id: 2,
            creditor: "EISD (Original Creditor: 10A)",
            accountNumber: "74346256747565758678456",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: null,
        },
        {
            id: 3,
            creditor: "EWISD (Original Creditor: 11)",
            accountNumber: "74346256747565758678456",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: null,
        },
        {
            id: 4,
            creditor: "JEW (Original Creditor: 12 AT T)",
            accountNumber: "74346256747565758678456",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: null,
        },
    ]

    const {
        palette: {
            borders,
        }
    } = useTheme()

    const renderCollapses =
        watchSteps.map(
            (item, key) => {

                const {
                    name,
                    creditors,
                } = item

                rows = creditors.map((subItem, key) => {

                    const {
                        name,
                        reason,
                        bureaus,
                    } = subItem

                    let bureausString = []

                    bureauList.map(obj => {

                        if (bureaus.includes(obj.value))
                            bureausString.push(obj.label)
                    })

                    bureausString = bureausString.join(", ")

                    return {
                        ...rows[key],
                        bureaus: bureausString
                    }
                })

                console.log("rows===>", rows)

                return (
                    <CollapsableForm
                        title={name}
                        defaultOpen={!key}
                    >
                        <Table
                            title="Creditors"
                            checkboxSelection={false}
                            columns={columns}
                            rows={rows}
                            setColumnVisibility={true}
                            setAllColumnsVisibility={true}
                            height={280}
                            borderColor={borders?.gray}
                            hidePagination={true}
                        />
                    </CollapsableForm >
                )

            })


    return (
        <>
            {renderCollapses}
        </>
    )
}

export default Overview