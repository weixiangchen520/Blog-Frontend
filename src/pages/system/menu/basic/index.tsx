import { useState } from 'react'
import { createForm } from '@formily/core'
import { Field, VoidField } from '@formily/react'
import {
    Form,
    FormItem,
    FormLayout,
    Input,
    Cascader,
    Submit,
    FormGrid,
    FormButtonGroup,
} from '@formily/antd'
import { Spin } from 'antd'

const form = createForm({
    validateFirst: true,
})

export default () => {
    const [loading, setLoading] = useState(true)
    return (
        <Spin spinning={loading}>
            <Form
                form={form}
                labelCol={5}
                wrapperCol={16}
                onAutoSubmit={console.log}
            >
                <Field
                    name="username"
                    title="用户名"
                    required
                    decorator={[FormItem]}
                    component={[Input]}
                />
                <VoidField
                    name="name"
                    title="姓名"
                    decorator={[
                        FormItem,
                        {
                            asterisk: true,
                            feedbackLayout: 'none',
                        },
                    ]}
                    component={[FormGrid]}
                >
                    <Field
                        name="firstName"
                        decorator={[FormItem]}
                        component={[
                            Input,
                            {
                                placeholder: '姓',
                            },
                        ]}
                        required
                    />
                    <Field
                        name="lastName"
                        decorator={[FormItem]}
                        component={[
                            Input,
                            {
                                placeholder: '名',
                            },
                        ]}
                        required
                    />
                </VoidField>
                <Field
                    name="email"
                    title="邮箱"
                    required
                    validator="email"
                    decorator={[FormItem]}
                    component={[Input]}
                />
                <FormButtonGroup.FormItem>
                    <Submit block size="large">
                        提交
                    </Submit>
                </FormButtonGroup.FormItem>
            </Form>
        </Spin>
    )
}