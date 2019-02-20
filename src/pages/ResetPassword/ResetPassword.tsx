import * as React from "react"
import styled from "styled-components"
import { Flex, Box } from '@rebass/grid'
import { Button, Input } from '../../components'
/**
 * ResetPassword component
 * @since v1.0
 * @author [Kaige Zhang](zhangkeger@gmail.com)
 */

class ResetPassword extends React.Component<IProps, IState> {

    state = {
        confirm: false
    }
    onAction = (type: string) => {

    }

    onConfirm = () => {
        this.setState({
            confirm: true
        })
    }


    render() {
        let { confirm } = this.state

        return (
            <Flex flexDirection="column" justifyContent="center">
                <Box mb={2}>
                    { confirm ? '': '你想通过手机号还是邮箱找回' }
                </Box>


                <Box p={4}>

                    {
                        confirm ? (
                            <React.Fragment>
                                <Input name="phone" label="新密码" type="password" placeholder="请设置你的新密码，不少于6位" />
                                <Input name="verify" label="确认密码" type="password" placeholder="请再次确认密码"></Input>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Input name="phone" label="手机号" type="text" iconName="phone-portrait" actionHandler={() => this.onAction('phone')} action="发送验证码" placeholder="请输入手机号/邮箱" />
                                <Input name="verify" label="验证码" type="password"></Input>
                            </React.Fragment>
                        )
                    }
                </Box>

                <Button.Main onClick={this.onConfirm}>{ confirm ? '提交': '下一步'}</Button.Main>
            </Flex>
        )
    }
}

interface IProps {
}

interface IState {
    confirm: boolean
}

export default ResetPassword