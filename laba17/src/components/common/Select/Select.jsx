function Select({value, onChange, placeholder, children, ...props}) {
    return (
        <select value={value} onChange={onChange} placeholder={placeholder} {...props}>
            {children}
        </select>
    );
}

export default Select;
