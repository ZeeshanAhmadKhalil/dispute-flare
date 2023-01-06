import { Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast'

function FileDropPicker(props) {

    const {
        setValue,
        getValues,
    } = props || {}

    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: {
            '.csv': []
        },
        onDrop: (acceptedFiles) => {

            if (acceptedFiles.length == 0)
                toast.error("Please select .csv files")

            setValue(
                'files',
                getValues('files').concat(acceptedFiles)
            )
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return (
        <div className="container">
            <div
                {...getRootProps({ style })}
                style={style}
            >
                <input
                    {...getInputProps()}
                    accept=".csv"
                />
                <Typography>
                    {"Drag and drop file here or"}
                </Typography>
                <Typography>
                    {"select them from the computer"}
                </Typography>
            </div>
        </div>
    );
}

export default FileDropPicker