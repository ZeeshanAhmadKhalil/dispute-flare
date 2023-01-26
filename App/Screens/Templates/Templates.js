import DefaultCell from '@Components/DefaultCell/DefaultCell';
import IOSSwitch from '@Components/IOSSwitch/IOSSwitch';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import {
    Divider,
    FormControlLabel,
    FormGroup,
    useTheme
} from '@mui/material';
import {
    useEffect,
    useState
} from 'react';
import { useSelector } from 'react-redux';
import AddLetterTemplateDialog from './Components/AddLetterTemplate/AddLetterTemplateDialog';
import TemplatesActions from "./Components/TemplatesActions";
import Title from './Components/Title';


const letters = [
    {
        id: 1,
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: 2,
        title: "credit card",
        category: "CAT A",
        status: "inactive",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: 3,
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: 4,
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
]


function Templates() {

    const [selectedDocuments, setSelectedDocuments] = useState([])

    const tabs = [
        { label: "Letter Flow", value: "letterlibrary" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
    ]

    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 150,
            hide: true,
            hidable: true,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: Title,
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) =>
                <DefaultCell value={value} />,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) =>
                <DefaultCell value={value} />,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: () => (
                <FormGroup>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        label="active"
                    />
                </FormGroup>
            )
        },
        {
            field: 'addedBy',
            headerName: 'Added By',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) =>
                <DefaultCell value={value} />,
        },


    ]
    const {
        palette
    } = useTheme()
    const {
        selectedClientId
    } = useSelector(state => state.shared)



    useEffect(() => {
    }, [])

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Templates"
                actionButtons={
                    <TemplatesActions
                        selectedDocuments={selectedDocuments}
                    />
                }
            />

            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />


            <Table
                autoHeight={true}
                title="templates"
                onSelectionModelChange={(selected) =>
                    setSelectedDocuments(selected)
                }
                columns={columns}
                rows={letters}
            />


            <AddLetterTemplateDialog />
        </>
    )
}

export default Templates