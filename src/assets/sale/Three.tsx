function Three(props) {
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
        d="M14.9315 21.18c-1.344 0-2.412-.336-3.204-1.008-.792-.684-1.188-1.608-1.188-2.772h2.7c0 .48.144.858.432 1.134.3.264.72.396 1.26.396 1.128 0 1.692-.51 1.692-1.53v-1.044c0-.492-.15-.87-.45-1.134-.288-.276-.702-.414-1.242-.414h-1.62V12.72l2.7-2.61h-4.842V7.86h7.65v2.088l-2.736 2.682c1.008.18 1.8.594 2.376 1.242.576.648.864 1.47.864 2.466V17.4c0 1.164-.396 2.088-1.188 2.772-.78.672-1.848 1.008-3.204 1.008z"
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

export default Three;
