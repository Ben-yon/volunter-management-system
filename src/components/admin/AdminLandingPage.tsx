import { useNavigate } from "react-router-dom";
import { media } from '../../assets'

export const AdminLandingPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('sign-in')
  };

  const handleSignUp = () => {
        navigate('sign-up')
  };

  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100%]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[100vh]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[90px] md:h-[37px] md:absolute md:top-[11px] sm:w-[90px] sm:h-[37px] xsm:w-[90px] xsm:h-[37px] xsm:absolute xsm:top-[11px]"
        />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-tertiary font-bold text-center text-8xl ">
            Hello
          </h2>
          <p className="relative -top-24 left-24 font-semibold text-tertiary text-xl">
            Admin
          </p>
          <div className="">
            <button className="relative px-[40.31px] py-[20.46px] bg-black text-white rounded-[23.85px] font-bold leading-6 mr-[42.37px]"
                    onClick={handleSignIn}
            >
              Sign In
            </button>
            <button className="relative px-[40.31px] py-[20.46px] bg-black text-white rounded-[23.85px] font-bold leading-6"
                onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
