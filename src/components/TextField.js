const TextField = (props) => {
    const {label} = props;
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={label} className={'formLabel'}>{label}</label>
            <input id={label}  {...props} className={'formInput'}/>
        </div>
    )
};

export default TextField;