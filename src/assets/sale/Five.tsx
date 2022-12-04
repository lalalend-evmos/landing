function Five(props) {
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
        d="M14.9855 21.18c-1.308 0-2.346-.324-3.114-.972-.768-.648-1.164-1.524-1.188-2.628h2.7c.024.396.174.708.45.936.276.216.66.324 1.152.324.528 0 .93-.132 1.206-.396.288-.276.432-.654.432-1.134v-1.278c0-1.008-.546-1.512-1.638-1.512-.648 0-1.11.18-1.386.54h-2.61l.09-7.2h7.758v2.43h-5.22l-.036 3.42h.036c.108-.42.36-.744.756-.972.408-.24.93-.36 1.566-.36 1.068 0 1.896.324 2.484.972.6.636.9 1.53.9 2.682v1.278c0 1.2-.384 2.148-1.152 2.844-.768.684-1.83 1.026-3.186 1.026z"
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

export default Five;
