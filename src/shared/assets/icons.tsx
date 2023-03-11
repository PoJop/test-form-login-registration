import React from "react";

interface IIconProps extends React.HTMLAttributes<SVGElement> {
    stroke?: string
}
interface IEyeIconProps extends IIconProps {
    active: boolean
}

export const EyeIcon: React.FC<IEyeIconProps> = ({ active, ...props }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            {active
                ? <>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 010-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962v0z"
                    ></path>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                    ></path>
                </>
                : <>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M6.873 17.129c-1.845-1.31-3.305-3.014-4.13-4.09a1.693 1.693 0 010-2.077C4.236 9.013 7.818 5 12 5c1.876 0 3.63.807 5.13 1.874"
                    ></path>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M14.13 9.887a3 3 0 10-4.243 4.242M4 20L20 4M10 18.704c.65.193 1.323.293 2 .296 4.182 0 7.764-4.013 9.257-5.962a1.694 1.694 0 00-.001-2.078A22.94 22.94 0 0019.57 9"
                    ></path>
                </>
            }
        </svg>
    )
}
export const KeyIcon: React.FC<IIconProps> = ({ ...props }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M7 6.515c0-.808.24-1.601.696-2.297A4.809 4.809 0 019.589 2.56a5.435 5.435 0 012.563-.558 5.39 5.39 0 012.521.698 4.723 4.723 0 011.778 1.759c.407.719.594 1.524.54 2.33a4.235 4.235 0 01-.848 2.256 4.895 4.895 0 01-2 1.552v9.467L12 22l-2.143-1.936 1.429-1.29-1.429-1.29 1.429-1.29-1.429-1.291 1.429-1.29-1.429-1.29v-1.726A4.873 4.873 0 017.774 8.93 4.202 4.202 0 017 6.515zm3.571-1.29c0 .342.15.67.419.912a1.51 1.51 0 001.01.378 1.51 1.51 0 001.01-.378 1.23 1.23 0 00.419-.912c0-.342-.15-.67-.419-.912A1.51 1.51 0 0012 3.935a1.51 1.51 0 00-1.01.378 1.23 1.23 0 00-.419.912z"
            ></path>
        </svg>
    )
}
export const TickSquareIcon: React.FC<IIconProps> = ({ ...props }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fillRule="evenodd"
                stroke="#84DF88"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.334 2.75H7.665c-3.02 0-4.915 2.14-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z"
                clipRule="evenodd"
            ></path>
            <path
                stroke="#84DF88"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.44 12l2.374 2.373 4.746-4.746"
            ></path>
        </svg>
    )
}
export const ArrayIcon: React.FC<IIconProps> = ({ ...props }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            {...props}
        >
            <path fill="currentColor" d="M4.667 6.667L8 10l3.333-3.333H4.667z"></path>
        </svg>
    )
}
export const CircleCheckIcon: React.FC<IIconProps> = ({ ...props }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            fill="none"
            viewBox="0 0 72 72"
            {...props}
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M24.5 37.5l9 9 15-18"
            ></path>
            <path
                stroke="#fff"
                strokeWidth="2"
                d="M36.5 66c16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30z"
            ></path>
        </svg>
    )
}
export const ClearIcon: React.FC<IIconProps> = ({ ...props }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="#DCDEFC"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            ></path>
        </svg>
    )
}
export const ErrorIcon: React.FC<IIconProps> = ({ ...props }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            {...props}
        >
            <path
                fill="#FF776F"
                d="M11.478 11.88a.96.96 0 01-1.357 0L8 9.454 5.88 11.88a.96.96 0 11-1.358-1.358L6.728 8 4.521 5.479a.96.96 0 111.357-1.357L8 6.546l2.12-2.424a.96.96 0 111.358 1.357L9.272 8.001l2.206 2.52a.958.958 0 010 1.358z"
            ></path>
        </svg>
    )
}