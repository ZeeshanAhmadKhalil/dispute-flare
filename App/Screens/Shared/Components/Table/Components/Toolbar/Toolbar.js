import { useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    GridColumnMenuContainer,
    GridToolbarColumnsButton
} from '@mui/x-data-grid';
import Gear from 'public/Assets/Svgs/gear.svg';
import { useRef } from 'react';

function Toolbar(props) {

    const {
        palette: {
            icon: {
                lightActive,
            },
        }
    } = useTheme()

    const ColumnsBtn = styled(GridToolbarColumnsButton)(() => {
        return {
            '& button': {
                color: 'red'
            },
        }
    })

    const ref = useRef()
    const columnsBtn = useRef()
    console.log("columnsBtn===>", columnsBtn)

    // useEffect(() => {
    //     if (columnsBtn.current)
    //         columnsBtn.current.innerHTML = columnsBtn.current.innerHTML.replace("COLUMNS", "")
    // }, [columnsBtn])

    return (
        <GridColumnMenuContainer
            ref={ref}
            sx={{
                // position: 'absolute',
                // left: 50,
                // top: 4,
                zIndex: 999,
                height: 0,
                padding: 0,
            }}
        >
            <ColumnsBtn
                ref={columnsBtn}
                startIcon={(
                    <Gear
                        color={lightActive}
                        height={15}
                        width={15}
                    />
                )}
                sx={{
                    width: 22,
                    minWidth: 22,
                    justifyContent: 'flex-start',
                    overflow: 'hidden',
                    backgroundColor: '#F5F8FA',
                    borderBottomRightRadius: 10,
                }}
                color="secondary"
            />
        </GridColumnMenuContainer>
    )
}

export default Toolbar