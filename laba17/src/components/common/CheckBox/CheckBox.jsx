function CheckBox({checked, onChange, ...props}) {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            {...props}
        />
    );
}

export default CheckBox;
