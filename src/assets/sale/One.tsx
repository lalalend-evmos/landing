function One(props) {
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
        d="M11.0435 21v-2.34h3.312v-8.334l-3.348 2.484v-2.79l3.078-2.16h2.97v10.8h2.628V21h-8.64z"
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

export default One;
