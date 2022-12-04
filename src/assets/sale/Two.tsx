function Two(props) {
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
        d="M10.8635 21v-2.376l4.176-4.194c.492-.492.858-.936 1.098-1.332.252-.408.378-.852.378-1.332 0-.528-.144-.936-.432-1.224-.276-.288-.66-.432-1.152-.432-.54 0-.966.162-1.278.486-.3.312-.45.75-.45 1.314h-2.7c0-.864.18-1.608.54-2.232.372-.636.894-1.128 1.566-1.476.672-.348 1.464-.522 2.376-.522.852 0 1.59.162 2.214.486.636.312 1.128.75 1.476 1.314.36.564.54 1.23.54 1.998 0 .852-.21 1.668-.63 2.448-.42.768-1.092 1.584-2.016 2.448l-2.34 2.196h5.13V21h-8.496z"
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

export default Two;
