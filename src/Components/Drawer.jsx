import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SettingsContext from '../context/Settings/SettingsContext';
// import EmojiObjectsIcon from '../../node_modules/@material-ui/icons/EmojiObjects';


const styles = theme => ({
  root: {
    position: 'fixed',
    top: 5,
    left: 5,
  },
  menuIcon: {
    paddingTop: 10,
  },
  drawer: {
    width: 250,
  },
  drawerItem: {
    padding: 15,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});
const Drawer = ({ classes, align = 'right' }) => {
  const context = useContext(SettingsContext);
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="Settings"
        onClick={() => setOpen(true)}
      >
        <Typography>
          <MenuIcon fontSize="large" />
        </Typography>
      </IconButton>
      <SwipeableDrawer
        anchor={align}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div className={classes.drawer}>

          {/* <IconButton edge="start" color="inherit" aria-label="menu" className="iconBtn">
            <EmojiObjectsIcon fontSize="large" />
          </IconButton>
          <Typography variant="h5">
            <span className="brandName">Keep</span>
          </Typography> */}

          <Divider />
          <div className={classes.drawerItem}>
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
        </div>
      </SwipeableDrawer>
    </div>
  );
};
Drawer.propTypes = {
  classes: PropTypes.object,
  align: PropTypes.string,
};
export default withStyles(styles)(Drawer);