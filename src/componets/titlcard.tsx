
export const TiltCards = () => {
  return (
    <>
      <div className="overflow-hidden min-h-[80vh]  flex items-center justify-center   py-28 relative z-20 bg-primary">
        <div className="w-full border">
          <div className="">
            <p className=" px-5  text-center max-w-[35ch] text-4xl bold  sm:text-7xl font-bold m-auto  ">
              Why  <span className="web3-text">Komet</span> ?
            </p>
            <div
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-delay="20"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-center"

              data-aos-once="false"
              className="w-[30%] h-2 cta m-auto mt-10">

            </div>
          </div>
          <div className="w-[95%] lg:w-full my-24 m-auto  lg:flex justify-between items-center  relative">
            <div
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-delay="13"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className="lg:w-[32%]  card-border flex flex-col items-center justify-center p-6 text-center my-8 lg:my-0   lg:h-[500px] " >
              <div className="h-[40%] w-[50%]  flex justify-center items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/secure%20(1).svg?alt=media&token=04baf336-5177-476e-88f5-f9a92cc94a2f"
                  className="object-cover "
                  alt=""
                />

              </div>
              <div>
                <p className="text-2xl  font-bold ">Secure Transactions</p>
                <p className="lg:text-lg text-sm my-2 ">
                  Convert in-game assets to NFTs and vice versa. Trade only credible assets with Komet safety score.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"

              className="lg:w-[32%]  card-border flex flex-col items-center justify-center p-6 text-center my-8 lg:my-0   lg:h-[550px] " >
              <div className="h-[40%] w-[50%] items-center flex justify-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/creadble%20(1).svg?alt=media&token=836e6102-a683-44a1-80d3-76f93bd6a4e2"
                  className="object-cover"
                  alt=""
                />

              </div>
              <div>
                <p className="text-2xl  font-bold  ">Credible in-game assets and NFTs</p>
                <p className="lg:text-lg text-sm my-4 ">
                  Convert in-game assets to NFTs and vice versa. Trade only credible assets with Komet safety score.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="13"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className="lg:w-[32%]  card-border flex flex-col items-center justify-center text-center my-8 lg:my-0  p-6  min-h-[500px] " >
              <div className="h-[40%] w-[50%] flex justify-center items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/future%20(1).svg?alt=media&token=4903e277-8d09-48a0-b0ac-2f7352420e7a"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="text-2xl font-bold ">Instant access to future </p>
                <p className="lg:text-lg text-sm my-2 ">
                  Convert in-game assets to NFTs and vice versa. Trade only credible assets with Komet safety score.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
