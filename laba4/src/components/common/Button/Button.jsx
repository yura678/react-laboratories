function Button({onClick, children, disabled = false, ...props}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            {...props}>
            {children}
        </button>
    );
}

export default Button