interface Props {

  setEmail: any
}
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CTA = ({ setEmail }: Props) => {
  const [value, setValue] = useState("")
  const [isDissabled, setIsdisabled] = useState(true)
  const emailRegex = /\S+@\S+\.\S+/;
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  let navigate = useNavigate()
  const btnStyles = `${isDissabled ? "cursor-not-allowed" : "pointer"}`
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEmail(value)
    console.log("yeah ")
    setValue("")
    navigate(`/rank?email=`)
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
      setIsdisabled(true)
    }

  }, [value])


  return (
    <>
      <div id='cta' className='w-full cta lg:pt-20  lg:pb-32 py-16 lg:py-32 flex flex-col items-center mt-12'>
        <h1 className='text-3xl sm:text-5xl font-bold mb-10 lg:text-7xl '>Claim Early Access</h1>
        <form className=' w-full m-auto ' onSubmit={handleSubmit}>
          <div className=' rounded-xl  max-w-[500px] m-auto  flex flex-row w-[90%] bg-white '>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={value}
              placeholder="Enter your email"
              className="text-black grow rounded-xl px-[20px] lg:px-4 text-sm outline-none lg:text-lg "
            />
            <button className={btnStyles + " text-lg sm:text-lg  rounded-xl cta-btn text-white   px-8  lg:px-10 py-2 lg:text-xl"} disabled={isDissabled} type="submit">Join</button>
          </div>
        </form>
      </div>
    </>
  );
}