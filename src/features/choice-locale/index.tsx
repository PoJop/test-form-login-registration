import { Dropdown, MenuProps, Row } from "antd"
import React from "react"
import { useTranslation } from "react-i18next";
import { ArrayIcon } from "shared/assets/icons";

const items: MenuProps['items'] = [
    {
        key: 'en',
        label: (
            <div className="p-[12px_11px] text-[#303842]  font-[500]">
                English
            </div>
        ),
    },
    {
        key: 'ru',
        label: (
            <div className="p-[12px_11px] text-[#303842] font-[500]">
                Русский
            </div>
        ),
    },
    {
        key: 'uk',
        label: (
            <div className="p-[12px_11px] text-[#303842] font-[500]">
                Український
            </div>
        ),
    },
];


export const ChoiceLocale: React.FC = () => {

    const { i18n } = useTranslation()

    return (
        <>
            <Dropdown menu={{ items, onClick: ({ key }) => i18n.changeLanguage(key)}}>
                <Row align={"middle"} className="bg-[rgba(237,242,255,0.7)] text-secondary-dark font-[600] leading-[24px] px-[8px] rounded-[8px] cursor-pointer">
                    {i18n.language} <ArrayIcon />
                </Row>
            </Dropdown>
        </>
    )
}