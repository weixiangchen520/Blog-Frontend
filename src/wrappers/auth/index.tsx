import { FC } from 'react';
import { Redirect } from 'umi'

const Auth: FC = (props) => {
  const isLogin = window.localStorage.getItem('token');
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default Auth;