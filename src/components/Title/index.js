import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import './style.scss';

function Title() {
  const selectedTheme = useSelector((state) => state.dark);
  const getResult = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const comeBack = () => {
    dispatch({
      type : 'COME_BACK',
    })
  }
  return (
    <>
        <a href='/' onClick={comeBack}>
        <h1 
          className={classNames({'result': getResult, 'dark': !selectedTheme }, {'result': getResult, 'light': selectedTheme } )}                     
          >
          Itsizy
        </h1>
        </a>            
    </>        
  );
}

export default Title;
