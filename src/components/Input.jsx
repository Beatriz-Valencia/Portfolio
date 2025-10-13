import "./Input.css";


export default function Input ({
    name,
    label,
    type="text",
    required=false,
    value,
    onChange,
    autoComplete="off",
    placeholder="",

}) {
    const id =name;

    return (
        <label className ="field" htmlFor={id}>
            <span className="field_label">
            {label}{required}
            </span>

        <input
        id={id}
        name={name}
        className="field_input"
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        />
        </label>

    )
}


