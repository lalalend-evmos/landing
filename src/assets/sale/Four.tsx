function Four(props) {
  return (
    <svg
      width="30"
      height="30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x=".5"
        y=".5"
        width="29"
        height="29"
        rx="4.5"
        fill="url(#paint0_linear)"
        stroke="#002EFF"
      />
      <path
        d="M16.3535 21v-2.412h-5.76v-3.762l4.932-6.966h2.97l-5.382 7.722v.666h3.24V13.44h2.7V21h-2.7z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="15.5396"
          y1="-14.0745"
          x2="-12.6095"
          y2="14.8463"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22E1FF" />
          <stop offset=".5179" stopColor="#1D8FE1" />
          <stop offset="1" stopColor="#625EB1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Four;
