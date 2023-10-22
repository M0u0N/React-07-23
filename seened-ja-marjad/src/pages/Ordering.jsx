import React, { useRef, useEffect, useState } from 'react';
import "../index.css"
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import GlobalStyles from '@mui/material/GlobalStyles';

import Button from '@mui/material/Button';
import data from "../data/config.json"

export const Ordering = () => {
  const form = useRef();
  const [products, setProducts] = useState([])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ncmm918', 'template_k8k9xyy', form.current, 'gYe7h257SF6k34rbK')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    fetch(data.ProductDataFromURL)
    .then(res => res.json())
    .then(json => setProducts(json.slice() || []))
  }, []);

  

  return (
    <React.Fragment className="form-container">
      <GlobalStyles 
       styles={{ label: { color: 'white' } }} />
    <form
      noValidate
      autoComplete='off'
      className='form-container white-form' 
      ref={form} 
      onSubmit={sendEmail}>
      <br/>

      <TextField
        required 
        label="Nimi"  
        variant="outlined" 
        name="from_name" 
        inputProps={{
          style: { color: 'white' }, 
          'aria-label': 'weight',
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
      <br/>
      <br/>


      <TextField 
        required 
        label="Email" 
        variant="outlined" 
        name="from_email"
        inputProps={{
          style: { color: 'white' }, 
          'aria-label': 'weight',
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
      <br/>
      <br/>

      <FormControl
        required
        variant="outlined">
          <OutlinedInput
            required
            id="outlined-adornment-weight"
            name="from_weight"
            type='Number'
            endAdornment={<InputAdornment position="end" style={{ color: 'white'}}>Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              style: { color: 'white' }, 
              'aria-label': 'weight',
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Kaal</FormHelperText>
        </FormControl>
      <br/>
      <br/>

      <TextField
          required
          id="outlined-select-currency"
          select
          label="toode"
          name="from_product"
          defaultValue="EUR"
          helperText="valige toode"
          inputProps={{
            style: { color: 'white' }, 
            'aria-label': 'weight',
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        >
          {products.map((product, index) => (
            <MenuItem key={product.name} value={product.name}>
              {product.name}
            </MenuItem>
          ))} 
      </TextField>
      <br/>
      <br/>


        <TextField
          label="sõnum"
          variant="outlined"
          name="from_message"
          inputProps={{
            style: { color: 'white' }, 
            'aria-label': 'weight',
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          />
          <br/>
          <br/>

      <Button
        variant="contained"
        type='submit'>Send
      </Button>
      
    </form>
  </React.Fragment>
  );
};
