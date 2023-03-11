import { routes } from "app/configs";
import React from "react"
import { Route, Routes } from "react-router";
import { UiKit } from "shared";
import { Authorization } from "./authorization";
import { LogInWith } from "./log-in-with";
import { Registration } from "./registration";
import { ResetPassword } from "./reset-password";


export const Auth: React.FC = () => {



    return (
        <>
            <div className={"max-w-[405px] w-[100vw] px-5 pb-5"}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <UiKit.Tabs.Line
                                defaultActiveKey="1"
                                items={[{
                                    tab: {
                                        label: <>Вход</>,
                                        key: "1",
                                    },
                                    cildren: <Authorization />
                                },
                                {
                                    tab: {
                                        label: <>Регистрация</>,
                                        key: "2",
                                    },
                                    cildren: <Registration />
                                }]}
                            />
                            <LogInWith />
                        </>
                    } />
                    <Route path={routes.RESET_PASSWORD_PAGE_ROUTE} element={<ResetPassword />} />
                </Routes>
            </div>
        </>
    )
}