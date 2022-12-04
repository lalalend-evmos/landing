function ProtocolIncome(props) {
  return (
    <svg
      width="51"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 38.5759l11.4457-11.0217s5.0869 10.5978 16.9565 11.0217c11.8695.424 16.9565-9.326 16.9565-9.326"
        stroke="#002EFF"
      />
      <circle cx="30.6738" cy="19.5" r="19.5" fill="url(#paint0_radial_PI)" />
      <circle
        cx="32.7935"
        cy="17.3804"
        r="16.8804"
        fill="url(#paint1_radial_PI)"
        stroke="url(#paint2_radial_PI)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_PI"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-78.486 32.2074 -.237) scale(23.3614)"
        >
          <stop stopColor="#002EFF" />
          <stop offset="1" stopColor="#002EFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_PI"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-126.027 30.5346 4.7368) scale(28.8292)"
        >
          <stop stopColor="#FF4D00" />
          <stop offset="1" stopColor="#FF4D00" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_PI"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(169.592 22.6006 6.119) scale(21.1192)"
        >
          <stop stopColor="#FFC122" />
          <stop offset="1" stopColor="#FF4D00" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default ProtocolIncome;
