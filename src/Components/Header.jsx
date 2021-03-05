import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EmojiObjectsIcon from '../../node_modules/@material-ui/icons/EmojiObjects';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const styles = theme => ({
    root: {
        paddingLeft: 55,
    },
  });

const Header = ({classes}) => {




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
                </Toolbar>
            </AppBar>
        </>
    );
}
Header.propTypes = {
    classes: PropTypes.object,
  };
export default withStyles(styles) (Header);