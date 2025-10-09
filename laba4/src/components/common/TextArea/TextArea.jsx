function TextArea({value, onChange, placeholder, ...props}) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
        />
    );
}

export default TextArea
