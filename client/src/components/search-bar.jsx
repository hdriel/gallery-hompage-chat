import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import * as imageActions from '../store/actions/image';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        margin: '20px 0 30px 0',
        position: 'relative',
        borderRadius: 20,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        border: '1px solid black',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '97%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%',
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2.5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
}));

const SearchBar = props => {
    const classes = useStyles();

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handler = (event) => {
        const {target: { value: searchVal } } = event;
        setValue(searchVal);
        dispatch(imageActions.filterImagesBySearchValue(searchVal));
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}> <SearchIcon /> </div>
            <InputBase
                placeholder="What are you looking for?"
                inputProps={{ 'aria-label': 'search' }}
                value={value}
                onChange={handler}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    )
}

export default SearchBar;
