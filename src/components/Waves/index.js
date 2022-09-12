import { useSelector } from 'react-redux';
import './style.scss';

function Waves() {
  const selectedTheme = useSelector((state) => state.dark);
  return (       
    <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill={selectedTheme ? "rgba(254,220,220,0.7" : "rgba(255,204,0,0.7" } />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill={selectedTheme ? "rgba(255,255,255,0.5)" : "rgba(255,204,0,0.5" }  />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill={selectedTheme ? "rgba(255,255,255,0.3)" : "rgba(255,204,0,0.3" }  />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill={selectedTheme ? "#fff" : "#FFCC00" } />
            </g>
        </svg>
    </div>       
  );
}

export default Waves;