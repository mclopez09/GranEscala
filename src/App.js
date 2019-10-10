
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CommentIcon from '@material-ui/icons/Comment';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RedeemIcon from '@material-ui/icons/Redeem';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  iconsWhite:{
      color: 'white',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#0a0a0a",
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: "#0a0a0a",
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
        <ListItemIcon >
          <RestaurantIcon className={classes.iconsWhite}/>
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Información</Typography>}/>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <ScheduleIcon className={classes.iconsWhite} />
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Reservas</Typography>}/>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <MailIcon className={classes.iconsWhite}/>
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Buzón</Typography>} />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <PermMediaIcon className={classes.iconsWhite}/>
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Galería</Typography>}/>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <CalendarTodayIcon className={classes.iconsWhite}/>
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Eventos</Typography>} />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <RedeemIcon className={classes.iconsWhite}/>
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Decoración</Typography>} />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <CommentIcon className={classes.iconsWhite}/>
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Comentarios</Typography>} />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <EventSeatIcon className={classes.iconsWhite}/>
        </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Mesas</Typography>} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color= "black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography >
            UserName
            <Rating value={3} readOnly />
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;

/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
