import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

enum StartPosition {
  Top = 0,
  Left = 0,
}

function ScrollTop(): JSX.Element | null {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: StartPosition.Top,
      left: StartPosition.Left,
    });
  }, [pathname]);

  return null;
}

export default ScrollTop;
