import DefaultCell from '@Components/Table/Components/DefaultCell/DefaultCell';
import SwitchCell from '@Components/Table/Components/SwitchCell/SwitchCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { getId } from '@Config/helper';
import {
    useState
} from 'react';
import { useDispatch } from 'react-redux';
import AddLetterTemplateDialog from './Components/AddLetterTemplate/AddLetterTemplateDialog';
import TemplatesActions from "./Components/TemplatesActions";
import Title from './Components/Title';
import { setAddLetterTemplateDialog } from './Store/templatesSlice';

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
        renderCell: DefaultCell,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: DefaultCell,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: SwitchCell
    },
    {
        field: 'addedBy',
        headerName: 'Added By',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: DefaultCell,
    },


]
const templates = [
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "inactive",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "inactive",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "inactive",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "inactive",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },
]

function Templates() {

    const tabs = [
        { label: "Letter Flow", value: "letter-library" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
    ]

    const dispatch = useDispatch()

    const [selectedDocuments, setSelectedDocuments] = useState([])

    return (
        <>
            <TopTabs
                left={143}
                tabs={tabs}
            />
            <TitleHeader
                title="Templates"
                actionButtons={
                    <TemplatesActions
                        selectedDocuments={selectedDocuments}
                    />
                }
            />
            <Table
                title="templates"
                onSelectionModelChange={(selected: any) =>
                    setSelectedDocuments(selected)
                }
                noRowsAction={() =>
                    dispatch(setAddLetterTemplateDialog(true))
                }
                columns={columns}
                rows={templates}
            />
            <AddLetterTemplateDialog />
        </>
    )
}

export default Templates