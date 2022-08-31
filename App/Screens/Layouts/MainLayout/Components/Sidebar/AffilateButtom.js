import Button from '@Components/Button/Button';
import { drawerClosedWidth, drawerWidth } from '@Config/constants';
import { Box } from '@mui/material';
import cls from 'classnames';
import BecomeAnAffilate from 'public/Assets/Svgs/become-an-affilate.svg';
import { useSelector } from 'react-redux';
import styles from './AffilateButton.module.scss';

function AffilateButtom(props) {

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
                    color={"lightPink"}
                    startIcon={
                        <BecomeAnAffilate
                            width={20}
                            height={20}
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
                <BecomeAnAffilate
                    width={33}
                    height={33}
                />
            }
        </Box>
    )
}

export default AffilateButtom