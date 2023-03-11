import { Col, Space } from "antd"
import React from "react"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { FormProvider, useForm, } from 'react-hook-form'
import { FormComp } from "shared/components"
import { SucssesPopup } from "../sucsses"
import { useMethods } from "shared/hooks"
import { userEntity } from "../../../entities"

const schema = Yup.object().shape({
    email: Yup.string()
        .required('required')
        .email("email not valid"),
    password: Yup.string()
        .required('required')
        .min(8, "password must be at least 8 and no more than 14")
        .max(14, "password must be at least 8 and no more than 14"),
    repeatPassword: Yup.string()
        .required('required')
        .min(8, "password must be at least 8 and no more than 14")
        .max(14, "password must be at least 8 and no more than 14")
        .oneOf([Yup.ref('password')], 'Passwords must match'),
})

export const Registration: React.FC = () => {

    const [
        { sucsses, submiting },
        { setSucsses, setSubmiting }
    ] = useMethods(
        {
            setSucsses(state, payload: boolean) {
                return { ...state, sucsses: payload, submiting: false };
            },
            setSubmiting(state, payload: boolean) {
                return { ...state, submiting: payload };
            }
        },
        {
            sucsses: false,
            submiting: false
        }
    );

    const form = useForm({
        mode: "all",
        resolver: yupResolver(schema),
    })

    const { formState: { isValid }, handleSubmit, reset } = form


    const onSubmit = async (data: any) => {
        setSubmiting(true)
        const { status } = await userEntity.api.registration({ email: data.email, password: data.password })
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
                                    name="email"
                                    label="E-mail"
                                    placeholder="Адрес эл. почты"
                                    type={'text'}
                                />
                            </Col>
                            <Col>
                                <FormComp.Field
                                    name="password"
                                    label=" Придумайте пароль"
                                    placeholder="Укажите ваш пароль"
                                    generationPassword={true}
                                    type={'password'}
                                />
                            </Col>
                            <Col>
                                <FormComp.Field
                                    name="repeatPassword"
                                    label="Повторите пароль"
                                    placeholder="Укажите ваш пароль"
                                    type={'password'}
                                />
                            </Col>
                            <div className=" mt-[24px]">
                                <button className="general-btn" disabled={!isValid || submiting}>
                                    Зарегистрироваться
                                </button>
                            </div>
                        </Space>

                    </form>
                </FormProvider>
            </div>
            <SucssesPopup open={sucsses} setOpen={setSucsses}>
                <p className="max-w-[623px] text-[#EDF2FF] text-[18px] leading-[24px] font-[500] text-center" >
                    Аккаунт был успешно зарегистрирован. <br />
                    На ваш E-Mail отправлено письмо с ссылкой для подтверждения
                </p>
            </SucssesPopup>
        </>
    )
}
