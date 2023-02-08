import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCreditorDialog from './Components/AddCreditor/AddCreditorDialog';
import CreditorActions from './Components/CreditorActions';
import ImportCreditorsDialog from './Components/ImportCreditor/ImportCreditorDialog';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
    setCreditorDialog,
    setDefaultColumnsVisibility
} from './Store/creditorSlice';

function Creditor() {

    const dispatch = useDispatch()

    const {
        columns,
        creditors,
    } = useSelector((state: any) => state.creditor)

    const [selectedCreditors, setSelectedCreditors] = useState([])

    useEffect(() => {
    }, [])

    return (
        <>
            <TitleHeader
                title="Creditor"
                actionButtons={
                    <CreditorActions
                        selectedCreditors={selectedCreditors}
                    />
                }
            />
            <Table
                title="Creditor"
                onSelectionModelChange={(selected: any) =>
                    setSelectedCreditors(selected)
                }
                noRowsAction={() => {
                    dispatch(setCreditorDialog(true))
                }}
                columns={columns}
                rows={creditors}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
                setDefaultColumnsVisibility={setDefaultColumnsVisibility}
            />
            <AddCreditorDialog />
            <ImportCreditorsDialog />
        </>
    )
}

export default Creditor