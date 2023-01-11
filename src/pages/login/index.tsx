import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Tabs, Card } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons'
import { VerifyCode } from '@/components/VerifyCode';

const normalForm = createForm({
    validateFirst: true,
})

const phoneForm = createForm({
    validateFirst: true,
})

export default () => {
    const tabItems = [
        {
            label: '账密登录',
            key: '1',
            children: (
                <Form
                form={normalForm}
                layout="vertical"
                size="large"
                onAutoSubmit={console.log}
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
            )
        },
        {
            label: '手机登录',
            key: '2',
            children: (
                <Form
                form={phoneForm}
                layout="vertical"
                size="large"
                onAutoSubmit={console.log}
            >
                <Field
                    name="phone"
                    title="手机号"
                    required
                    validator="phone"
                    decorator={[FormItem]}
                    component={[
                        Input,
                        {
                            prefix: <PhoneOutlined />,
                        },
                    ]}
                />
                <Field
                    name="verifyCode"
                    title="验证码"
                    required
                    reactions={(field) => {
                        const phone = field.query('.phone')
                        field.setComponentProps({
                            readyPost: phone.get('valid') && phone.get('value'),
                            phoneNumber: phone.get('value'),
                        })
                    }}
                    decorator={[FormItem]}
                    component={[
                        VerifyCode,
                        {
                            prefix: <LockOutlined />,
                        },
                    ]}
                />
                <Submit block size="large">
                    登录
                </Submit>
            </Form>
            )
        }
    ];

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
                <Tabs style={{ overflow: 'visible', marginTop: -10 }} items={tabItems} />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <a href="#新用户注册">新用户注册</a>
                    <a href="#忘记密码">忘记密码?</a>
                </div>
            </Card>
        </div>
    )
}