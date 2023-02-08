import React from "react";
import _ from "lodash";
import { Typography, useTheme } from "@mui/material";

function Label({
    turns,
    label,
}) {
    return (
        <div
            style={{
                position: "absolute",
                height: "125%",
                transform: `rotate(${turns}turn)`,
            }}
        >
            <Typography
                color={"#000"}
                variant="caption"
            >
                {label}
            </Typography>
        </div>
    );
}

function CircuarLabels({
    labels,
    count,
    style,
}) {

    let labelCount = 0

    const turns = 1 / count;
    return _.range(count).map(index => {

        if (index <= 3 || index == 9)
            return (
                <Label
                    turns={index * turns}
                    style={style}
                    label={
                        labels.find(
                            obj =>
                                obj.index == index
                        )?.value
                    }
                />
            )
    })
}

export default CircuarLabels;
