function CheckBox({isChecked, handleCheckboxChange, ...props}) {
    return (
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            {...props}
        />
    );
}

export default CheckBox
