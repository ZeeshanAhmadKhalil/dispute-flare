
import { appBarHeight, drawerClosedWidth, drawerWidth, rightBarWidth, topTabsHeight, footerHeight } from "@Config/constants";
import useWindowDimensions from "@Hooks/useWindowDimensions";
import { useSelector } from "react-redux";
import SimpleBarReact from "simplebar-react";

function ScrollContainer({
    children,
}) {

    const {
        height,
        width,
    } = useWindowDimensions()

    const {
        sidebar,
    } = useSelector(state => state.layout)

    return (
        <SimpleBarReact
            style={{
                maxHeight: height
                    - appBarHeight
                ,
                border: '0px solid red',
                width: width
                    - (
                        sidebar ?
                            drawerWidth
                            :
                            drawerClosedWidth
                    )
                    - rightBarWidth
                    - 16 * 2,
                paddingRight: 15,
            }}
        >
            {children}
        </SimpleBarReact>
    )
}

export default ScrollContainer