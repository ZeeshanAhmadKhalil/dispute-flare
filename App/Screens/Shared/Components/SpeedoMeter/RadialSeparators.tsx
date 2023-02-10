import React from "react";

function Separator(props: any) {
    return (
        <div
            style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${props.turns}turn)`,
            }}
        >
            <div style={props.style} />
        </div>
    );
}

const RadialSeparators = ({
    count,
    style,
}: any) => {

    const turns = 1 / count;

    const renderSeparators
        = [...Array(count)].map((
            item,
            index: any
        ) => {

            if (index < 3)
                return (
                    <Separator
                        turns={index * turns}
                        style={style}
                    />
                )
        })

    return (
        <>
            {renderSeparators}
        </>
    )
}

export default RadialSeparators;
