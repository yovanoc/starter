export interface SVGComponent {
  className?: string;
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
}

export const Logo: React.FC<SVGComponent> = (props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220.9 264.7"
    /*style="enable-background:new 0 0 220.9 264.7;"*/
    {...props}
  >
    <g>
      <g>
        <path d="M0,0c0,16.3,13.2,29.5,29.5,29.5h162c16.3,0,29.5-13.2,29.5-29.4c0,0,0,0,0,0H0z" />
        <path
          d="M21.3,51.3H198c4.1-0.1,7.2-3.6,7.1-7.6c-0.1-3.9-3.2-7-7.1-7.1H21.3c-4.1,0.1-7.2,3.6-7.1,7.6
			C14.3,48.1,17.4,51.2,21.3,51.3z"
        />
        <path
          d="M198,58.5H21.3c-4.1,0-7.4,3.3-7.4,7.4s3.3,7.4,7.4,7.4h7.4v191.4l29.5-13.4V171l14.7-6.6v80.1l29.5-13.4
			V80.6c0-4,3.3-7.3,7.3-7.3h0.1c4,0,7.3,3.3,7.3,7.3v143.9l29.4-13.4V80.6c0-4,3.3-7.3,7.3-7.3h0.1c4.1,0,7.3,3.3,7.3,7.3
			c0,0,0,0,0,0v123.8l29.5-13.4V73.2h7.4c4.1,0,7.4-3.3,7.4-7.4S202.1,58.5,198,58.5L198,58.5z M70.7,75.4c1.4,1.4,2.2,3.3,2.2,5.2
			v59.9L58.1,147V80.6c0-4,3.3-7.3,7.3-7.3h0.1C67.4,73.2,69.3,74,70.7,75.4z"
        />
      </g>
    </g>
  </svg>
);
