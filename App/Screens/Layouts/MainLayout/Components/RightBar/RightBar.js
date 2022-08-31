import { rightbarRoutes } from '@Config/routes';
import {
    List
} from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import cls from 'classnames';
import RightBarItem from './RightBarItem';

const drawerClosedWidth = 65;

const Box = styled(MuiBox)(() => ({
    width: drawerClosedWidth,
    height: '100%',
    position: 'fixed',
    right: 0,
    background: '#ffffff11',
    borderLeft: `1px solid #ffffff1F`,
}));

const WrapperBox = styled(MuiBox)(() => ({
    backgroundColor: '#536D924C',
    borderRadius: 8,
    width: 45,
    marginLeft: 8,
    marginTop: 10,
    paddingTop: 3,
    paddingBottom: 8,
}));

const BottomBtnsBox = styled(MuiBox)(() => ({
    position: 'fixed',
    bottom: 20,
    width: 62,
}));

function RenderListItems() {

    let buttons = rightbarRoutes.filter(obj => obj.type == "button")
    buttons = buttons.map((item, key) => {

        const {
            icon,
        } = item || {}

        return (
            <div key={key}>
                <RightBarItem icon={icon} />
            </div>
        )
    })

    let wrappedButtons = rightbarRoutes.filter(obj => obj.type == "wrapped-button")
    wrappedButtons = wrappedButtons.map((item, key) => {

        const {
            icon,
        } = item || {}

        return (
            <div key={key}>
                <RightBarItem icon={icon} />
            </div>
        )
    })
    wrappedButtons = (
        <WrapperBox>
            {wrappedButtons}
        </WrapperBox>
    )

    let bottomButtons = rightbarRoutes.filter(obj => obj.type == "bottom-button")
    bottomButtons = bottomButtons.map((item, key) => {

        const {
            icon,
        } = item || {}

        return (
            <div key={key}>
                <RightBarItem icon={icon} />
            </div >
        )
    })
    bottomButtons = (
        <BottomBtnsBox
            className={cls(
                `border-blue-600`, 'border-0',
            )}
        >
            {bottomButtons}
        </BottomBtnsBox>
    )

    return [buttons, wrappedButtons, bottomButtons]
}

function RightBar(props) {

    return (
        <Box
            className={cls(
                `border-red-600`, 'border-0',
            )}
        >
            <List>
                {RenderListItems()}
            </List>
        </Box>
    )
}

export default RightBar