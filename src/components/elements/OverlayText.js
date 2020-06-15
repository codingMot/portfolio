import React from 'react'
import { motion } from 'framer-motion'
import { useDarkmode } from '../helpers'
import styled from 'styled-components'

const SVG = styled(motion.svg)`
  stroke: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  max-width: 90vw;
  height: 100px;
`

export default function OverlayText({ title }) {
  const [isDarkmode] = useDarkmode()

  const icon = {
    hidden: {
      opacity: 1,
      visibility: 'hidden',
      pathLength: 0,
      // use for Photo Collections
      // strokeDasharray: 550,
      // strokeDashoffset: 550,
      fill: isDarkmode ? 'rgba(255, 255, 255, 0)' : 'rgba(33, 36, 41, 0)',
    },
    visible: {
      opacity: 0,
      visibility: 'visible',
      pathLength: 1,
      // strokeDashoffset: 0,
      fill: isDarkmode ? 'rgba(255, 255, 255, 1)' : 'rgba(33, 36, 41, 1)',
      transition: {
        default: {
          duration: 2,
          delay: 1,
          ease: 'easeOut',
        },
        visibility: {
          duraction: 0.2,
          delay: 0.2,
        },
        fill: {
          duration: 1.25,
          delay: 1.5,
          ease: [1, 0, 0.8, 1],
        },
        opacity: {
          transition: 0.3,
          delay: 3.5,
        },
      },
    },
  }
  return title === 'homepage' ? (
    <SVG
      // width="500"
      // height="40"
      viewBox="0 0 499 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1.90423 2.51999H7.66423L20.6722 27.048L33.3442 2.51999H39.1042L41.0242 39H35.3122L34.1602 11.448L23.0242 32.856H18.0322L6.84823 11.976L5.69623 39H0.0322266L1.90423 2.51999Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M58.9504 39.768C56.7744 39.768 54.8064 39.24 53.0464 38.184C51.3184 37.128 49.9424 35.624 48.9184 33.672C47.9264 31.72 47.4304 29.464 47.4304 26.904C47.4304 24.6 47.9264 22.472 48.9184 20.52C49.9104 18.568 51.3023 17 53.0943 15.816C54.9183 14.6 56.9503 13.992 59.1903 13.992C60.9824 13.992 62.5984 14.36 64.0384 15.096C65.4784 15.8 66.6144 16.808 67.4464 18.12L67.5424 14.76H72.8704V39H67.5424L67.4464 35.688C65.6864 38.408 62.8544 39.768 58.9504 39.768ZM60.3424 34.824C62.5183 34.824 64.2784 34.088 65.6224 32.616C66.9984 31.112 67.6864 29.192 67.6864 26.856C67.6864 24.52 66.9984 22.616 65.6224 21.144C64.2464 19.672 62.4864 18.936 60.3424 18.936C58.1983 18.936 56.4384 19.672 55.0624 21.144C53.6864 22.616 52.9984 24.52 52.9984 26.856C52.9984 29.192 53.6704 31.112 55.0144 32.616C56.3904 34.088 58.1663 34.824 60.3424 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M91.0699 39.768C88.0939 39.768 85.9019 39.032 84.4939 37.56C83.0859 36.056 82.3819 33.704 82.3819 30.504V19.416H77.2939V14.76H82.3819V7.992H87.9019V14.76H95.8699V19.416H87.9019V29.688C87.9019 31.512 88.2059 32.84 88.8139 33.672C89.4539 34.504 90.5259 34.92 92.0299 34.92C93.5979 34.92 95.1019 34.536 96.5419 33.768L97.1659 38.376C96.4619 38.792 95.5659 39.128 94.4779 39.384C93.3899 39.64 92.2539 39.768 91.0699 39.768Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M112.726 39.768C109.75 39.768 107.558 39.032 106.15 37.56C104.742 36.056 104.038 33.704 104.038 30.504V19.416H98.9501V14.76H104.038V7.992H109.558V14.76H117.526V19.416H109.558V29.688C109.558 31.512 109.862 32.84 110.47 33.672C111.11 34.504 112.182 34.92 113.686 34.92C115.254 34.92 116.758 34.536 118.198 33.768L118.822 38.376C118.118 38.792 117.222 39.128 116.134 39.384C115.046 39.64 113.91 39.768 112.726 39.768Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M123.966 0.119995H129.486V17.592C130.19 16.44 131.166 15.56 132.414 14.952C133.694 14.312 135.166 13.992 136.83 13.992C139.742 13.992 141.966 14.888 143.502 16.68C145.07 18.44 145.854 20.984 145.854 24.312V39H140.334V25.32C140.334 23.144 139.918 21.528 139.086 20.472C138.286 19.416 137.038 18.888 135.342 18.888C133.486 18.888 132.046 19.496 131.022 20.712C129.998 21.928 129.486 23.624 129.486 25.8V39H123.966V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M153.498 14.76H159.018V39H153.498V14.76ZM156.234 9.144C155.242 9.144 154.41 8.824 153.738 8.184C153.098 7.512 152.778 6.68 152.778 5.688C152.778 4.696 153.098 3.88 153.738 3.24C154.41 2.6 155.242 2.28 156.234 2.28C157.226 2.28 158.042 2.6 158.682 3.24C159.354 3.88 159.69 4.696 159.69 5.688C159.69 6.68 159.354 7.512 158.682 8.184C158.042 8.824 157.226 9.144 156.234 9.144Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M176.794 39.768C174.618 39.768 172.65 39.24 170.89 38.184C169.162 37.128 167.786 35.624 166.762 33.672C165.77 31.72 165.274 29.464 165.274 26.904C165.274 24.6 165.77 22.472 166.762 20.52C167.754 18.568 169.146 17 170.938 15.816C172.762 14.6 174.794 13.992 177.034 13.992C178.826 13.992 180.442 14.36 181.882 15.096C183.322 15.8 184.458 16.808 185.29 18.12L185.386 14.76H190.714V39H185.386L185.29 35.688C183.53 38.408 180.698 39.768 176.794 39.768ZM178.186 34.824C180.362 34.824 182.122 34.088 183.466 32.616C184.842 31.112 185.53 29.192 185.53 26.856C185.53 24.52 184.842 22.616 183.466 21.144C182.09 19.672 180.33 18.936 178.186 18.936C176.042 18.936 174.282 19.672 172.906 21.144C171.53 22.616 170.842 24.52 170.842 26.856C170.842 29.192 171.514 31.112 172.858 32.616C174.234 34.088 176.01 34.824 178.186 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M205.266 39.768C203.602 39.768 201.97 39.56 200.37 39.144C198.802 38.728 197.554 38.168 196.626 37.464L197.346 32.808C198.37 33.512 199.602 34.104 201.042 34.584C202.482 35.032 203.842 35.256 205.122 35.256C208.386 35.256 210.018 34.36 210.018 32.568C210.018 31.928 209.858 31.432 209.538 31.08C209.25 30.696 208.738 30.36 208.002 30.072C207.298 29.752 206.242 29.384 204.834 28.968C202.082 28.168 200.098 27.176 198.882 25.992C197.666 24.776 197.058 23.224 197.058 21.336C197.058 19.064 197.906 17.272 199.602 15.96C201.298 14.648 203.618 13.992 206.562 13.992C207.97 13.992 209.394 14.168 210.834 14.52C212.274 14.872 213.442 15.336 214.338 15.912L213.618 20.424C212.626 19.848 211.49 19.384 210.21 19.032C208.962 18.68 207.778 18.504 206.658 18.504C205.282 18.504 204.226 18.712 203.49 19.128C202.754 19.544 202.386 20.152 202.386 20.952C202.386 21.56 202.53 22.056 202.818 22.44C203.106 22.792 203.57 23.128 204.21 23.448C204.882 23.736 205.858 24.056 207.138 24.408C210.146 25.272 212.29 26.312 213.57 27.528C214.85 28.744 215.49 30.36 215.49 32.376C215.49 34.648 214.562 36.456 212.706 37.8C210.882 39.112 208.402 39.768 205.266 39.768Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M249.582 34.392C251.95 34.392 254.094 33.832 256.014 32.712C257.966 31.592 259.518 29.992 260.67 27.912C261.822 25.832 262.398 23.448 262.398 20.76C262.398 18.232 261.87 15.944 260.814 13.896C259.758 11.816 258.238 10.168 256.254 8.952C254.302 7.736 252.078 7.128 249.582 7.128C247.214 7.128 245.054 7.704 243.102 8.856C241.182 9.976 239.646 11.576 238.494 13.656C237.374 15.736 236.814 18.104 236.814 20.76C236.814 23.288 237.342 25.592 238.398 27.672C239.454 29.72 240.958 31.352 242.91 32.568C244.862 33.784 247.086 34.392 249.582 34.392ZM249.582 39.768C246.126 39.768 242.958 38.984 240.078 37.416C237.198 35.816 234.894 33.56 233.166 30.648C231.438 27.736 230.574 24.44 230.574 20.76C230.574 17.368 231.374 14.232 232.974 11.352C234.574 8.472 236.83 6.152 239.742 4.392C242.654 2.632 245.934 1.752 249.582 1.752C253.07 1.752 256.254 2.552 259.134 4.152C262.014 5.72 264.318 7.96 266.046 10.872C267.774 13.784 268.638 17.08 268.638 20.76C268.638 24.152 267.838 27.288 266.238 30.168C264.638 33.048 262.366 35.368 259.422 37.128C256.51 38.888 253.23 39.768 249.582 39.768Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M288.724 39.768C286.932 39.768 285.3 39.416 283.828 38.712C282.388 38.008 281.252 37 280.42 35.688L280.372 39H275.044V0.119995H280.564V17.976C282.292 15.32 285.092 13.992 288.964 13.992C291.14 13.992 293.092 14.52 294.82 15.576C296.58 16.632 297.956 18.136 298.948 20.088C299.972 22.04 300.484 24.296 300.484 26.856C300.484 29.16 299.988 31.288 298.996 33.24C298.004 35.192 296.596 36.776 294.772 37.992C292.98 39.176 290.964 39.768 288.724 39.768ZM287.572 34.824C289.716 34.824 291.476 34.088 292.852 32.616C294.228 31.144 294.916 29.24 294.916 26.904C294.916 24.568 294.228 22.664 292.852 21.192C291.508 19.688 289.748 18.936 287.572 18.936C285.396 18.936 283.62 19.688 282.244 21.192C280.9 22.664 280.228 24.568 280.228 26.904C280.228 29.24 280.916 31.144 282.292 32.616C283.668 34.088 285.428 34.824 287.572 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M319.395 39.768C316.643 39.768 314.227 39.272 312.147 38.28C310.067 37.256 308.451 35.768 307.299 33.816C306.147 31.864 305.571 29.576 305.571 26.952C305.571 24.488 306.067 22.28 307.059 20.328C308.083 18.376 309.523 16.84 311.379 15.72C313.235 14.568 315.379 13.992 317.811 13.992C320.019 13.992 321.971 14.472 323.667 15.432C325.395 16.392 326.739 17.784 327.699 19.608C328.659 21.432 329.139 23.56 329.139 25.992C329.139 27.208 329.075 28.12 328.947 28.728H311.091C311.443 30.808 312.371 32.424 313.875 33.576C315.411 34.696 317.411 35.256 319.875 35.256C322.755 35.256 325.475 34.632 328.035 33.384L328.611 37.704C327.427 38.344 326.019 38.84 324.387 39.192C322.755 39.576 321.091 39.768 319.395 39.768ZM323.763 24.552C323.635 22.568 323.043 21.032 321.987 19.944C320.931 18.856 319.475 18.312 317.619 18.312C315.795 18.312 314.307 18.856 313.155 19.944C312.003 21.032 311.299 22.568 311.043 24.552H323.763Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M335.748 14.76H341.028L341.076 18.84C341.748 17.4 342.676 16.296 343.86 15.528C345.076 14.76 346.468 14.376 348.036 14.376C348.452 14.376 348.932 14.424 349.476 14.52C350.02 14.616 350.484 14.744 350.868 14.904L350.34 20.088C349.444 19.704 348.484 19.512 347.46 19.512C345.508 19.512 343.988 20.232 342.9 21.672C341.812 23.08 341.268 25.048 341.268 27.576V39H335.748V14.76Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M356.232 0.119995H361.752V17.592C362.456 16.44 363.432 15.56 364.68 14.952C365.96 14.312 367.432 13.992 369.096 13.992C372.008 13.992 374.232 14.888 375.768 16.68C377.336 18.44 378.12 20.984 378.12 24.312V39H372.6V25.32C372.6 23.144 372.184 21.528 371.352 20.472C370.552 19.416 369.304 18.888 367.608 18.888C365.752 18.888 364.312 19.496 363.288 20.712C362.264 21.928 361.752 23.624 361.752 25.8V39H356.232V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M397.139 39.768C394.771 39.768 392.611 39.24 390.659 38.184C388.707 37.096 387.139 35.56 385.955 33.576C384.803 31.592 384.227 29.352 384.227 26.856C384.227 24.552 384.771 22.424 385.859 20.472C386.947 18.52 388.483 16.952 390.467 15.768C392.451 14.584 394.675 13.992 397.139 13.992C399.507 13.992 401.667 14.536 403.619 15.624C405.571 16.68 407.123 18.2 408.275 20.184C409.459 22.136 410.051 24.36 410.051 26.856C410.051 29.192 409.507 31.336 408.419 33.288C407.331 35.24 405.795 36.808 403.811 37.992C401.827 39.176 399.603 39.768 397.139 39.768ZM397.139 34.824C399.315 34.824 401.075 34.088 402.419 32.616C403.795 31.112 404.483 29.192 404.483 26.856C404.483 24.52 403.795 22.616 402.419 21.144C401.043 19.672 399.283 18.936 397.139 18.936C394.995 18.936 393.235 19.672 391.859 21.144C390.483 22.616 389.795 24.52 389.795 26.856C389.795 29.192 390.467 31.112 391.811 32.616C393.187 34.088 394.963 34.824 397.139 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M416.279 0.119995H421.799V39H416.279V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M427.959 34.824L441.447 19.416H428.487V14.76H448.407V18.936L434.823 34.344H448.743V39H427.959V34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M466.957 39.768C464.205 39.768 461.789 39.272 459.709 38.28C457.629 37.256 456.013 35.768 454.861 33.816C453.709 31.864 453.133 29.576 453.133 26.952C453.133 24.488 453.629 22.28 454.621 20.328C455.645 18.376 457.085 16.84 458.941 15.72C460.797 14.568 462.941 13.992 465.373 13.992C467.581 13.992 469.533 14.472 471.229 15.432C472.957 16.392 474.301 17.784 475.261 19.608C476.221 21.432 476.701 23.56 476.701 25.992C476.701 27.208 476.637 28.12 476.509 28.728H458.653C459.005 30.808 459.933 32.424 461.437 33.576C462.973 34.696 464.973 35.256 467.437 35.256C470.317 35.256 473.037 34.632 475.597 33.384L476.173 37.704C474.989 38.344 473.581 38.84 471.949 39.192C470.317 39.576 468.653 39.768 466.957 39.768ZM471.325 24.552C471.197 22.568 470.605 21.032 469.549 19.944C468.493 18.856 467.037 18.312 465.181 18.312C463.357 18.312 461.869 18.856 460.717 19.944C459.565 21.032 458.861 22.568 458.605 24.552H471.325Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M483.31 14.76H488.59L488.638 18.84C489.31 17.4 490.238 16.296 491.422 15.528C492.638 14.76 494.03 14.376 495.598 14.376C496.014 14.376 496.494 14.424 497.038 14.52C497.582 14.616 498.046 14.744 498.43 14.904L497.902 20.088C497.006 19.704 496.046 19.512 495.022 19.512C493.07 19.512 491.55 20.232 490.462 21.672C489.374 23.08 488.83 25.048 488.83 27.576V39H483.31V14.76Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
    </SVG>
  ) : title === 'about' ? (
    <SVG
      // width="240"
      // height="40"
      viewBox="0 0 241 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M15.0349 2.5413H21.5737L36.4568 39.3452H29.9668L26.063 29.0304H10.2528L6.34906 39.3452H0.151855L15.0349 2.5413ZM24.2087 24.2362L18.1091 8.15874L12.0583 24.2362H24.2087Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M55.4872 40.12C53.6654 40.12 52.0063 39.7649 50.5099 39.0546C49.046 38.3444 47.8911 37.3274 47.0453 36.0038L46.9965 39.3452H41.5801V0.119995H47.1917V18.1345C48.9484 15.4549 51.7949 14.1152 55.7312 14.1152C57.9433 14.1152 59.9277 14.6478 61.6844 15.7132C63.4736 16.7786 64.8724 18.2959 65.8809 20.2653C66.9219 22.2346 67.4424 24.5106 67.4424 27.0934C67.4424 29.4178 66.9382 31.5647 65.9297 33.534C64.9212 35.5034 63.4899 37.1014 61.6356 38.3282C59.8138 39.5227 57.7644 40.12 55.4872 40.12ZM54.316 35.1321C56.4956 35.1321 58.2849 34.3896 59.6837 32.9045C61.0826 31.4194 61.782 29.4985 61.782 27.1418C61.782 24.785 61.0826 22.8641 59.6837 21.3791C58.3174 19.8617 56.5282 19.103 54.316 19.103C52.1039 19.103 50.2984 19.8617 48.8996 21.3791C47.5333 22.8641 46.8501 24.785 46.8501 27.1418C46.8501 29.4985 47.5495 31.4194 48.9484 32.9045C50.3472 34.3896 52.1365 35.1321 54.316 35.1321Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M85.7397 40.12C83.3324 40.12 81.1366 39.5873 79.1522 38.5219C77.1678 37.4243 75.5737 35.8746 74.3701 33.873C73.1989 31.8714 72.6134 29.6115 72.6134 27.0934C72.6134 24.7689 73.1664 22.622 74.2725 20.6527C75.3785 18.6834 76.94 17.1014 78.957 15.9069C80.9739 14.7124 83.2348 14.1152 85.7397 14.1152C88.1471 14.1152 90.3429 14.664 92.3273 15.7616C94.3117 16.827 95.8895 18.3605 97.0606 20.3621C98.2643 22.3315 98.8661 24.5752 98.8661 27.0934C98.8661 29.4501 98.3131 31.6131 97.207 33.5825C96.1009 35.5518 94.5395 37.1337 92.5225 38.3282C90.5056 39.5227 88.2446 40.12 85.7397 40.12ZM85.7397 35.1321C87.9519 35.1321 89.7411 34.3896 91.1074 32.9045C92.5062 31.3871 93.2057 29.4501 93.2057 27.0934C93.2057 24.7366 92.5062 22.8157 91.1074 21.3307C89.7086 19.8456 87.9193 19.103 85.7397 19.103C83.5601 19.103 81.7709 19.8456 80.3721 21.3307C78.9732 22.8157 78.2738 24.7366 78.2738 27.0934C78.2738 29.4501 78.957 31.3871 80.3233 32.9045C81.7221 34.3896 83.5276 35.1321 85.7397 35.1321Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M114.127 40.12C111.134 40.12 108.873 39.2806 107.344 37.6018C105.815 35.9231 105.051 33.4695 105.051 30.2411V14.89H110.662V28.8851C110.662 31.1127 111.053 32.7269 111.834 33.7277C112.647 34.6963 113.964 35.1805 115.786 35.1805C117.608 35.1805 119.023 34.5671 120.031 33.3403C121.072 32.1135 121.593 30.4025 121.593 28.2072V14.89H127.205V39.3452H121.837L121.739 36.2459C121.056 37.4727 120.048 38.4251 118.714 39.103C117.413 39.781 115.884 40.12 114.127 40.12Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M145.712 40.12C142.687 40.12 140.458 39.3775 139.027 37.8924C137.596 36.375 136.88 34.0022 136.88 30.7738V19.5873H131.708V14.89H136.88V8.06189H142.492V14.89H150.592V19.5873H142.492V29.9505C142.492 31.7907 142.801 33.1305 143.419 33.9699C144.069 34.8093 145.159 35.229 146.688 35.229C148.282 35.229 149.811 34.8415 151.275 34.0667L151.909 38.7156C151.194 39.1353 150.283 39.4743 149.177 39.7326C148.071 39.9909 146.916 40.12 145.712 40.12Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M169.911 2.5413H175.766L188.99 27.2871L201.873 2.5413H207.728L209.68 39.3452H203.873L202.702 11.5486L191.381 33.1466H186.306L174.937 12.0813L173.766 39.3452H168.008L169.911 2.5413Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M230.246 40.12C227.448 40.12 224.992 39.6196 222.878 38.6188C220.763 37.5857 219.12 36.0845 217.949 34.1152C216.778 32.1458 216.193 29.8375 216.193 27.1902C216.193 24.7043 216.697 22.4767 217.705 20.5074C218.746 18.5381 220.21 16.9884 222.097 15.8585C223.984 14.6963 226.163 14.1152 228.636 14.1152C230.88 14.1152 232.865 14.5994 234.589 15.5679C236.346 16.5365 237.712 17.9408 238.688 19.781C239.664 21.6212 240.152 23.7681 240.152 26.2217C240.152 27.4485 240.087 28.3686 239.957 28.982H221.804C222.162 31.0805 223.105 32.7108 224.634 33.873C226.196 35.003 228.229 35.5679 230.734 35.5679C233.662 35.5679 236.427 34.9384 239.03 33.6793L239.615 38.0377C238.411 38.6834 236.98 39.1838 235.321 39.5389C233.662 39.9263 231.97 40.12 230.246 40.12ZM234.687 24.7689C234.556 22.7673 233.955 21.2177 232.881 20.12C231.808 19.0223 230.327 18.4735 228.441 18.4735C226.586 18.4735 225.074 19.0223 223.902 20.12C222.731 21.2177 222.016 22.7673 221.755 24.7689H234.687Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
    </SVG>
  ) : title === 'photography' ? (
    <SVG
      // width="310"
      // height="52"
      viewBox="0 0 310 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0.65625 2.51999H11.9843C14.5123 2.51999 16.7523 3 18.7043 3.96C20.6563 4.888 22.1763 6.232 23.2642 7.992C24.3843 9.752 24.9443 11.816 24.9443 14.184C24.9443 16.488 24.4163 18.536 23.3603 20.328C22.3043 22.088 20.7843 23.48 18.8003 24.504C16.8483 25.496 14.5603 25.992 11.9363 25.992H6.41625V39H0.65625V2.51999ZM6.41625 21.096H11.0723C13.6963 21.096 15.6803 20.52 17.0243 19.368C18.3683 18.216 19.0403 16.52 19.0403 14.28C19.0403 12.04 18.3523 10.344 16.9762 9.192C15.6322 8.008 13.6643 7.41599 11.0723 7.41599H6.41625V21.096Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M30.732 0.119995H36.252V17.592C36.956 16.44 37.932 15.56 39.18 14.952C40.46 14.312 41.932 13.992 43.596 13.992C46.508 13.992 48.732 14.888 50.268 16.68C51.836 18.44 52.62 20.984 52.62 24.312V39H47.1V25.32C47.1 23.144 46.684 21.528 45.852 20.472C45.052 19.416 43.804 18.888 42.108 18.888C40.252 18.888 38.812 19.496 37.788 20.712C36.764 21.928 36.252 23.624 36.252 25.8V39H30.732V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M71.6393 39.768C69.2713 39.768 67.1113 39.24 65.1593 38.184C63.2073 37.096 61.6393 35.56 60.4553 33.576C59.3033 31.592 58.7272 29.352 58.7272 26.856C58.7272 24.552 59.2713 22.424 60.3593 20.472C61.4473 18.52 62.9833 16.952 64.9673 15.768C66.9513 14.584 69.1753 13.992 71.6393 13.992C74.0073 13.992 76.1673 14.536 78.1193 15.624C80.0713 16.68 81.6233 18.2 82.7753 20.184C83.9593 22.136 84.5513 24.36 84.5513 26.856C84.5513 29.192 84.0072 31.336 82.9193 33.288C81.8313 35.24 80.2953 36.808 78.3113 37.992C76.3273 39.176 74.1033 39.768 71.6393 39.768ZM71.6393 34.824C73.8153 34.824 75.5752 34.088 76.9193 32.616C78.2952 31.112 78.9833 29.192 78.9833 26.856C78.9833 24.52 78.2952 22.616 76.9193 21.144C75.5433 19.672 73.7833 18.936 71.6393 18.936C69.4953 18.936 67.7353 19.672 66.3593 21.144C64.9833 22.616 64.2952 24.52 64.2952 26.856C64.2952 29.192 64.9673 31.112 66.3113 32.616C67.6873 34.088 69.4633 34.824 71.6393 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M101.195 39.768C98.2189 39.768 96.0269 39.032 94.6189 37.56C93.2109 36.056 92.5069 33.704 92.5069 30.504V19.416H87.4189V14.76H92.5069V7.992H98.0269V14.76H105.995V19.416H98.0269V29.688C98.0269 31.512 98.3309 32.84 98.9389 33.672C99.5789 34.504 100.651 34.92 102.155 34.92C103.723 34.92 105.227 34.536 106.667 33.768L107.291 38.376C106.587 38.792 105.691 39.128 104.603 39.384C103.515 39.64 102.379 39.768 101.195 39.768Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M123.811 39.768C121.443 39.768 119.283 39.24 117.331 38.184C115.379 37.096 113.811 35.56 112.627 33.576C111.475 31.592 110.899 29.352 110.899 26.856C110.899 24.552 111.443 22.424 112.531 20.472C113.619 18.52 115.155 16.952 117.139 15.768C119.123 14.584 121.347 13.992 123.811 13.992C126.179 13.992 128.339 14.536 130.291 15.624C132.243 16.68 133.795 18.2 134.947 20.184C136.131 22.136 136.723 24.36 136.723 26.856C136.723 29.192 136.179 31.336 135.091 33.288C134.003 35.24 132.467 36.808 130.483 37.992C128.499 39.176 126.275 39.768 123.811 39.768ZM123.811 34.824C125.987 34.824 127.747 34.088 129.091 32.616C130.467 31.112 131.155 29.192 131.155 26.856C131.155 24.52 130.467 22.616 129.091 21.144C127.715 19.672 125.955 18.936 123.811 18.936C121.667 18.936 119.907 19.672 118.531 21.144C117.155 22.616 116.467 24.52 116.467 26.856C116.467 29.192 117.139 31.112 118.483 32.616C119.859 34.088 121.635 34.824 123.811 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M153.79 51.192C152.158 51.192 150.462 51 148.702 50.616C146.942 50.232 145.566 49.768 144.574 49.224L145.198 44.136C146.254 44.808 147.502 45.336 148.942 45.72C150.414 46.104 151.902 46.296 153.406 46.296C156.286 46.296 158.398 45.608 159.742 44.232C161.118 42.856 161.806 40.712 161.806 37.8V35.688C160.046 38.408 157.214 39.768 153.31 39.768C151.134 39.768 149.166 39.24 147.406 38.184C145.678 37.128 144.302 35.624 143.278 33.672C142.286 31.72 141.79 29.464 141.79 26.904C141.79 24.6 142.286 22.472 143.278 20.52C144.27 18.568 145.662 17 147.454 15.816C149.278 14.6 151.31 13.992 153.55 13.992C155.342 13.992 156.958 14.36 158.398 15.096C159.838 15.8 160.974 16.808 161.806 18.12L161.902 14.76H167.23V37.416C167.23 41.96 166.094 45.384 163.822 47.688C161.582 50.024 158.238 51.192 153.79 51.192ZM154.702 34.824C156.878 34.824 158.638 34.088 159.982 32.616C161.358 31.112 162.046 29.192 162.046 26.856C162.046 24.52 161.358 22.616 159.982 21.144C158.606 19.672 156.846 18.936 154.702 18.936C152.558 18.936 150.798 19.672 149.422 21.144C148.046 22.616 147.358 24.52 147.358 26.856C147.358 29.192 148.03 31.112 149.374 32.616C150.75 34.088 152.526 34.824 154.702 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M175.013 14.76H180.293L180.341 18.84C181.013 17.4 181.941 16.296 183.125 15.528C184.341 14.76 185.733 14.376 187.301 14.376C187.717 14.376 188.197 14.424 188.741 14.52C189.285 14.616 189.749 14.744 190.133 14.904L189.605 20.088C188.709 19.704 187.749 19.512 186.725 19.512C184.773 19.512 183.253 20.232 182.165 21.672C181.077 23.08 180.533 25.048 180.533 27.576V39H175.013V14.76Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M204.778 39.768C202.602 39.768 200.634 39.24 198.874 38.184C197.146 37.128 195.77 35.624 194.746 33.672C193.754 31.72 193.258 29.464 193.258 26.904C193.258 24.6 193.754 22.472 194.746 20.52C195.738 18.568 197.131 17 198.923 15.816C200.747 14.6 202.778 13.992 205.018 13.992C206.81 13.992 208.427 14.36 209.867 15.096C211.307 15.8 212.442 16.808 213.274 18.12L213.37 14.76H218.699V39H213.37L213.274 35.688C211.514 38.408 208.682 39.768 204.778 39.768ZM206.171 34.824C208.347 34.824 210.106 34.088 211.451 32.616C212.826 31.112 213.514 29.192 213.514 26.856C213.514 24.52 212.826 22.616 211.451 21.144C210.075 19.672 208.315 18.936 206.171 18.936C204.027 18.936 202.266 19.672 200.89 21.144C199.514 22.616 198.826 24.52 198.826 26.856C198.826 29.192 199.498 31.112 200.842 32.616C202.218 34.088 203.995 34.824 206.171 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M226.482 14.76H231.666L231.714 18.36C233.474 15.448 236.37 13.992 240.402 13.992C242.578 13.992 244.53 14.52 246.258 15.576C248.018 16.632 249.394 18.136 250.386 20.088C251.41 22.04 251.922 24.296 251.922 26.856C251.922 29.16 251.426 31.288 250.434 33.24C249.442 35.192 248.034 36.776 246.21 37.992C244.418 39.176 242.402 39.768 240.162 39.768C238.37 39.768 236.77 39.432 235.362 38.76C233.954 38.088 232.834 37.112 232.002 35.832V50.76H226.482V14.76ZM239.01 34.824C241.154 34.824 242.914 34.088 244.29 32.616C245.666 31.144 246.354 29.24 246.354 26.904C246.354 24.568 245.666 22.664 244.29 21.192C242.946 19.688 241.186 18.936 239.01 18.936C236.834 18.936 235.058 19.688 233.682 21.192C232.338 22.664 231.666 24.568 231.666 26.904C231.666 29.24 232.354 31.144 233.73 32.616C235.106 34.088 236.866 34.824 239.01 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M258.169 0.119995H263.689V17.592C264.393 16.44 265.369 15.56 266.617 14.952C267.897 14.312 269.37 13.992 271.034 13.992C273.946 13.992 276.17 14.888 277.706 16.68C279.274 18.44 280.057 20.984 280.057 24.312V39H274.538V25.32C274.538 23.144 274.121 21.528 273.289 20.472C272.489 19.416 271.242 18.888 269.546 18.888C267.69 18.888 266.249 19.496 265.225 20.712C264.201 21.928 263.689 23.624 263.689 25.8V39H258.169V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M293.915 37.128L283.739 14.76H289.691L296.795 31.32L303.611 14.76H309.515L293.147 50.76H287.291L293.915 37.128Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
    </SVG>
  ) : (
    <SVG
      // width="390"
      // height="40"
      viewBox="0 0 390 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0.65625 2.51999H11.9843C14.5123 2.51999 16.7523 3 18.7043 3.96C20.6563 4.888 22.1763 6.232 23.2642 7.992C24.3843 9.752 24.9443 11.816 24.9443 14.184C24.9443 16.488 24.4163 18.536 23.3603 20.328C22.3043 22.088 20.7843 23.48 18.8003 24.504C16.8483 25.496 14.5603 25.992 11.9363 25.992H6.41625V39H0.65625V2.51999ZM6.41625 21.096H11.0723C13.6963 21.096 15.6803 20.52 17.0243 19.368C18.3683 18.216 19.0403 16.52 19.0403 14.28C19.0403 12.04 18.3523 10.344 16.9762 9.192C15.6322 8.008 13.6643 7.41599 11.0723 7.41599H6.41625V21.096Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M30.732 0.119995H36.252V17.592C36.956 16.44 37.932 15.56 39.18 14.952C40.46 14.312 41.932 13.992 43.596 13.992C46.508 13.992 48.732 14.888 50.268 16.68C51.836 18.44 52.62 20.984 52.62 24.312V39H47.1V25.32C47.1 23.144 46.684 21.528 45.852 20.472C45.052 19.416 43.804 18.888 42.108 18.888C40.252 18.888 38.812 19.496 37.788 20.712C36.764 21.928 36.252 23.624 36.252 25.8V39H30.732V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M71.6393 39.768C69.2713 39.768 67.1113 39.24 65.1593 38.184C63.2073 37.096 61.6393 35.56 60.4553 33.576C59.3033 31.592 58.7272 29.352 58.7272 26.856C58.7272 24.552 59.2713 22.424 60.3593 20.472C61.4473 18.52 62.9833 16.952 64.9673 15.768C66.9513 14.584 69.1753 13.992 71.6393 13.992C74.0073 13.992 76.1673 14.536 78.1193 15.624C80.0713 16.68 81.6233 18.2 82.7753 20.184C83.9593 22.136 84.5513 24.36 84.5513 26.856C84.5513 29.192 84.0072 31.336 82.9193 33.288C81.8313 35.24 80.2953 36.808 78.3113 37.992C76.3273 39.176 74.1033 39.768 71.6393 39.768ZM71.6393 34.824C73.8153 34.824 75.5752 34.088 76.9193 32.616C78.2952 31.112 78.9833 29.192 78.9833 26.856C78.9833 24.52 78.2952 22.616 76.9193 21.144C75.5433 19.672 73.7833 18.936 71.6393 18.936C69.4953 18.936 67.7353 19.672 66.3593 21.144C64.9833 22.616 64.2952 24.52 64.2952 26.856C64.2952 29.192 64.9673 31.112 66.3113 32.616C67.6873 34.088 69.4633 34.824 71.6393 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M101.195 39.768C98.2189 39.768 96.0269 39.032 94.6189 37.56C93.2109 36.056 92.5069 33.704 92.5069 30.504V19.416H87.4189V14.76H92.5069V7.992H98.0269V14.76H105.995V19.416H98.0269V29.688C98.0269 31.512 98.3309 32.84 98.9389 33.672C99.5789 34.504 100.651 34.92 102.155 34.92C103.723 34.92 105.227 34.536 106.667 33.768L107.291 38.376C106.587 38.792 105.691 39.128 104.603 39.384C103.515 39.64 102.379 39.768 101.195 39.768Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M123.811 39.768C121.443 39.768 119.283 39.24 117.331 38.184C115.379 37.096 113.811 35.56 112.627 33.576C111.475 31.592 110.899 29.352 110.899 26.856C110.899 24.552 111.443 22.424 112.531 20.472C113.619 18.52 115.155 16.952 117.139 15.768C119.123 14.584 121.347 13.992 123.811 13.992C126.179 13.992 128.339 14.536 130.291 15.624C132.243 16.68 133.795 18.2 134.947 20.184C136.131 22.136 136.723 24.36 136.723 26.856C136.723 29.192 136.179 31.336 135.091 33.288C134.003 35.24 132.467 36.808 130.483 37.992C128.499 39.176 126.275 39.768 123.811 39.768ZM123.811 34.824C125.987 34.824 127.747 34.088 129.091 32.616C130.467 31.112 131.155 29.192 131.155 26.856C131.155 24.52 130.467 22.616 129.091 21.144C127.715 19.672 125.955 18.936 123.811 18.936C121.667 18.936 119.907 19.672 118.531 21.144C117.155 22.616 116.467 24.52 116.467 26.856C116.467 29.192 117.139 31.112 118.483 32.616C119.859 34.088 121.635 34.824 123.811 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M171.354 39.528C167.674 39.528 164.378 38.776 161.466 37.272C158.586 35.768 156.298 33.608 154.602 30.792C152.938 27.976 152.106 24.712 152.106 21C152.106 17.384 152.906 14.152 154.506 11.304C156.138 8.424 158.442 6.152 161.418 4.488C164.426 2.824 167.882 1.992 171.786 1.992C173.77 1.992 175.77 2.264 177.786 2.808C179.834 3.352 181.594 4.072 183.066 4.968L182.058 10.152C180.074 9.192 178.25 8.488 176.586 8.04C174.954 7.592 173.306 7.368 171.642 7.368C169.082 7.368 166.794 7.912 164.778 9C162.794 10.088 161.226 11.656 160.074 13.704C158.922 15.752 158.346 18.12 158.346 20.808C158.346 23.464 158.874 25.8 159.93 27.816C161.018 29.8 162.57 31.352 164.586 32.472C166.634 33.592 169.034 34.152 171.786 34.152C173.482 34.152 175.29 33.912 177.21 33.432C179.13 32.952 180.97 32.28 182.73 31.416L183.354 36.648C179.706 38.568 175.706 39.528 171.354 39.528Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M201.53 39.768C199.162 39.768 197.002 39.24 195.05 38.184C193.098 37.096 191.53 35.56 190.346 33.576C189.194 31.592 188.618 29.352 188.618 26.856C188.618 24.552 189.162 22.424 190.25 20.472C191.338 18.52 192.874 16.952 194.858 15.768C196.842 14.584 199.066 13.992 201.53 13.992C203.898 13.992 206.058 14.536 208.01 15.624C209.962 16.68 211.514 18.2 212.666 20.184C213.85 22.136 214.442 24.36 214.442 26.856C214.442 29.192 213.898 31.336 212.81 33.288C211.722 35.24 210.186 36.808 208.202 37.992C206.218 39.176 203.994 39.768 201.53 39.768ZM201.53 34.824C203.706 34.824 205.466 34.088 206.81 32.616C208.186 31.112 208.874 29.192 208.874 26.856C208.874 24.52 208.186 22.616 206.81 21.144C205.434 19.672 203.674 18.936 201.53 18.936C199.386 18.936 197.626 19.672 196.25 21.144C194.874 22.616 194.186 24.52 194.186 26.856C194.186 29.192 194.858 31.112 196.202 32.616C197.578 34.088 199.354 34.824 201.53 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M220.669 0.119995H226.189V39H220.669V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M233.982 0.119995H239.502V39H233.982V0.119995Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M259.582 39.768C256.83 39.768 254.415 39.272 252.335 38.28C250.255 37.256 248.638 35.768 247.486 33.816C246.334 31.864 245.758 29.576 245.758 26.952C245.758 24.488 246.254 22.28 247.246 20.328C248.27 18.376 249.71 16.84 251.566 15.72C253.422 14.568 255.567 13.992 257.999 13.992C260.207 13.992 262.158 14.472 263.854 15.432C265.582 16.392 266.927 17.784 267.887 19.608C268.847 21.432 269.327 23.56 269.327 25.992C269.327 27.208 269.262 28.12 269.134 28.728H251.278C251.63 30.808 252.558 32.424 254.062 33.576C255.598 34.696 257.599 35.256 260.062 35.256C262.943 35.256 265.663 34.632 268.223 33.384L268.798 37.704C267.614 38.344 266.206 38.84 264.574 39.192C262.942 39.576 261.278 39.768 259.582 39.768ZM263.951 24.552C263.823 22.568 263.23 21.032 262.174 19.944C261.118 18.856 259.662 18.312 257.806 18.312C255.982 18.312 254.494 18.856 253.342 19.944C252.19 21.032 251.486 22.568 251.23 24.552H263.951Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M288.351 39.624C285.727 39.624 283.407 39.128 281.391 38.136C279.407 37.112 277.855 35.656 276.735 33.768C275.615 31.848 275.055 29.592 275.055 27C275.055 24.536 275.599 22.344 276.687 20.424C277.775 18.472 279.311 16.936 281.295 15.816C283.311 14.696 285.647 14.136 288.303 14.136C289.647 14.136 290.975 14.296 292.287 14.616C293.631 14.936 294.815 15.368 295.839 15.912L295.119 20.616C294.191 20.104 293.151 19.72 291.999 19.464C290.847 19.176 289.727 19.032 288.639 19.032C286.207 19.032 284.255 19.752 282.783 21.192C281.343 22.6 280.623 24.488 280.623 26.856C280.623 29.32 281.359 31.256 282.831 32.664C284.303 34.04 286.319 34.728 288.879 34.728C290.927 34.728 293.167 34.216 295.599 33.192L296.223 37.752C295.199 38.328 293.999 38.776 292.623 39.096C291.247 39.448 289.823 39.624 288.351 39.624Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M312.929 39.768C309.953 39.768 307.761 39.032 306.353 37.56C304.945 36.056 304.241 33.704 304.241 30.504V19.416H299.153V14.76H304.241V7.992H309.761V14.76H317.729V19.416H309.761V29.688C309.761 31.512 310.065 32.84 310.673 33.672C311.313 34.504 312.385 34.92 313.889 34.92C315.457 34.92 316.961 34.536 318.401 33.768L319.025 38.376C318.321 38.792 317.425 39.128 316.337 39.384C315.249 39.64 314.113 39.768 312.929 39.768Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M324.169 14.76H329.689V39H324.169V14.76ZM326.905 9.144C325.913 9.144 325.081 8.824 324.409 8.184C323.769 7.512 323.449 6.68 323.449 5.688C323.449 4.696 323.769 3.88 324.409 3.24C325.081 2.6 325.913 2.28 326.905 2.28C327.897 2.28 328.713 2.6 329.353 3.24C330.025 3.88 330.361 4.696 330.361 5.688C330.361 6.68 330.025 7.512 329.353 8.184C328.713 8.824 327.897 9.144 326.905 9.144Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M348.858 39.768C346.49 39.768 344.33 39.24 342.378 38.184C340.426 37.096 338.858 35.56 337.674 33.576C336.522 31.592 335.946 29.352 335.946 26.856C335.946 24.552 336.49 22.424 337.578 20.472C338.666 18.52 340.202 16.952 342.186 15.768C344.17 14.584 346.394 13.992 348.858 13.992C351.226 13.992 353.386 14.536 355.338 15.624C357.29 16.68 358.842 18.2 359.994 20.184C361.178 22.136 361.77 24.36 361.77 26.856C361.77 29.192 361.226 31.336 360.138 33.288C359.05 35.24 357.514 36.808 355.53 37.992C353.546 39.176 351.322 39.768 348.858 39.768ZM348.858 34.824C351.034 34.824 352.794 34.088 354.138 32.616C355.514 31.112 356.202 29.192 356.202 26.856C356.202 24.52 355.514 22.616 354.138 21.144C352.762 19.672 351.002 18.936 348.858 18.936C346.714 18.936 344.954 19.672 343.578 21.144C342.202 22.616 341.514 24.52 341.514 26.856C341.514 29.192 342.186 31.112 343.53 32.616C344.906 34.088 346.682 34.824 348.858 34.824Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M367.998 14.76H373.278L373.326 17.88C373.998 16.632 374.99 15.672 376.302 15C377.614 14.328 379.134 13.992 380.862 13.992C383.774 13.992 385.998 14.888 387.534 16.68C389.102 18.44 389.886 20.984 389.886 24.312V39H384.366V25.32C384.366 23.144 383.95 21.528 383.118 20.472C382.318 19.416 381.07 18.888 379.374 18.888C377.518 18.888 376.078 19.496 375.054 20.712C374.03 21.928 373.518 23.624 373.518 25.8V39H367.998V14.76Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
    </SVG>
  )
}
