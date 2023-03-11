import { Col, Layout, Row, Space, } from "antd"
import { ChoiceLocale } from "features";
import { TickSquareIcon } from "shared/assets/icons";
import { Auth } from "widgets";


const AuthenticationPage = () => {

    return (
        <>
            <Layout.Content className="h-full min-h-full">
                <Row className="min-h-full" wrap={false}>
                    <Col className="flex-[0_0_600px] sidebar-create-gradient  hidden lg:flex flex-col justify-between" >
                        <div className="pl-[64px] pr-[44px] pt-[92px] text-white">
                            <div className="mb-[72px]">
                                <h1 className="text-[36px] font-[700] mb-[24px]">
                                    Войти в аккаунт
                                </h1>
                                <p className="text-[18px] ">
                                    Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы:
                                </p>
                            </div>
                            <Row wrap={true} gutter={[0, 24]}  >
                                {[
                                    "Автоматизация HR",
                                    "Интеграция с job-порталами",
                                    "Оценка персонала",
                                    "Синхронизация с Outlook",
                                    "Безопасность данных",
                                    "Парсинг резюме",
                                    "Мультиязычность",
                                    "Конструктор отчетности",
                                ].map((elem, idx) => (
                                    <Col key={idx} span={12}>
                                        <Row align={"middle"}>
                                            <TickSquareIcon className="mr-[8px]" />
                                            <span className=" font-[500]">{elem}</span>
                                        </Row>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <img
                            src="/media/work.svg"
                            alt="work.svg"
                        />
                    </Col>
                    <Col className=" flex-[1_1_876px] bg-white flex flex-col p-[24px]">
                        <Space align="end" direction="vertical">
                            <ChoiceLocale />
                        </Space>
                        <Space align="center" direction="vertical" className="mt-[44px]">
                            <Auth />
                        </Space>
                    </Col>
                </Row>
            </Layout.Content>
        </>
    )
}
export default AuthenticationPage