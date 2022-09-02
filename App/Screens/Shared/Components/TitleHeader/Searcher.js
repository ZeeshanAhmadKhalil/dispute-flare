import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import { useState } from 'react';
import useWidth from 'App/Hooks/useWidth';

const Box = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'query',
})(({ theme, query }) => ({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: query ? 50 : 0,
}))

function Searcher() {

    const matched = useWidth('xl <')

    const [query, setQuery] = useState('')

    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: matched ? 230 : 400,
                backgroundColor: 'transWhite.main',
                height: 40,
                mr: 1,
            }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <AddIcon />
            </IconButton>
            <InputBase
                value={query}
                onChange={e => setQuery(e.target.value)}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Box
                query={query}
            >
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                    onClick={() => setQuery('')}
                    color="text"
                    sx={{ p: '10px' }}
                    aria-label="directions"
                >
                    <CloseIcon />
                </IconButton>
            </Box>
        </Paper>
    );
}

export default Searcher