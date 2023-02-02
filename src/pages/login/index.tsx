import { history } from 'umi';
import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Card, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const normalForm = createForm({
    validateFirst: true,
});

export default () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}
        >
            <Card style={{ width: 400 }}>
                <Form
                    form={normalForm}
                    layout="vertical"
                    size="large"
                    onAutoSubmit={({ username, password }) => {
                        if (username === 'admin' && password === 'admin') {
                            history.push('/home');
                            window.localStorage.setItem('token', 'xxxx');
                        } else {
                            message.error('用户名或密码错误');
                        }
                    }}
                >
                    <Field
                        name="username"
                        title="用户名"
                        required
                        decorator={[FormItem]}
                        component={[
                            Input,
                            {
                                prefix: <UserOutlined />,
                            },
                        ]}
                    />
                    <Field
                        name="password"
                        title="密码"
                        required
                        decorator={[FormItem]}
                        component={[
                            Password,
                            {
                                prefix: <LockOutlined />,
                            },
                        ]}
                    />
                    <Submit block size="large">
                        登录
                    </Submit>
                </Form>
            </Card>
        </div>
    )
}