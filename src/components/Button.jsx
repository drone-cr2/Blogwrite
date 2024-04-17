import React from "react";

// commom button UI designing as a component
//using such paradgim we can create a predefined component which is consistent across the app while making it flexible
/**talking props
 * "children" is the text to be displayed
 * then there are some classes (wrt Tailwind) with default values
 * then there is className for user passed additional classes
 * fnally there are additional attributes of button "...props" added via spread operator
 * notice how the props are passed as attributes (...spread operator there too)
 */
export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}