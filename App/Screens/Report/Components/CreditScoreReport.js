import ConditionCell from '@Components/Table/Components/ConditionCell/ConditionCell';
import StyledCell from '@Components/Table/Components/StyledCell/StyledCell';
import Table from '@Components/Table/Table';
import LogoLight from 'public/Assets/Svgs/logo-light.svg';
import {
    Box,
    Divider,
    Grid,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import Hi from 'public/Assets/Svgs/hi.svg';
import { useEffect, useState } from 'react';
import Card from './Card';
import {
    Container,
    ShadowCard
} from './StyledComponents';
import Tile from './Tile';

function CreditScoreReport() {

    let columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 50,
            hide: true,
            hidable: true,
        },
        {
            field: 'bureau',
            headerName: 'Bureau',
            width: 280,
            headerClassName: 'separator-header',
            hidable: true,
            renderCell: ({
                value
            }) =>
                <StyledCell
                    value={value}
                    styles={{
                        fontWeight: "bold"
                    }}
                />
        },
        {
            field: 'equifax',
            headerName: 'Equifax',
            width: 280,
            headerClassName: 'separator-header',
            hidable: true,
            renderCell: ConditionCell
        },
        {
            field: 'transUnion',
            headerName: 'TransUnion',
            width: 280,
            headerClassName: 'separator-header',
            hidable: true,
            renderCell: ConditionCell
        },
        {
            field: 'experian',
            headerName: 'Experian',
            width: 280,
            headerClassName: 'separator-header',
            hidable: true,
            renderCell: ConditionCell
        },
    ]
    let energyMarketing = [
        {
            id: 1,
            bureau: "Account #",
            equifax: "746283****",
            transUnion: "-",
            experian: "746283****",
        },
        {
            id: 2,
            bureau: "Status on Previous Report",
            equifax: "-",
            transUnion: "-",
            experian: "-",
        },
        {
            id: 3,
            bureau: "Action Taken",
            equifax: 1,
            transUnion: "-",
            experian: 1,
        },
        {
            id: 4,
            bureau: "Dispute Reason",
            equifax: "-",
            transUnion: "-",
            experian: "-",
        },
        {
            id: 5,
            bureau: "Result (New Import)",
            equifax: -1,
            transUnion: "-",
            experian: -1,
        },
        {
            id: 6,
            bureau: "Re-import As",
            equifax: -1,
            transUnion: "-",
            experian: -1,
        },
    ]
    let energyLa = [
        {
            id: 1,
            bureau: "Account #",
            equifax: "746283****",
            transUnion: "-",
            experian: "-",
        },
        {
            id: 2,
            bureau: "Status on Previous Report",
            equifax: "-",
            transUnion: "-",
            experian: "-",
        },
        {
            id: 3,
            bureau: "Action Taken",
            equifax: 1,
            transUnion: "-",
            experian: "-",
        },
        {
            id: 4,
            bureau: "Dispute Reason",
            equifax: "-",
            transUnion: "-",
            experian: "-",
        },
        {
            id: 5,
            bureau: "Result (New Import)",
            equifax: -1,
            transUnion: "-",
            experian: "-",
        },
        {
            id: 6,
            bureau: "Re-import As",
            equifax: -1,
            transUnion: "-",
            experian: "-",
        },
    ]
    let rows = [
        {
            id: 1,
            bureau: "Account #",
            equifax: "746283****",
            transUnion: "746283****",
            experian: "746283****",
        },
        {
            id: 2,
            bureau: "Status on Previous Report",
            equifax: -1,
            transUnion: -1,
            experian: -1,
            text: "Charge off accounts are disabled"
        },
        {
            id: 3,
            bureau: "Action Taken",
            equifax: 1,
            transUnion: 1,
            experian: 1,
            text: "Verified"
        },
        {
            id: 4,
            bureau: "Dispute Reason",
            equifax: "The following account is defaulter",
            transUnion: "The following account is defaulter",
            experian: "The following account is defaulter",
        },
        {
            id: 5,
            bureau: "Result (New Import)",
            equifax: -1,
            transUnion: -1,
            experian: -1,
        },
        {
            id: 6,
            bureau: "Re-import As",
            equifax: -1,
            transUnion: -1,
            experian: -1,
        },
    ]

    const {
        palette: {
            danger,
            text: {
                lighter1,
                lighter2,
                secondarish,
                xGrey4,
            },
            tableSeparator: {
                light,
                none,
            },
            tableHeader,
        }
    } = useTheme()

    const [transunion, setTransunion] = useState(0)
    const [experian, setExperian] = useState(0)
    const [equifax, setEquifax] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setTransunion(500)
            setExperian(600)
            setEquifax(800)
        }, 500)
    })

    return (
        <Container>
            <Box
                className={cls(
                    'border-red-700 border-0',
                    'flex',
                    'justify-center',
                )}
            >
                <Typography
                    variant='h6'
                    className={cls(
                    )}
                    sx={{
                        fontWeight: 'bold'
                    }}
                    color={secondarish}
                >
                    CREDIT SCORE REPORT
                </Typography>
            </Box>
            <Box
                className={cls(
                    'border-red-700 border-0',
                )}
            >
                <Box
                    className={cls(
                        'flex',
                        'border-red-700 border-0',
                        'mt-10',
                    )}
                >
                    <Typography
                        sx={{
                            fontWeight: 500
                        }}
                        variant='h6'
                        color={secondarish}
                    >
                        Hi, itachi uchiha!
                    </Typography>
                    <Hi
                        height={25}
                        width={25}
                    />
                </Box>
                <Typography
                    sx={{
                        fontWeight: 700
                    }}
                    variant='subtitle2'
                    color={lighter1}
                >
                    Here is your Score Report as 08/10/2022
                </Typography>
            </Box>
            <Box
                className={cls(
                    'flex',
                    'items-center',
                    'justify-between',
                    'mt-10'
                )}
            >
                <Typography
                    sx={{
                        fontWeight: 500
                    }}
                    variant='h6'
                    color={secondarish}
                >
                    Your Credit Score
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700
                    }}
                    variant='body2'
                    color={lighter2}
                >
                    08/10/2022
                </Typography>
            </Box>
            <Divider
                sx={{
                    backgroundColor: light
                }}
            />
            <Grid
                container
            >
                <Grid
                    item
                    xs="12"
                    lg="4"
                    className={cls(
                        'flex',
                        'justify-center',
                        'border-red-700 border-0',
                    )}
                >
                    <Card
                        name={"TRANSUNION"}
                        value={transunion}
                        newPoints={10}
                    />
                </Grid>
                <Grid
                    item
                    xs="12"
                    lg="4"
                    className={cls(
                        'flex',
                        'justify-center',
                        'border-red-700 border-0',
                    )}
                >
                    <Card
                        name={"EXPERIAN"}
                        value={experian}
                        newPoints={0}
                    />
                </Grid>
                <Grid
                    item
                    xs="12"
                    lg="4"
                    className={cls(
                        'flex',
                        'justify-center',
                        'border-red-700 border-0',
                    )}
                >
                    <Card
                        name={"EQUIFAX"}
                        value={equifax}
                        newPoints={-10}
                    />
                </Grid>
            </Grid>
            <Box
                className={cls(
                    'flex',
                    'items-center',
                    'justify-between',
                    'mt-10'
                )}
            >
                <Typography
                    sx={{
                        fontWeight: 500
                    }}
                    variant='h6'
                    color={secondarish}
                >
                    Credit Score Factor Updates
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700
                    }}
                    variant='body2'
                    color={lighter2}
                >
                    08/10/2022
                </Typography>
            </Box>
            <Divider
                sx={{
                    backgroundColor: light
                }}
            />
            <Grid
                container
            >
                <Grid
                    item
                    xl2="3"
                    md1="6"
                    xs="12"
                    className={cls(
                        'flex',
                        'justify-center',
                        'border-red-700 border-0',
                    )}
                >
                    <Tile
                        value={0}
                        name="DELETED"
                        nameColor={xGrey4}
                    />
                </Grid>
                <Grid
                    item
                    xl2="3"
                    md1="6"
                    xs="12"
                    className={cls(
                        'flex',
                        'justify-center',
                        'border-red-700 border-0',
                    )}
                >
                    <Tile
                        value={0}
                        name="UPDATED TO POSITIVE"
                        nameColor={xGrey4}
                    />
                </Grid>
                <Grid
                    item
                    xl2="3"
                    md1="6"
                    xs="12"
                    className={cls(
                        'flex',
                        'justify-center',
                        'border-red-700 border-0',
                    )}
                >
                    <Tile
                        value={3}
                        name="UPDATED TO NEGATIVE"
                        nameColor={danger?.main}
                    />
                </Grid>
                <Grid
                    item
                    xl2="3"
                    md1="6"
                    xs="12"
                    className={cls(
                        'flex',
                        'justify-center',
                        'border-red-700 border-0',
                    )}
                >
                    <Tile
                        value={0}
                        name="ADDED"
                        nameColor={xGrey4}
                    />
                </Grid>
            </Grid>
            <Box
                className={cls(
                    'flex',
                    'items-center',
                    'justify-between',
                    'mt-10'
                )}
            >
                <Typography
                    sx={{
                        fontWeight: 500
                    }}
                    variant='h6'
                    color={secondarish}
                >
                    Summary of Changes
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700
                    }}
                    variant='body2'
                    color={lighter2}
                >
                    08/10/2022
                </Typography>
            </Box>
            <Divider
                sx={{
                    backgroundColor: light
                }}
            />
            <ShadowCard
                className={cls(
                    'p-8',
                    'mt-5',
                )}
            >
                <Typography
                    sx={{
                        fontWeight: 500
                    }}
                    variant='h6'
                    color={lighter2}
                >
                    Scana Energy Marketing
                </Typography>
                <Table
                    stripedRows={true}
                    rowSeparatorColor={none}
                    headerColor={tableHeader.none}
                    hideSeparator={true}
                    title="Scana Energy Marketing"
                    checkboxSelection={false}
                    columns={columns}
                    rows={energyMarketing}
                    height={400}
                    hidePagination={true}
                />
                <Divider
                    sx={{
                        backgroundColor: light,
                        mb: 2,
                    }}
                />
                <Typography
                    sx={{
                        fontWeight: 500
                    }}
                    variant='h6'
                    color={lighter2}
                >
                    Energy La
                </Typography>
                <Table
                    stripedRows={true}
                    rowSeparatorColor={none}
                    headerColor={tableHeader.none}
                    hideSeparator={true}
                    title="Scana Energy Marketing"
                    checkboxSelection={false}
                    columns={columns}
                    rows={energyLa}
                    height={400}
                    hidePagination={true}
                />
                <Divider
                    sx={{
                        backgroundColor: light,
                        mb: 2,
                    }}
                />
                <Typography
                    sx={{
                        fontWeight: 500
                    }}
                    variant='h6'
                    color={lighter2}
                >
                    Capital One
                </Typography>
                <Table
                    stripedRows={true}
                    rowSeparatorColor={none}
                    headerColor={tableHeader.none}
                    hideSeparator={true}
                    title="Scana Energy Marketing"
                    checkboxSelection={false}
                    columns={columns}
                    rows={rows}
                    height={400}
                    hidePagination={true}
                />
            </ShadowCard>
            <Box
                className={cls(
                    'absolute',
                    'top-3'
                )}
            >
                <LogoLight
                    height={80}
                    width={80}
                />
            </Box>
        </Container>
    )
}

export default CreditScoreReport