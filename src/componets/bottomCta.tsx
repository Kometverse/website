interface Props {

  setEmail: any
}
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

export const CTA = ({ setEmail }: Props) => {
  const [value, setValue] = useState("")
  const [isDissabled, setIsdisabled] = useState(true)
  const emailRegex = /\S+@\S+\.\S+/;
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const btnStyles = `${isDissabled ? "cursor-not-allowed" : "pointer"}`
  const handleChange = (e: any) => {
    setValue(e.target.value)

  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEmail(value)
    console.log("yeah ")
    setValue("")

  }

  useEffect(() => {
    if (value.length) {
      if (emailRegex.test(value)) {
        setIsValid(true);
        setMessage('Your email looks good!');
        setIsdisabled(false)
      } else {
        setIsValid(false);
        setMessage("your email is not valid")
        setIsdisabled(true)
      }
    } else {
      setMessage("")
    }

  }, [value])


  return (
    <>
      <div className='w-full cta lg:py-32 py-20  flex flex-col items-center '>
        <h1 className='text-3xl sm:text-5xl font-bold mb-10 lg:text-7xl '>claim early Access</h1>
        <form className=' w-full m-auto ' onSubmit={handleSubmit}>
          <div className=' border rounded-full  lg:w-[60%] m-auto flex flex-row w-[90%] bg-white '>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={value}
              placeholder="Enter your email"
              className="text-black grow rounded-full px-[5px] lg:px-4 text-sm outline-none sm:text-xl"
            />
            <button className={btnStyles + " text-sm sm:text-lg  rounded-full bg-blue-500  lg:py-3 px-4  lg:px-6 py-2 lg:text-3xl"} disabled={isDissabled} type="submit">join waitlist</button>
          </div>
          <p className='text-white text-center lg:text-xl' >{isValid ? message : message}</p>
        </form>
      </div>
    </>
  );
}