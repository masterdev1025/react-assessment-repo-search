import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBox from '../../components/SearchBox/SearchBox';
const useStyles = makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        marginLeft: '10px'
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    return (

        <AppBar>
            <Container fixed >
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        GIT REPO
                    </Typography>
                    <div className={classes.search}>
                        <SearchBox />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>

    );
}