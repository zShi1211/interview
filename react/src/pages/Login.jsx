import { useState } from 'react'
import { Button, Form, Input, message } from 'antd';
import styles from "../assets/css/login.module.css"
import setLocalStorage from '../utils/setLocalStorage';
import { useDispatch } from 'react-redux'
import { setLoginInfo, setFindpwdInfo, setRegisterInfo } from '../store/formInfo'
export default function Login() {
    const [module, setModule] = useState("登录")
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const onLoginFinish = (values) => {
        setLocalStorage('login_info', values);
        dispatch(setLoginInfo(values))
        messageApi.open({
            type: 'success',
            content: '成功',
        })
    };
    const onRegisterFinish = (values) => {
        if (values.valid !== '123456') {
            messageApi.open({
                type: 'error',
                content: '验证码错误',
            })
            return;
        }
        setLocalStorage('register_info', values);
        dispatch(setRegisterInfo(values))
        messageApi.open({
            type: 'success',
            content: '成功',
        })
    };
    const onFindpwdrFinish = (values) => {
        if (values.valid !== '123456') {
            messageApi.open({
                type: 'error',
                content: '验证码错误',
            })
            return;
        }
        setLocalStorage('findpwd_info', values);
        dispatch(setFindpwdInfo(values))
        messageApi.open({
            type: 'success',
            content: '成功',
        })
    };

    function F() {
        let result = '';
        if (module === '登录') {
            result = <div className='login_form'>
                <Form onFinish={onLoginFinish} >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            pattern: /^[A-Za-z0-9]{1,6}$/
                        }]}
                    >
                        <Input placeholder="请输入用户名"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!~_@\.]).{1,6}$/
                        }]}
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type='primary' style={{ width: '100%' }} htmlType='submit'>登录</Button>
                    </Form.Item>
                </Form>
            </div >
        } else if (module === '用户注册') {
            result = <div className='register_form'>
                <Form onFinish={onRegisterFinish}>
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            pattern: /^[A-Za-z0-9]{1,6}$/
                        }]}
                    >
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{
                            required: true,
                            pattern: /^1[3456789]\d{9}$/
                        }]}
                    >
                        <Input placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="valid"
                        rules={[{
                            required: true,
                        }]}
                    >
                        <div style={{
                            display: "flex"
                        }}>
                            <Input placeholder="请输入验证码" style={{ marginRight: '10px' }} />
                            <Button type='primary'>获取验证码</Button>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!~_@\.]).{1,6}$/
                        }]}
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type='primary' style={{ width: '100%' }} htmlType='submit'>立刻注册</Button>
                    </Form.Item>
                </Form>
            </div>
        } else if (module === '找回密码') {
            result = <div className='findpwd_form'>
                <Form onFinish={onFindpwdrFinish}>
                    <Form.Item
                        name="phone"
                        rules={[{
                            required: true,
                            pattern: /^1[3456789]\d{9}$/
                        }]}
                    >
                        <Input placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!~_@\.]).{1,6}$/
                        }]}
                    >
                        <Input.Password placeholder="请输入新密码" />
                    </Form.Item>
                    <Form.Item
                        name="valid"

                        rules={[{
                            required: true,
                        }]}
                    >
                        <div style={{
                            display: "flex"
                        }}>
                            <Input placeholder="请输入验证码" style={{ marginRight: '10px' }} />
                            <Button type='primary'>获取验证码</Button>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' style={{ width: "100%" }} htmlType='submit'>确定</Button>

                    </Form.Item>
                </Form>
            </div>
        }
        return result
    }

    return (
        <div className={styles.login_container}>
            {contextHolder}
            <div className={styles.login_main}>
                <h1 className={styles.title}>{module}</h1>
                {F()}
                <div className={styles.login_btm}>
                    <div className={styles.btm_left}>
                        {
                            module === '找回密码' ?
                                <span onClick={() => setModule("登录")}>立刻登录</span> :
                                <span onClick={() => setModule("找回密码")}>忘记密码</span>
                        }
                    </div>
                    <div className={styles.btm_right}>
                        <span className={styles.no_account}>
                            没有账号？
                        </span>
                        {
                            module === '用户注册' ?
                                <span onClick={() => setModule("登录")}>马上登录</span> :
                                <span onClick={() => setModule("用户注册")}>快速注册</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}