import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        "& > a": {
            textDecoration: "none",
            color: '#000'
        },
        flexGrow: 1,
        textTransform: "uppercase",
        fontSize: 29,
        letterSpacing: '0.75ch'
    },
    appbar: {
        backgroundColor: '#fff',
        color: '#000',
        "& > div": {
            transition: "min-height 0.5s ease-in"
        },
        height: 64,
        transition: "height 0.5s ease-in-out"
    },
    smallHeight: {
        "& > div": {
            minHeight: 50
        },
        padding: 0,
        height: 50,
    }
}));

export default function Navbar() {
    const navbarRef = useRef(null);
    const classes = useStyles();

    const handleScroll = () => {
        if (navbarRef.current) {
            if (window.scrollY > 10 && navbarRef.current) {
                navbarRef.current.classList.add(classes.smallHeight)
            } else {
                navbarRef.current.classList.remove(classes.smallHeight)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // window.addEventListener('scroll', () => {
    //     if (navbarRef.current) {
    //         if (window.scrollY > 10 && navbarRef.current) {
    //             navbarRef.current.classList.add(classes.smallHeight)
    //         } else {
    //             navbarRef.current.classList.remove(classes.smallHeight)
    //         }
    //     }

    // })

    return (
        <div className={classes.root}>
            <AppBar ref={navbarRef} position="fixed" className={classes.appbar}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">Peshal Agarwal</Link>
                    </Typography>
                    <Button color="inherit" component={Link} to="/experiences"> Experiences</Button>
                    <Button color="inherit" component={Link} to="/projects">projects</Button>
                    <Button color="inherit" component={Link} to="/publications"> Publications</Button>
                    <Button color="inherit" component={Link} to="/awards"> Awards</Button>
                    <Button color="inherit" component={Link} to="/contact"> Contact</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}
