
import StatsTile from '@Components/StatsTile/StatsTile';
import DefaultCell from '@Components/Table/Components/DefaultCell/DefaultCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { getId } from '@Config/helper';
import {
    Box,
    Grid, useTheme
} from '@mui/material';
import cls from 'classnames';
import ComissionPaid from 'public/Assets/Svgs/comission-paid.svg';
import ReferredClients from 'public/Assets/Svgs/referred-clients.svg';
import TotalCommission from 'public/Assets/Svgs/total-commission.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RecordPaymentDialog from './Components/AddAffiliate/RecordPaymentDialog';
import AffiliateDashboardActions from './Components/AffiliateDashboardActions';
import { setRecordPaymentDialog } from './Store/affiliateDashboardSlice';

const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
        hide: true,
        hidable: true,
    },
    {
        field: 'dateReferred',
        headerName: 'Date Reffered',
        width: 200,
        headerClassName: 'separator-header',
        renderCell: DefaultCell,
        hidable: true,
        hide: false,
    },
    {
        field: 'client',
        headerName: 'client',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: DefaultCell,
    },

    {
        field: 'commission',
        headerName: 'Commission',
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
        renderCell: DefaultCell,
    },

]
const payments = [
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
    {
        id: getId(),
        dateReferred: "14 Feb 2023",
        client: "John Ripper",
        email: "email@gmail.kaam",
        commission: "$5300",
        status: "active"
    },
]

function AffiliateDashboard() {


    const [selectedClients, setSelectedClients] = useState([])

    const tabs = [
        { label: "Dashboard", value: "creditor-dashboard" },
        { label: "Affiliates", value: "affiliates" },
        { label: "Commission", value: "commission" },
    ]

    const {
        palette: {
            text,
            warning,
            lead,
            link,
            icongreen,
            success,
            secondary,
            primary,
            pink,
            background: {
                light1,
            }
        }
    }: any = useTheme()

    const dispatch = useDispatch()

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Terence Lewis"
                actionButtons={
                    <AffiliateDashboardActions
                        selectedInstructions={selectedClients}
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
                    name="TOTAL COMISSION "
                    value={"30.5k"}
                    valueColor={warning.main}
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
                                border: `0.5px solid ${icongreen.light}`
                            }}
                        >
                            <TotalCommission
                                height={25}
                                width={25}
                            />
                        </Box>
                    }
                    styles={{
                        marginRight: 5,
                    }}
                />
                <StatsTile
                    name="COMISSION PAID"
                    value={"30,999"}
                    valueColor={primary.main}
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
                                border: `0.5px solid ${icongreen.light1}`
                            }}
                        >
                            <ComissionPaid
                                height={25}
                                width={25}
                            />
                        </Box>
                    }
                    styles={{
                        marginRight: 5,
                    }}
                />
                <StatsTile
                    name="TO BE PAID"
                    value={"300"}
                    valueColor={secondary.main}
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
                                border: `0.5px solid ${link.light}`
                            }}
                        >
                            <ReferredClients
                                height={22}
                                width={22}
                            />
                        </Box>
                    }
                    styles={{
                        marginRight: 5,
                    }}
                />
                <StatsTile
                    name="LAST PAY DATE"
                    value={"Aug 20, 2022"}
                    valueColor={success.main}
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
                                border: `0.5px solid ${icongreen.light}`
                            }}
                        >
                            <TotalCommission
                                height={25}
                                width={25}
                            />
                        </Box>
                    }
                    styles={{
                        marginRight: 5,
                    }}
                />
                <StatsTile
                    name="LAST AMOUNT PAID"
                    value={"1000"}
                    valueColor={secondary.main}
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
                                border: `0.5px solid ${icongreen.light}`
                            }}
                        >
                            <TotalCommission
                                height={25}
                                width={25}
                            />
                        </Box>
                    }
                    styles={{
                        marginRight: 5,
                    }}
                />       <StatsTile
                    name="COMMISSION RATE"
                    value={"1000"}
                    valueColor={pink.main}
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
                                border: `0.5px solid ${icongreen.light}`
                            }}
                        >
                            <TotalCommission
                                height={25}
                                width={25}
                            />
                        </Box>
                    }
                    styles={{
                        marginRight: 5,
                    }}
                />

            </Box>
            <Grid
                container
                columnSpacing={3}
                rowSpacing={3}
                className={cls(
                    'border-red-700', 'border-0',
                )}
            >
                <Grid item xl={12} xs={12}>
                    <Table
                        title="Payment"
                        onSelectionModelChange={(selected: any) =>
                            setSelectedClients(selected)
                        }
                        noRowsAction={() =>
                            dispatch(setRecordPaymentDialog(true))
                        }
                        columns={columns}
                        rows={payments}
                    />
                </Grid>
            </Grid>
            <RecordPaymentDialog />
        </>
    )
}

export default AffiliateDashboard