
import SideMenu from '../components/SideMenu'
import Contact from "../pages/Contact/Contact";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {

  makeStyles,
  CssBaseline,

} from "@material-ui/core";

const theme = createMuiTheme({
 
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

import './App.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
})

function App() {

  
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        
        <SideMenu />
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Contact />
          <CssBaseline />
        </main>
      </div>
     
    </ThemeProvider>
  )
}

export default App
