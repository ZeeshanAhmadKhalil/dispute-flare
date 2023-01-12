import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';

function InternalNotes(props) {

    const dispatch = useDispatch()

    const {
        selectedClientId
    } = useSelector(state => state.shared)

    const [selectedClients, setSelectedClients] = useState([])

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs />
            <TitleHeader
                title="REPORT"
            />
        </>
    )
}

export default InternalNotes