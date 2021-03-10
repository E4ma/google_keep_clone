import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EmojiObjectsIcon from '../../node_modules/@material-ui/icons/EmojiObjects';
import SettingsContext from '../context/Settings/SettingsContext';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const styles = theme => ({
    root: {
        paddingLeft: 55,
    },
    darkMode: {
        padding: 10,
    },
});

const Header = ({ classes }) => {
    const context = useContext(SettingsContext);



    return (
        <>
            <AppBar position="static" className="bg-warning py-1">
                <Toolbar className={classes.root}>

                    <IconButton edge="start" color="inherit" aria-label="menu" className="iconBtn">
                        <EmojiObjectsIcon fontSize="large" />
                    </IconButton>

                    <Typography variant="h5">
                        <span className="brandName">Google Keep Clone</span>
                    </Typography>

                    <div className={classes.darkMode}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={context.darkMode}
                                    onChange={() => context.onSetDarkMode(!context.darkMode)}
                                />
                            }
                            label="Dark Mode"
                        />

                    </div>

                </Toolbar>
            </AppBar>
        </>
    );
}
Header.propTypes = {
    classes: PropTypes.object,
};
export default withStyles(styles)(Header);