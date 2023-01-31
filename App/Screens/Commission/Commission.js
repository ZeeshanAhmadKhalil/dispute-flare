import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import StatsTile from '@Components/StatsTile/StatsTile';
import DropDownCell from '@Components/Table/Components/DropDownCell/DropDownCell';
import LinkCell from '@Components/Table/Components/LinkCell/LinkCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import {
    Box,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import TotalCommission from 'public/Assets/Svgs/total-commission.svg';
import User from 'public/Assets/Svgs/user.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CommissionActions from './Components/CommissionActions';
import SetStandardRateDialog from './Components/SetStandardRate/SetStandardRateDialog';
import { setStandardRateDialog } from './Store/commissionSlice';

function Commission(props) {

    const tabs = [
        { label: "Dashboard", value: "creditor-dashboard" },
        { label: "Affiliates", value: "affiliates" },
        { label: "Commission", value: "commission" },
    ]
    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 50,
            hide: true,
            hidable: true,
        },
        {
            field: 'affiliateName',
            headerName: 'Affiliate Name',
            width: 350,
            headerClassName: 'separator-header',
            renderCell: (props) => (
                <LinkCell
                    {...props}
                    navigateTo="creditor-dashboard"
                />
            ),
            hidable: true,
            hide: false,
        },
        {
            field: 'company',
            headerName: 'Company',
            width: 350,
            hide: false,
            hidable: true,
        },
        {
            field: 'totalCommission',
            headerName: 'Total Commission',
            width: 350,
            hide: false,
            hidable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 350,
            hidable: true,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Paid', 'To be paid'],
            renderCell: ({ value }) => (
                <DropDownCell value={value} />
            ),
        },
    ]
    const comissions = [
        {
            id: 1,
            affiliateName: "Steve Rogers",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 2,
            affiliateName: "Hela",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 3,
            affiliateName: "Doctor Strange",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 4,
            affiliateName: "Thor",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 5,
            affiliateName: "Captain Marvel",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 6,
            affiliateName: "Scarlet Witch",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 7,
            affiliateName: "Thanos",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 8,
            affiliateName: "Dormammu",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 9,
            affiliateName: "Eternity",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
        {
            id: 10,
            affiliateName: "Arishem",
            company: 'Marvel',
            totalCommission: "$110",
            status: "Paid",
        },
    ]

    const {
        palette: {
            icon,
            background,
            borders
        }
    } = useTheme()

    const dispatch = useDispatch()

    const [selectedComission, setSelectedComission] = useState([])

    return (
        <>
            <TopTabs tabs={tabs} />
            <ScrollContainer>
                <TitleHeader
                    title="Commission"
                    actionButtons={
                        <CommissionActions
                            selectedComission={selectedComission}
                        />
                    }
                />
                <Box
                    className={cls(
                        'flex',
                        'flex-wrap',
                        'mb-5'
                    )}
                >
                    <StatsTile
                        name="STANDARD RATE"
                        nameColor={icon?.dark}
                        value={"420"}
                        valueColor={icon?.dark}
                        icon={
                            <Box
                                className={cls(
                                    'h-[37px]',
                                    'w-[37px]',
                                    'rounded-full',
                                    'p-[5px]',
                                    'items-center',
                                    'justify-center',
                                    'flex'
                                )}
                                sx={{
                                    border: `0.5px solid ${icon?.dark}`
                                }}
                            >
                                <TotalCommission
                                    color={icon?.dark}
                                    height={25}
                                    width={25}
                                />
                            </Box>
                        }
                        styles={{
                            marginRight: 5,
                            background: background?.main + "2",
                            border: `0.5px solid ${borders.light}`
                        }}
                    />
                    <StatsTile
                        name="CLIENTS"
                        nameColor={icon?.dark}
                        value={"69"}
                        valueColor={icon?.dark}
                        icon={
                            <Box
                                className={cls(
                                    'h-[37px]',
                                    'w-[37px]',
                                    'rounded-full',
                                    'p-[5px]',
                                    'items-center',
                                    'justify-center',
                                    'flex'
                                )}
                                sx={{
                                    border: `0.5px solid ${icon?.dark}`
                                }}
                            >
                                <User
                                    height={22}
                                    width={22}
                                />
                            </Box>
                        }
                        styles={{
                            marginRight: 5,
                            background: background?.main + "2",
                            border: `0.5px solid ${borders.light}`
                        }}
                    />
                </Box>
                <Table
                    title="Commission"
                    onSelectionModelChange={(selected) =>
                        setSelectedComission(selected)
                    }
                    noRowsAction={() =>
                        dispatch(setStandardRateDialog(true))
                    }
                    columns={columns}
                    rows={comissions}
                />
            </ScrollContainer>
            <SetStandardRateDialog />
        </>
    )
}

export default Commission