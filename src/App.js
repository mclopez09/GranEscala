import React, { Component } from 'react';
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
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './App.css';
import logoNegro from './LogoNegro.png'
import logoBlanco from './LogoBlanco.png'
import InformacionForm from './Informacion.js'


const drawerWidth = 210;
const barHeight = 70;
const logoMeasure = 100;
const columnaInf=200;
const footer = 100;
const currencies = [
  {
    value: 'Mediterranea',
    label: 'Mediterranea',
  },
  {
    value: 'Vegana',
    label: 'Vegana',
  },
  {
    value: 'Italiana',
    label: 'Italiana',
  },
];
console.log(logoBlanco);
const useStyles = makeStyles(theme => ({
  logo:{
    width: logoMeasure,
    height: logoMeasure,
    marginLeft: 50,
  },
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
    height: barHeight,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  columnaInformacion: {
    paddingRight: theme.spacing(4),
    paddingLeft: "20%",
    marginBottom: footer+20,
    marginTop: 20,
    width: columnaInf,
    height: `calc(100% - ${barHeight+footer}px)`
  },
  rowinf: {
    width: columnaInf-10,
    paddingBottom: 30,
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
      <div className={classes.toolbar}>
      <img  className={classes.logo} src={logoBlanco} alt="Logo" />
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
          <div disableTypography>
            <Typography variant="h5">
              UserName
            </Typography>
          </div>
          <Rating className="Calificacion" value={3} readOnly size="large" />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div ClassName={classes.columnaInformacion}>
        <InformacionForm/>
        </div>
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
