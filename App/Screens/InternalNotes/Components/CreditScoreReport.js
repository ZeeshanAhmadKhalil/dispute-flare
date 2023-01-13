import Table from '@Components/Table/Table';
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
    Container, ShadowCard
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
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
        },
    ]
    let rows = [
        {
            id: 1,
            creditor: "HDEKE (Original Creditor: 09)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
        {
            id: 2,
            creditor: "EISD (Original Creditor: 10A)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
        {
            id: 3,
            creditor: "EWISD (Original Creditor: 11)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
        {
            id: 4,
            creditor: "JEW (Original Creditor: 12 AT T)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
    ]

    const {
        palette: {
            danger,
            borders,
            text: {
                lighter1,
                lighter2,
                secondarish,
                xGrey4,
            },
            tableSeparator: {
                light,
            },
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
                    title="Scana Energy Marketing"
                    checkboxSelection={false}
                    columns={columns}
                    rows={rows}
                    setColumnVisibility={true}
                    setAllColumnsVisibility={true}
                    height={280}
                    hidePagination={true}
                />
            </ShadowCard>
        </Container>
    )
}

export default CreditScoreReport