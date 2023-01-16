import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCreditorDialog from './Components/AddCreditorDialog';
import CreditorActions from './Components/CreditorActions';
import { setAllColumnsVisibility, setColumnVisibility, setCreditorDialog, setDefaultColumnsVisibility } from './Store/creditorSlice';

function Creditor(props) {

    const dispatch = useDispatch()

    const {
        columns,
        creditors,
    } = useSelector(state => state.creditor)

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
                onSelectionModelChange={(selected) =>
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
        </>
    )
}

export default Creditor