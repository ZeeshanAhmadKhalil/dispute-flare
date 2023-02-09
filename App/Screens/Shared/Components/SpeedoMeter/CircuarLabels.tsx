import { Typography } from "@mui/material";

function Label({
    turns,
    label,
}: any) {
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
}: any) {

    let labelCount = 0

    const turns = 1 / count;
    return [...Array(count)].map((index: any) => {

        if (index <= 3 || index == 9)
            return (
                <Label
                    turns={index * turns}
                    style={style}
                    label={
                        labels.find(
                            (obj: any) =>
                                obj.index == index
                        )?.value
                    }
                />
            )
    })
}

export default CircuarLabels;
