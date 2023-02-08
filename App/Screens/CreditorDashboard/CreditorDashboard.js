import Avatar from '@Components/Avatar/Avatar';
import LineChart from '@Components/LineChart/LineChart';
import StatsTile from '@Components/StatsTile/StatsTile';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import {
    Box,
    Grid,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import Affiliates from 'public/Assets/Svgs/affiliates.svg';
import ComissionPaid from 'public/Assets/Svgs/comission-paid.svg';
import FreehandQuestionmark from 'public/Assets/Svgs/freehand-questionmark.svg';
import ReferredClients from 'public/Assets/Svgs/referred-clients.svg';
import TotalCommission from 'public/Assets/Svgs/total-commission.svg';

function CreditorDashboard(props) {

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
            primary,
            background: {
                light1,
            }
        }
    } = useTheme()

    return (
        <>
            <TopTabs tabs={tabs} />

            <TitleHeader
                title="Dashboard"
                actionButtons={null}
            />
            <Box
                className={cls(
                    'flex',
                    'flex-wrap',
                    'mb-5'
                )}
            >
                <StatsTile
                    name="AFFILIATES"
                    value={"234"}
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
                                border: `0.5px solid ${lead.main}`
                            }}
                        >
                            <Affiliates
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
                    name="REFERRED CLIENTS"
                    value={"300"}
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
                    name="TOTAL COMISSION"
                    value={"30.5k"}
                    valueColor={link.main}
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
                                color={icongreen.light}
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
            </Box>
            <Grid
                container
                columnSpacing={3}
                rowSpacing={3}
                className={cls(
                    'border-red-700', 'border-0',
                )}
            >
                <Grid item xl="9" xs="12">
                    <Box
                        className={cls(
                            'border-red-700', 'border-0',
                            'rounded-lg',
                            'overflow-hidden',
                        )}
                        sx={{
                            height: 500,
                            background: light1
                        }}
                    >
                        <Typography
                            color={text.contrastText1}
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginTop: 2,
                                marginLeft: 3,
                            }}
                        >
                            Profit
                        </Typography>
                        <LineChart />
                    </Box>
                </Grid>
                <Grid item xl="3" xs="12">
                    <Box
                        className={cls(
                            'border-red-700', 'border-0',
                            'px-5',
                            'py-3',
                            'w-[260px]',
                            'h-[260px]',
                            'rounded-lg',
                        )}
                        sx={{
                            background: light1,
                        }}
                    >
                        <Box
                            className={cls(
                                'border-red-700', 'border-0',
                                'flex',
                                'justify-between',
                                'items-center',
                            )}
                        >
                            <Typography
                                variant='h6'
                                color={text.contrastText}
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >
                                Best Affiliates
                            </Typography>
                            <FreehandQuestionmark
                                className={cls(
                                    'border-red-700', 'border-0',
                                )}
                                height={25}
                                width={25}
                            />
                        </Box>
                        <Box
                            className={cls(
                                'border-red-700', 'border-0',
                                'flex',
                                'justify-center',
                                'items-center',
                                'mt-2',
                                'mb-5',
                            )}
                        >
                            <Avatar
                                pfp="Assets/Images/d-ace-pfp.jpeg"
                                styles={{
                                    height: 90,
                                    width: 90,
                                }}
                            />
                        </Box>
                        <Box
                            className={cls(
                                'border-red-700', 'border-0',
                                'flex',
                                'mt-2'
                            )}
                        >
                            <Box
                                className={cls(
                                    'border-red-700', 'border-0',
                                    'flex',
                                    'flex-1',
                                )}
                            >
                                <Typography
                                    color={text.grey}
                                    variant="body1"
                                >
                                    Affiliate Name
                                </Typography>
                            </Box>
                            <Typography
                                color={text.grey}
                                variant="body1"
                                sx={{
                                    width: 10
                                }}
                            >
                                :
                            </Typography>
                            <Box
                                className={cls(
                                    'border-red-700', 'border-0',
                                    'flex',
                                    'flex-1',
                                )}
                            >
                                <Typography
                                    color={text.contrastText}
                                    variant="body1"
                                >
                                    Portgas D Ace
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            className={cls(
                                'border-red-700', 'border-0',
                                'flex',
                                'mt-2'
                            )}
                        >
                            <Box
                                className={cls(
                                    'border-red-700', 'border-0',
                                    'flex',
                                    'flex-1',
                                )}
                            >
                                <Typography
                                    color={text.grey}
                                    variant="body1"
                                >
                                    Referred Client
                                </Typography>
                            </Box>
                            <Typography
                                color={text.grey}
                                variant="body1"
                                sx={{
                                    width: 10
                                }}
                            >
                                :
                            </Typography>
                            <Box
                                className={cls(
                                    'border-red-700', 'border-0',
                                    'flex',
                                    'flex-1',
                                )}
                            >
                                <Typography
                                    color={text.contrastText}
                                    variant="body1"
                                >
                                    D Luffy
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default CreditorDashboard