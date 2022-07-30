import React from 'react';

const TextAreaField = (props) => {
    const {label} = props
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={label} className={'formLabel'}>{label}</label>
            <textarea id={label}  className={'formInput'}
                      rows={6} cols={25}
                      required={true} autoCorrect="on" spellCheck={true} {...props}></textarea>
        </div>
    )
}
export default TextAreaField;