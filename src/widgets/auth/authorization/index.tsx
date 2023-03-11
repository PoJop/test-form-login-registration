import { Col, Row, Space } from "antd"
import React from "react"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm, FormProvider } from 'react-hook-form'
import { FormComp } from "shared/components"
import { useMethods } from "shared/hooks"
import { userEntity } from "../../../entities"
import { Link } from "react-router-dom"
import { routes } from "app/configs"

const schema = Yup.object().shape({
    login: Yup.string()
        .required('required'),
    password: Yup.string()
        .required('required')
        .min(8, "password must be at least 8 and no more than 14")
        .max(14, "password must be at least 8 and no more than 14"),
})


export const Authorization: React.FC = () => {

    const [
        { submiting },
        { setSucsses, setSubmiting }
    ] = useMethods(
        {
            setSucsses(state, payload: boolean) {
                return { ...state, sucsses: payload, submiting: false };
            },
            setSubmiting(state, payload: boolean) {
                return { ...state, submiting: payload };
            },
            setFetchError(state, payload: string) {
                return { ...state, fetchError: payload };
            },
        },
        {
            sucsses: false,
            submiting: false,
            fetchError: "",
        }
    );


    const form = useForm({
        mode: "all",
        resolver: yupResolver(schema),
    })
    const { formState: { isValid }, handleSubmit, reset } = form

    const onSubmit = async (data: any) => {
        setSubmiting(true)
        const { status } = await userEntity.api.auth(data)
        if (status === 200) {
            setSucsses(true)
            reset()
        }
    }

    return (
        <>
            <div className="w-full">
                <FormProvider {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
                        <Space direction="vertical" size={0} className="flex">
                            <Col>
                                <FormComp.Field
                                    name="login"
                                    label="E-mail или телефон"
                                    placeholder="Адрес эл. почты или телефон"
                                    type={'text'}
                                />
                            </Col>
                            <Col>
                                <FormComp.Field
                                    name="password"
                                    label="Введите пароль"
                                    placeholder="Укажите ваш пароль"
                                    type={'text'}
                                    halpers={
                                        <Link to={routes.RESET_PASSWORD_PAGE_ROUTE} className="ml-2 underline whitespace-nowrap leading-[24px] text-primery-main">
                                            Забыли пароль
                                        </Link>
                                    }
                                />
                            </Col>

                            <div className="mt-[24px]">
                                <button className="general-btn" disabled={!isValid || submiting}>
                                    Войти в аккаунт
                                </button>
                            </div>
                        </Space>

                    </form>
                </FormProvider>
            </div>
        </>
    )
}
