import { useState } from 'react'
import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import {
    Form,
    FormItem,
    FormLayout,
    Input,
    Submit,
    FormButtonGroup,
    Radio
} from '@formily/antd'
import { Spin } from 'antd'

const form = createForm({
    validateFirst: true,
})

export default () => {
    return (
        <Spin spinning={false}>
            <div><a href="http://www.baidu.com" target="_parent">666</a></div>
            <Form
                form={form}
                labelCol={5}
                wrapperCol={16}
                onAutoSubmit={console.log}
            >
                <Field
                    name="name"
                    title="菜单名"
                    required
                    decorator={[FormItem]}
                    component={[Input]}
                />
                <Field
                    name="href"
                    title="菜单路径"
                    required
                    decorator={[FormItem]}
                    component={[Input]}
                />
                <Field
                    name="target"
                    title="是否打开新页面"
                    decorator={[FormItem]}
                    component={[Radio.Group]}
                    dataSource={[
                        {
                          label: '是',
                          value: true,
                        },
                        {
                          label: '否',
                          value: false,
                        },
                      ]}
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