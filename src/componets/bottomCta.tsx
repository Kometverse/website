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
  <div className='w-full  bg-red-500 lg:py-32 py-12  flex flex-col items-center'>
    <h1 className='text-3xl mb-10'>CLAIM EARLY Access</h1>
      <form  className=' w-full m-auto ' onSubmit={handleSubmit}>
        <div className='border-black border rounded-full lg:w-[70%] m-auto flex flex-row w-[90%] bg-white '>
       <input
         id="email"
         name="email"
         type="email"
         onChange={handleChange}
         value={value}
         className="text-black w-full rounded-full"
       />
       <button className= {btnStyles + " text-black text-sm  rounded-full bg-blue-500 px-3 lg:py-3  py-1 lg:text-3xl"} disabled={isDissabled} type="submit">Submit</button>
        </div>
     <p className='text-white'>{isValid ? message : message}</p>  
     </form>
  </div>
     </>
   );
}