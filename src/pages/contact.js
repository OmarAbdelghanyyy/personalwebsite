import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



const SERVICE_ID = 'service_9kzaxgz';
const TEMPLATE_ID = "template_b1jr8se";
const USER_ID = "MBebflZ6xCJD_L1kK";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        USER_ID
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message sent successfully'
          })
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          Swal.fire({
            icon: 'eroor',
            title: 'Oops something went wrong'
          })
          console.log(error.text);
        }
      );
      form.current.value=''
  };

  return (
    <div className='Contact'>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <fieldset>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </fieldset>
      </form>
      <p>GitHub</p>
      <p>Linkedin</p>
      <p>Email</p>
    </div>
  );
};
export default Contact;
