import React from "react"
import gsap from "gsap"
import { Col, Row } from "antd";
import { CircleCheckIcon, ClearIcon } from "shared/assets/icons";

interface ISucssesPopupProps {
    open: boolean;
    setOpen: (arg: boolean) => void;
    children: React.ReactNode;
}

export const SucssesPopup: React.FC<ISucssesPopupProps> = ({ open, setOpen, children }) => {

    const tlRef = React.useRef<gsap.core.Timeline>()
    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const circleCheckRef = React.useRef<HTMLDivElement>(null)
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        tlRef.current = gsap
            .timeline({})
            .fromTo(
                wrapperRef.current,
                {
                    pointerEvents: "none",
                    zIndex: -1,
                    background: "linear-gradient(180deg, rgba(136, 146, 255, 0) 0%, rgba(109, 107, 229, 0) 18.75%)",
                    duration: 0.7
                },
                {
                    pointerEvents: "auto",
                    zIndex: 1000,
                    background: "linear-gradient(180deg, #8892FF 0%, #6D6BE5 18.75%)"
                })
            .fromTo(
                circleCheckRef.current,
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.2
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.2
                })
            .fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.3
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                })
    }, [])

    React.useEffect(() => {
        open ? tlRef.current?.play() : tlRef.current?.reversed(true)
    }, [open])

    return (
        <>
            <aside
                ref={wrapperRef}
                style={{
                }}
                className="fixed top-0 left-0 w-full h-full bg-slate-300"
                onClick={() => setOpen(false)}
            >
                <div className="relative w-full h-full">
                    <Row justify={"center"} align="middle" className="h-full ">
                        <Col>
                            <div ref={circleCheckRef} >
                                <CircleCheckIcon className="m-auto mb-[48px]" />
                            </div>
                            <div ref={contentRef}>
                                {children}
                            </div>
                        </Col>
                    </Row>

                    <div className="absolute right-0 top-0  p-[12px] hover:rotate-90 transition-all">
                        <ClearIcon />
                    </div>
                </div>
            </aside>
        </>
    )
}