import { Box, Divider, Typography } from '@mui/material';
import cls from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Star from 'public/Assets/Svgs/star.svg';
import styles from './TitleHeader.module.scss';
import Gear from 'public/Assets/Svgs/gear.svg';
import Searcher from './Searcher';


function TitleHeader(props) {

    const {
        actionButtons,
        title,
    } = props || {}

    useEffect(() => {
    }, [])

    return (
        <>
            <Box
                className={cls(
                    `border-red-700`, `border-0`,
                    `pl-5 pt-3 pb-6`,
                    `flex`,
                    `items-center`,
                    `justify-between`,
                )}
            >
                <Box
                    className={cls(
                        `border-red-700`, `border-0`,
                        `items-center`,
                        `flex`
                    )}
                >
                    <Box
                        sx={{
                            display: { md: 'flex', xs: 'none' },
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h4"
                            className={cls(
                                `border-red-700`, `border-0`,
                                `pr-3`,
                                `text-[#F1F4F8]`,
                                styles.heading,
                            )}
                        >
                            {title}
                        </Typography>
                        <div
                            className={cls(
                                `cursor-pointer`,
                            )}
                        >
                            <Star
                                fill='#EBA51C'
                                height={20}
                                width={20}
                            />
                        </div>
                    </Box>
                </Box>
                <Box
                    className={cls(
                        `border-red-700`, `border-0`,
                        `flex`,
                        `items-center`
                    )}
                >
                    {actionButtons}
                    <Box
                        sx={{ display: { sm1: 'flex', xs: 'none' } }}
                    >
                        <Searcher />
                        <Box
                            sx={{
                                borderWidth: 1,
                            }}
                            className={cls(
                                `border-[#BACDE4]`,
                                `px-2.5 py-2.5`,
                                `cursor-pointer`,
                                `rounded`
                            )}
                        >
                            <Gear
                                height={15}
                                width={15}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />
        </>
    )
}

export default TitleHeader