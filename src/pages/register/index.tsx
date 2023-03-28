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
                    onAutoSubmit={({ username, password, confirmPassword }) => {
                        console.log(password, confirmPassword)
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
                                checkStrength: true,
                                prefix: <LockOutlined />,
                            },
                        ]}
                    />
                    <Field
                        name="confirmPassword"
                        title="确认密码"
                        required
                        decorator={[FormItem]}
                        component={[
                            Password,
                            {
                                checkStrength: true,
                                prefix: <LockOutlined />,
                            },
                        ]}
                        reactions={(field) => {
                            const password = field.query('.password');
                            field.selfErrors = password.value() !== field.value ? ['确认密码和密码不一致'] : [];
                        }}
                    />
                    <Field
                        name="email"
                        title="邮箱"
                        required
                        validator="email"
                        decorator={[FormItem]}
                        component={[Input]}
                    />
                    <Submit block size="large">
                        注册
                    </Submit>
                </Form>
            </Card>
        </div>
    )
}