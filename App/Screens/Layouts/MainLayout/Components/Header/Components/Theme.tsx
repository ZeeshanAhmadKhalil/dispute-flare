import { setSelectedTheme } from '@Layouts/Store/themeSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, styled, useTheme } from '@mui/material';
import cls from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Theme.module.scss';

const ThemeName = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'hovered'
})(({
    theme,
    hovered
}: any) => {
    const {
    } = theme.palette

    return {
        position: 'absolute',
        transition: theme.transitions.create('bottom', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(!hovered && {
            bottom: -20,
        }),
        ...(hovered && {
            bottom: 0,
        })
    }
})

function Theme(props: any) {

    const {
        name,
        imagePath,
        id,
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator,
            text,
            dialog: {
                xxOff,
                xxxOff,
            },
            background: { xTrans },
        }
    }: any = useTheme()

    const {
        selectedTheme,
    } = useSelector((state: any) => state.layout)

    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div
            key={id}
            className={cls(
                styles.themeImage,
                'mx-[1%]',
                'my-0.5',
                'w-[23%]',
                'h-[100px]',
                'relative',
                'overflow-hidden',
            )}
            style={{
                backgroundColor: xxxOff,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => dispatch(setSelectedTheme(id))}
        >
            <Image
                className={cls(
                    styles.themeImage,
                )}
                layout="fill"
                src={imagePath}
                alt={name}
            />
            <ThemeName
                {...{
                    hovered,
                }}
                className={cls(
                    styles.themeName,
                    'w-full',
                    'flex',
                    'justify-center',
                )}
                style={{
                    backgroundColor: xTrans,
                    color: text.main
                }}
            >
                {name}
            </ThemeName>
            {selectedTheme == id &&
                <CheckCircleIcon
                    fontSize="large"
                    sx={{
                        position: 'absolute',
                        top: '33%',
                        left: '37%',
                        color: xTrans.main
                    }}
                />
            }
        </div>
    )
}

export default Theme