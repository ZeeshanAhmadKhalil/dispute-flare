import { Box } from '@mui/material';
import Button from '@Screens/Shared/Components/Button/Button';
import cls from 'classnames';
import Image from 'next/image';
import becomeAnAffilate from 'public/Assets/Svgs/become-an-affilate.svg';
import { useSelector } from 'react-redux';
import styles from './AffilateButton.module.scss';

function AffilateButtom(props) {

    const drawerWidth = 240;
    const drawerClosedWidth = 65;

    const {
        isHoverSidebar,
    } = props || {}

    const {
        sidebar,
    } = useSelector(state => state.layout)

    return (
        <Box
            className={cls(
                `border-red-700 border-0`,
                // `fixed inset-x-0 bottom-0`,
                `${!(sidebar || isHoverSidebar) ? 'flex justify-center' : ''}`,
                styles.affilateButton,
                `cursor-pointer`,
            )}
            sx={{
                width: (sidebar || isHoverSidebar) ? drawerWidth : drawerClosedWidth,
                marginBottom: 3,
            }}
        >
            {(sidebar || isHoverSidebar) ?
                <Button
                    color={"infoLight"}
                    startIcon={
                        <Image
                            width={20}
                            height={20}
                            src={becomeAnAffilate}
                        />
                    }
                    style={{
                        borderRadius: 3,
                        width: `100%`,
                    }}
                >
                    {"Become an Affilate"}
                </Button>
                :
                <Image
                    width={35}
                    height={35}
                    src={becomeAnAffilate}
                />
            }
        </Box>
    )
}

export default AffilateButtom