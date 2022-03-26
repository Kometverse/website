interface Props {
    setEmail: any
}
 import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

export const CTA = ({setEmail} :Props) => {
  const [value, setValue] = useState("") 
  const [isDissabled, setIsdisabled] = useState(true)
    const emailRegex = /\S+@\S+\.\S+/;
   const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const btnStyles = `${isDissabled ? "cursor-not-allowed" : "pointer"}`
 const handleChange = (e:any) =>{
    setValue(e.target.value)
    
 }  

 const handleSubmit = (e:any) => {
   e.preventDefault();
   setEmail(value)
   console.log("yeah ")

 }

 useEffect(() => {
     if(value.length) {
    if (emailRegex.test(value)) {
      setIsValid(true);
      setMessage('Your email looks good!');
      setIsdisabled(false)
    } else {
      setIsValid(false);
      setMessage("your email is not valid")
      setIsdisabled(true)
    }
     }else {
       setMessage("")
     }
   
   }, [value])


   return (
     <>
      <form onSubmit={handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={handleChange}
         value={value}
         className="text-black"
       />
       <button className= {btnStyles} disabled={isDissabled} type="submit">Submit</button>
     </form>
   <p className='text-white'>{isValid ? message : message}</p>  
     </>
   );
}