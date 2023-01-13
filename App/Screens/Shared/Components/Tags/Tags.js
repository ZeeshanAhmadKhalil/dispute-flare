import React from 'react'
import { Button, styled } from '@mui/material'



const Dialog = styled(Button)(({ theme }) => {



    return {
        '&': {
            borderRadius: "2px",
            backgroundImage: "-moz-linear-gradient( 90deg, pink 0%, pink 100%)",
            backgroundImage: "-webkit-linear-gradient( 90deg, pink 0%, pink 100%)",
            backgroundImage: "-ms-linear-gradient( 90deg, pink 0%, pink 100%)",
            color: "pink",
            textAlign: "center",
            height: "25px",
            border: "1px solid pink",
            verticalAlign: "middle",
            fontFamily: "Segoe UI",
            boxShadow: "0px 0px 1px pink",
            backgroundColor: "pink",
            position: "relative"
        },
        '& .MuiDialogContent-root': {
            position: "relative",
            zIndex: "1",
            backgroundColor: "pink"
        },
        '& .btn22::after': {
            content: `""`,
            width: "16px",
            height: "16px",
            backgroundImage: "-moz-linear-gradient( 135deg, pink 0%, pink 100%)",
            backgroundImage: "-webkit-linear-gradient( 135deg,pink 0%, pink 100%)",
            backgroundImage: "-ms-linear-gradient( 135deg, pink 0%, pink 100%)",
            display: "block",
            position: "absolute",
            top: "5px",
            right: "0px",
            border: "1px solid pink",
            borderLeft: "none",
            borderBottom: "none",
            borderRadius: "2px",
            transform: "rotate(47deg) skew(5deg)",
            //   transform: rotate(47deg) skew(5deg);
            backgroundColor: "pink"
        },
    }
})


function Tags() {
    return (
        <Dialog><span>Some button</span></Dialog>
    )
}

export default Tags