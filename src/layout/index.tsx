import { history } from 'umi';
import { Button } from 'antd';

const Layout = ({ children }: any) => {
    return (
        <>
            <div>
                <Button onClick={() => {
                    window.localStorage.removeItem('token');
                    history.push('/login');
                }}>退出登录</Button>
            </div>
            {children}
        </>
    )
};

export default Layout;