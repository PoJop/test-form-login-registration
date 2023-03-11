import { Col, Row } from "antd"
import React from "react"



export const LogInWith: React.FC = () => {

    return (
        <>

            <div>
                <div className=" my-[32px] text-center relative ">
                    <span className="before:block before:w-full before:h-[1px] before:bg-grey-light before:absolute before:top-[50%] "></span>
                    <span className="relative bg-white px-[24px] text-grey-main leading-[24px] text-[12px]">Или войдите с помощью</span>
                </div>
                <div>
                    <Row gutter={[12, 12]} wrap={false} justify="space-between" >
                        {["google", "facebook", "linkedin"].map((elem, idx) =>
                            <Col key={idx} className="w-full">
                                <span className="border block rounded-[8px] border-grey-light w-full hover:border-white cursor-pointer transition-all active:shadow-[0px_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.16)]">
                                    <img
                                        src={`/media/icons/${elem}.svg`}
                                        alt="icon"
                                        className="m-auto p-[8px]"
                                    />
                                </span>
                            </Col>
                        )}
                    </Row>
                </div>
            </div>

        </>
    )
}