import React from "react"
import { useFormContext } from "react-hook-form"
import cn from "classnames"
import { ErrorIcon, EyeIcon, KeyIcon } from "shared/assets/icons";
import gsap from "gsap";
import { Row } from "antd";

interface ITextInputProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    generationPassword?: boolean;
    halpers?: React.ReactNode;
}

export const Field: React.FC<ITextInputProps> = ({ label, type, name, className, generationPassword, halpers, ...props }) => {

    const [focus, setFocus] = React.useState<boolean>(false)
    const [activeEye, setActiveEye] = React.useState<boolean>(false)
    const { register, formState: { errors }, } = useFormContext()
    const { onBlur, ...registerProps } = register(name)

    return (
        <span className="relative">
            <label>

                {label &&
                    <span className="label">
                        {label}
                    </span>
                }

                <span className={cn(
                    "base-input-wrapper relative overflow-hidden min-h-[40px]",
                    { "focus": focus },
                    { "error": Boolean(errors[name]?.message) },
                    { "mb-[24px]": !Boolean(errors[name]?.message) && !halpers },
                )}>

                    <input
                        {...props}
                        {...registerProps}
                        name={name}
                        type={type === "password" ? (activeEye ? "text" : "password") : type}
                        onFocus={(e) => setFocus(true)}
                        onBlur={(e) => {
                            setFocus(false)
                            onBlur(e)
                        }}
                        className={cn("bg-transparent", className)}
                    />

                    {type === "password" &&
                        <span className="buttons">
                            {generationPassword &&
                                <button className={`${(focus || (focus && Boolean(errors[name]?.message))) ? "text-primery-main" : "text-grey-light"}`} type="button">
                                    <KeyIcon />
                                </button>
                            }
                            <button className="text-grey-light" type="button" onClick={() => setActiveEye(!activeEye)}>
                                <EyeIcon active={activeEye} />
                            </button>
                        </span>
                    }

                </span>

                {(errors[name]?.message || halpers) && <Row justify={"space-between"} className="min-h-[24px] " wrap={false}>
                    <span className="block text-error-main">
                        {Boolean(errors[name]?.message) && (
                            <>
                                <ErrorIcon className="inline-block mr-[2px]" />
                                <>{errors[name]?.message}</>
                            </>
                        )}
                    </span>
                    {halpers}
                </Row>}

            </label>

            {generationPassword &&
                <GenerationPassword open={focus || (focus && Boolean(errors[name]?.message))} />
            }
        </span>
    )
}
interface IGenerationPasswordProps {
    open: boolean;
}

const GenerationPassword: React.FC<IGenerationPasswordProps> = ({ open }) => {

    const { setValue } = useFormContext()
    const [password, setPassword] = React.useState("")
    const tlRef = React.useRef<gsap.core.Timeline>()
    const wrapperRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        tlRef.current = gsap
            .timeline({
                paused: true,
                defaults: {
                    duration: 0.2
                }
            })
            .fromTo(wrapperRef.current, {
                opacity: 0,
                y: 10,
                pointerEvents: "none"
            }, {
                opacity: 1,
                y: 0,
                pointerEvents: "auto"
            })
    }, [])

    React.useEffect(() => {
        open ? tlRef.current?.play() : tlRef.current?.reversed(true)
    }, [open])

    React.useEffect(() => {
        open && setPassword(Math.random().toString(36).slice(-10))
    }, [open])

    return (
        <div ref={wrapperRef} className=" absolute w-full pt-[8px] mt-[-18px] bg-white z-40 rounded-[8px] overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.08),0px_0px_80px_rgba(0,0,0,0.32)] ">
            <div className="p-[12px_16px]">
                {password}
            </div>
            <button type="button" className="p-[12px_16px] bg-grey-extralight w-full" onClick={() => {
                setValue("password", password, { shouldValidate: true })
                setValue("repeatPassword", password, { shouldValidate: true })
            }}>
                Применить сгенерированный пароль
            </button>
        </div>
    )
}