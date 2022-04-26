import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../utills/userFirebase";

export const CTA = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [n, setn] = useState();
  const [onsubmit, setsubmit] = useState(false);

  const [data, setdata] = useState();

  useEffect(() => {
    (async () => {
      const user: any = await useFirebase(value);
      if (onsubmit) {
        navigate(`/rank?email=${email}`);
      }
    })();
  }, [value]);

  return (
    <>
      <div className="lg:min-h-[80vh] w-full  lg:w-[90%] m-auto flex items-center   cta-con sticky bottom-0 justify-center   bg-primary">
        <div className="cta w-full flex flex-col items-center py-14 lg:py-28 rounded-xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-10 lg:text-7xl ">
            Claim Early Access
          </h1>
          <form
            className=" w-full m-auto "
            onSubmit={(e) => {
              e.preventDefault();
              setValue(email);
              setsubmit(true);
            }}
          >
            <div className=" rounded-xl  max-w-[500px] m-auto  flex flex-row w-[90%] bg-white ">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                className="text-black grow rounded-xl px-[20px] lg:px-4 text-sm outline-none lg:text-lg "
              />
              <button
                className={
                  " text-lg sm:text-lg  rounded-xl cta-btn text-white   px-8  lg:px-10 py-2 lg:text-xl cta"
                }
                disabled={false}
                type="submit"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
