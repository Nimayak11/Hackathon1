const Footer = () => {
  return (
    <section className="self-stretch bg-gray-200 flex flex-row items-start justify-between py-0 pr-[130px] pl-[362px] box-border gap-[20px] max-w-full text-center text-4xl-8 text-white font-inter mq1700:flex-wrap mq900:pl-[90px] mq900:pr-8 mq900:box-border mq1325:pl-[181px] mq1325:pr-[65px] mq1325:box-border">
      <div className="h-[190px] w-[145px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[20px]">
          <img
            className="w-[140px] flex-1 relative max-h-full overflow-hidden object-cover"
            loading="eager"
            alt=""
            src="/logopng@2x.png"
          />
          <b className="self-stretch relative mq450:text-lgi">Gynoguide</b>
        </div>
      </div>
      <div className="h-[407px] w-[1052px] relative max-w-full text-left text-lgi-2 text-crimson font-ubuntu">
        <div className="absolute top-[40px] left-[0px] w-[216px] flex flex-col items-start justify-start gap-[18px]">
          <b className="relative">ADDRESS</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-base text-white font-poppins">
            <div className="w-[147px] relative flex items-center">
              New Delhi, India
            </div>
            <div className="self-stretch relative [text-decoration:underline] whitespace-nowrap">
              gynextdore@gmail.com
            </div>
          </div>
        </div>
        <div className="absolute top-[40px] left-[258px] flex flex-col items-start justify-start gap-[18px] text-lgi-1">
          <b className="relative">HOME</b>
          <div className="flex flex-col items-start justify-start gap-[10px] text-base text-white font-poppins">
            <div className="h-[23px] relative flex items-center shrink-0">
              About Us
            </div>
            <div className="h-[23px] relative flex items-center shrink-0">
              Code Of Conduct
            </div>
            <div className="h-[23px] relative flex items-center shrink-0">
              Contribute
            </div>
            <div className="h-[23px] relative flex items-center shrink-0">
              Donate
            </div>
          </div>
        </div>
        <div className="absolute top-[40px] left-[483px] w-[239px] flex flex-col items-start justify-start gap-[18px]">
          <b className="relative">SERVICES</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-base text-white font-poppins">
            <div className="self-stretch h-[23px] relative flex items-center shrink-0">
              Personalized Advice
            </div>
            <div className="h-[23px] relative flex items-center shrink-0">
              Personalized Diet
            </div>
            <div className="w-[189px] h-[23px] relative flex items-center shrink-0">
              Personalized Exercise
            </div>
          </div>
        </div>
        <div
          className="absolute top-[0px] left-[668px] w-96 flex flex-col items-start justify-start pt-10 px-10 pb-[289px] box-border gap-[25px] z-[1]"
          data-scroll-to="divcolContainer"
        >
          <b className="relative">CONTACTS</b>
          <div className="flex flex-row items-start justify-start gap-[16px] text-13xl text-white font-font-awesome-5-brands">
            <h1 className="m-0 relative text-inherit [text-decoration:underline] leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[19px] mq900:text-7xl mq900:leading-[26px]">
              
            </h1>
            <h1 className="m-0 relative text-inherit [text-decoration:underline] leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[19px] mq900:text-7xl mq900:leading-[26px]">
              
            </h1>
            <h1 className="m-0 relative text-inherit [text-decoration:underline] leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[19px] mq900:text-7xl mq900:leading-[26px]">
              
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
