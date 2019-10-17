import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {Grid} from 'semantic-ui-react'
import './App.css';
const currencies = [
  {
    value: 'V',
    label: 'Vegana',
  },
  {
    value: 'M',
    label: 'Mediterranea',
  },
  {
    value: 'I',
    label: 'Italiana',
  },
  {
    value: 'O',
    label: 'Otros',
  },
];
const semana = [
  {
    value: 'L',
    label: 'Lunes',
  },
  {
    value: 'M',
    label: 'Martes',
  },
  {
    value: 'M',
    label: 'Miercoles',
  },
  {
    value: 'J',
    label: 'Jueves',
  },
  {
    value: 'V',
    label: 'Viernes',
  },
  {
    value: 'S',
    label: 'Sabado',
  },
  {
    value: 'D',
    label: 'Domingo',
  },
];

const useStyles = makeStyles(theme => ({
  horario: {
    width: 125,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  containerDays: {
    width: 350,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width:300,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 300,
  },
}));

export default function InformacionForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    currency: 'Italiana',
    currencyI: 'Inicio',
    currencyF: 'Fin',
    timeI: 'Inicio',
    timeF: 'Fin',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div class="container">
              <div class="row">
                  <div class="col-6 ">
                  <form class="ui form">
                  <div class="columna">
                          <div class="field">
                          <label>
                          Nombre:
                          </label>
                          <br/>
                          <TextField
                            required
                            id="outlined-required"
                            label="Campo Requerido"
                            defaultValue="Ingresa el nombre de tu Restaurante!!"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                          />
                          </div>
                          <br/>
                          <div class="field">
                          <label>
                          Dirección:
                          </label>
                          <br/>
                         <TextField
                           required
                           id="outlined-required"
                           label="Campo Requerido"
                           defaultValue="Ingresa la dirección"
                           className={classes.textField}
                           margin="normal"
                           variant="outlined"
                         />
                          </div>
                          <br/>
                          <div class="field">
                          <label>
                          Telefono:
                          </label>
                          <br/>
                          <TextField
                            required
                            id="outlined-required"
                            label="Campo Requerido"
                            defaultValue="Ingresa tu número de contacto"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                          />
                          </div>
                          </div>
                        </form>
                  </div>
                  <div class="col-6">
                  <form class="ui form">
                  <div class="columna">
                  <div className={classes.containerDays}>
                        <div class="field">
                        <label>
                        Tipo de comida:
                        </label>
                        <br/>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.textField}
                          value={values.currency}
                          onChange={handleChange('currency')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Selecciona el tipo de comida"
                          margin="normal"
                          variant="outlined"
                        >
                          {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        </div>
                        <div class="field">
                        <label>
                        Dias abierto:
                        </label>
                        <br/>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.currencyI}
                          onChange={handleChange('currencyI')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Inicio"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.currencyF}
                          onChange={handleChange('currencyF')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Fin"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        </div>
                        <div class="field">
                        <label>
                        Horario:
                        </label>
                        <br/>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.timeI}
                          onChange={handleChange('currencyI')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Apertura"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.timeF}
                          onChange={handleChange('currencyF')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Cierre"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        </div>
                        <button class="button" type="submit" value="Hola">Submit</button>
                      </div>
                      </div>
                      </form>
                  </div>
                 </div>
            </div>
);
}
