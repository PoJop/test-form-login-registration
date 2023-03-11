import React from "react"
import cn from "classnames"
import { Row } from "antd";


interface ILineProps {
    defaultActiveKey: string;
    tabType?: "fill";
    items: {
        tab: {
            label: string | React.ReactNode;
            key: string;
        },
        cildren: React.ReactNode;
    }[]
}

export const Line: React.FC<ILineProps> = ({ defaultActiveKey, items, tabType = "fill" }) => {

    const [activeKey, setActiveKey] = React.useState<string>(defaultActiveKey)

    const typeStyle = {
        "fill": {
            tab: "flex-[1_1_100%] flex justify-center"
        }
    }[tabType]

    const { activeIdx } = React.useMemo(() => {
        let activeIdx: number = 0
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (activeKey === element.tab.key) {
                activeIdx = index
                break
            }
        }
        return { activeIdx }
    }, [activeKey, items])


    return (
        <>
            <div>
                <div className="border-b border-[#CBD5E2] mb-[48px] relative">
                    <Row wrap={false} justify={"space-between"}>
                        {items.map((elem, idx) =>
                            <div className={cn(` ${activeKey === elem.tab.key ? "text-[#3843ED]" : "text-[#6D7895]"} py-[12px] cursor-pointer  font-[500] text-[12px]`, typeStyle.tab)} key={idx} onClick={() => setActiveKey(elem.tab.key)}>
                                {elem.tab.label}
                            </div>
                        )}
                    </Row>
                    <div
                        className={`absolute bottom-0 h-[4px] transition-all bg-primery-main rounded-t-[4px]`}
                        style={{
                            width: `${100 / items.length}%`,
                            left: `${(100 / items.length) * activeIdx}%`,
                        }}
                    >

                    </div>
                </div>
                <div>
                    {items.map((elem, idx) =>
                        <div key={idx} className={cn(
                            `${activeKey === elem.tab.key ? "block" : "hidden"}`
                        )}>
                            {elem.cildren}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}