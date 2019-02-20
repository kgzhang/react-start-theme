import * as React from "react"
import styled from "styled-components"
import { Input, Button } from '../../components'
import { Flex, Box } from '@rebass/grid'

/**
 * Register component
 * @since v1.0
 * @author [Kaige Zhang](zhangkeger@gmail.com)
 */

class Register extends React.Component<IProps, IState> {
    state = {
        step: 0
    }

    onButtonClick = () => {
        let { step } = this.state
        if (step < 3) {
            this.setState({
                step: step + 1
            })
        }
    }

    shouldComponentUpdate (prevProps: IProps, prevState: IState) {
        return prevState.step !== this.state.step
    }

    render() {
        let { step } = this.state
        
        let steps = [
            '获取验证码',
            '提交',
            '下一步',
            '完成注册'
        ]

        return (
            <Flex justifyContent="center" flexDirection="column" p={3}>
                <Box mb={2}>
                {
                    step === 0 && (
                        <React.Fragment>
                            <h1>hi~, 你想用手机还是邮箱获得自己的各色账号呢</h1>
                            <Input name="account" placeholder="请输入你的邮箱或手机号码"></Input>
                        </React.Fragment>
                    )
                }
                {
                    step === 1 && (
                        <React.Fragment>
                            <h1>棒，现在需要前往自己的手机短信或者邮箱查看验证码</h1>
                            <Input name="account" placeholder="请输入收到的验证码"></Input>
                        </React.Fragment>
                    )
                }

                {
                    step === 2 && (
                        <React.Fragment>
                            <h1>为自己的起一个特别的昵称来展示报告吧</h1>
                            <Input name="account" placeholder="请设置昵称"></Input>
                        </React.Fragment>
                    )
                }

                {
                    step === 3 && (
                        <React.Fragment>
                            <h1>最后一步了，** 请设置你的密码</h1>
                            <Input name="account" placeholder="请设置昵称"></Input>
                        </React.Fragment>
                    )
                }
                    
                </Box>

                <Box>
                    <Button.Main onClick={this.onButtonClick}>
                        {
                            steps[step]
                        }
                    </Button.Main>
                </Box>
            </Flex>

        )
    }
}

interface IProps {
}

interface IState {
    step: number
}

export default Register