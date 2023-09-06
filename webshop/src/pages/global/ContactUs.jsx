import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ncmm918', 'template_qyr1h3j', form.current, 'gYe7h257SF6k34rbK')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> <br />
      <input type="text" name="from_name" /> <br /> */}
      <br/>
      <TextField  label="Name" variant="outlined" name="from_name" />
      <br/>
      {/* <label>Email</label> <br />
      <input type="email" name="from_email" /> <br /> */}
      <br/>
      <TextField  label="Email" variant="outlined" name="from_email" />
      <br/>
      {/* <label>Message</label> <br />
      <textarea name="message" /> <br /> */}
      <br/>
      <TextField  label="Message" variant="outlined" name="from_name" />
      <br/>
      <br/>
      <Button variant="outlined" type='submit'>Send</Button>
    </form>
  );
};