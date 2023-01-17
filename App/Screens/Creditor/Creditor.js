import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCreditorDialog from './Components/AddCreditorDialog';
import CreditorActions from './Components/CreditorActions';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
    setCreditorDialog,
    setDefaultColumnsVisibility
} from './Store/creditorSlice';

function Creditor(props) {

    const dispatch = useDispatch()
    const router = useRouter()

    const {
        columns,
        creditors,
    } = useSelector(state => state.creditor)

    const [selectedCreditors, setSelectedCreditors] = useState([])

    const onRowClick = ({
        id
    }) => {
        //  dispatch(setSelectedClientId(id))
        router.push('creditor-dashboard')
    }

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
                onSelectionModelChange={(selected) =>
                    setSelectedCreditors(selected)
                }
                noRowsAction={() => {
                    dispatch(setCreditorDialog(true))
                }}
                columns={columns}
                rows={creditors}
                onRowClick={onRowClick}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
                setDefaultColumnsVisibility={setDefaultColumnsVisibility}
            />
            <AddCreditorDialog />
        </>
    )
}

export default Creditor