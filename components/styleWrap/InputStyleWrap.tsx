import React, { FC, ReactNode } from "react"

export interface InputStyleWrapperProps {
    error?: boolean,
    disabled?: boolean,
    children?: ReactNode,
    limit?: boolean,
    className?: string
}
const InputStyleWrapper: FC<InputStyleWrapperProps> = ({
    error = false,
    disabled = false,
    children,
    limit = false,
    className = ''
}) => {

    const childArr: any = React.Children.map(children, (child: any) => {
        if (child.type !== "div" && child.type !== "button") {
            return React.cloneElement(child, {
                ...child.props,
                disabled,
                className: child.props.className + `placeholder-gray-50 text-black w-full leading-4 ${disabled ? "bg-gray-30" : " bg-white"} outline-none transition-all duration-200 resize-none text-ui-text ${child.type === "textarea" && 'resize-y overflow-hidden'}`
            })
        }
        return child
    })

    return (
        <div className={`
        ${error ? "ring-error" : "focus-within:ring-black hover:ring-input-hover"}
        ${disabled ? "bg-gray-200" : " bg-white"} px-3 py-3 text-base ring-2 ring-transparent transition-all duration-200 flex items-center ${limit && "max-h-14"}  relative ${className}`}>
            {childArr}
        </div>
    )
}

export default InputStyleWrapper