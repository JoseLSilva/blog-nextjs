import { Fragment } from "react";
import PropTypes from "prop-types";

const icons = {
  logo: {
    shape: (
      <Fragment>
        <title>Logo</title>
        <defs>
          <linearGradient
            gradientTransform="rotate(25)"
            id="0d8c2a87-bb1f-4c79-959c-d6931fc2d11f"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#0978A6" stopOpacity="1" />
            <stop offset="100%" stopColor="#FB9447" stopOpacity="1" />
          </linearGradient>
        </defs>
        <g
          id="171160a3-ccaa-4c6f-acc2-4e4cc4d4f90e"
          fill="url(#0d8c2a87-bb1f-4c79-959c-d6931fc2d11f)"
          stroke="none"
          transform="matrix(2.3157894736842106,0,0,2.3157894736842106,40,45.78947368421052)"
        >
          <g>
            <path d="M85.5 9.474H95V90h-9.5zM0 0h80.75v90H0V0zm9.5 9.474h61.75v4.737H9.5V9.474zm23.75 14.21h38v4.737h-38v-4.737zm0 9.474h38v4.737h-38v-4.737zm0 9.474h38v4.736h-38v-4.736zM9.5 56.842h61.75v4.737H9.5v-4.737zm0 9.474h33.25v4.737H9.5v-4.737zm0 9.473H57v4.737H9.5V75.79zm0-52.105h19v23.684h-19V23.684z" />
          </g>
        </g>
      </Fragment>
    ),
    viewBox: "0 0 300 300"
  },
  padlock: {
    shape: (
      <Fragment>
        <title>Padlock</title>
        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
      </Fragment>
    ),
    viewBox: "0 0 20 20"
  },
  calendar: {
    shape: (
      <Fragment>
        <title>Calendar</title>
        <path
          fill="#CFD8DC"
          d="M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"
        />
        <path
          fill="#F44336"
          d="M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"
        />
        <g fill="#B71C1C">
          <circle cx="33" cy="10" r="3" />
          <circle cx="15" cy="10" r="3" />
        </g>
        <g fill="#B0BEC5">
          <path d="M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z" />
          <path d="M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z" />
        </g>
        <g fill="#90A4AE">
          <rect x="13" y="20" width="4" height="4" />
          <rect x="19" y="20" width="4" height="4" />
          <rect x="25" y="20" width="4" height="4" />
          <rect x="31" y="20" width="4" height="4" />
          <rect x="13" y="26" width="4" height="4" />
          <rect x="19" y="26" width="4" height="4" />
          <rect x="25" y="26" width="4" height="4" />
          <rect x="31" y="26" width="4" height="4" />
          <rect x="13" y="32" width="4" height="4" />
          <rect x="19" y="32" width="4" height="4" />
          <rect x="25" y="32" width="4" height="4" />
          <rect x="31" y="32" width="4" height="4" />
        </g>
      </Fragment>
    ),
    viewBox: "0 0 48 48"
  },
  comments: {
    shape: (
      <Fragment>
        <title>Comment</title>
        <path
          fill="#FB9447"
          d="M436.996,270.994H226.001c-41.399,0-75.998,33.599-75.998,74.998v29.999
	c0,41.399,34.599,74.998,75.998,74.998h144.696l55.8,56.498c4.199,4.501,10.8,5.7,16.199,3.301c5.7-2.401,9.3-7.8,9.3-13.801
	v-47.499c34.199-6.901,59.999-37.199,59.999-73.498v-29.999C511.995,304.593,478.396,270.994,436.996,270.994z"
        />
        <path
          fill="#ca7637"
          d="M511.995,345.993v29.999c0,36.3-25.799,66.598-59.999,73.498v47.499c0,6-3.6,11.4-9.3,13.801
	c-5.4,2.399-12.001,1.199-16.199-3.301l-55.801-56.499H256V270.994h180.996C478.396,270.994,511.995,304.593,511.995,345.993z"
        />
        <path
          fill="#0978A6"
          d="M436.996,0H75.004C33.605,0,0.006,33.599,0.006,74.998v89.998c0,36.3,25.799,67.598,59.999,74.498
	v76.498c0,6,3.6,11.4,9.3,13.801c5.4,2.399,12.001,1.199,16.199-3.301l85.799-85.498h265.693c41.399,0,74.998-34.599,74.998-75.998
	V74.998C511.995,33.599,478.396,0,436.996,0z"
        />
        <path
          fill="#00587d"
          d="M511.995,74.998v89.998c0,41.399-33.599,75.998-74.998,75.998H256V0h180.996
	C478.396,0,511.995,33.599,511.995,74.998z"
        />
        <g>
          <circle fill="#ECECF1" cx="75.008" cy="74.998" r="15" />
          <circle fill="#ECECF1" cx="75.008" cy="134.997" r="15" />
          <circle fill="#ECECF1" cx="226.005" cy="345.993" r="15" />
        </g>
        <g>
          <circle fill="#E2E2E7" cx="286.004" cy="345.993" r="15" />
          <circle fill="#E2E2E7" cx="347.002" cy="345.993" r="15" />
        </g>
        <g>
          <path
            fill="#ECECF1"
            d="M451.996,74.998c0,8.401-6.599,15-15,15H135.003c-8.401,0-15-6.599-15-15s6.599-15,15-15h301.994
		C445.396,59.999,451.996,66.598,451.996,74.998z"
          />
          <path
            fill="#ECECF1"
            d="M451.996,134.997c0,8.401-6.599,15-15,15H135.003c-8.401,0-15-6.599-15-15s6.599-15,15-15h301.994
		C445.396,119.997,451.996,126.596,451.996,134.997z"
          />
        </g>
        <g>
          <path
            fill="#E2E2E7"
            d="M451.996,134.997c0,8.401-6.599,15-15,15H256v-29.999h180.996
		C445.396,119.997,451.996,126.596,451.996,134.997z"
          />
          <path
            fill="#E2E2E7"
            d="M436.996,89.998H256V59.999h180.996c8.401,0,15,6.599,15,15S445.396,89.998,436.996,89.998z"
          />
        </g>
      </Fragment>
    ),
    viewBox: "0 0 512.001 512.001"
  },
  clock: {
    shape: (
      <Fragment>
        <title>Clock</title>
        <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
        <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
      </Fragment>
    ),
    viewBox: "0 0 443.294 443.294"
  }
};

const SVG = ({ icon, className }) => (
  <svg viewBox={icons[icon].viewBox} className={className}>
    {icons[icon].shape}
  </svg>
);

export default SVG;

SVG.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  className: PropTypes.string
};

SVG.defaultProps = {
  className: ""
};
