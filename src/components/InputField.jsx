import '../App.css'

const InputField = ({label ,value , onChange , isPrice}) => {

    const handleChange = (e) => {
        let val = e.target.value;

        if (isPrice) {
            val = val.replace(/,/g, '');
            if (!/^\d*$/.test(val)) return;
            if (val) {
                val = parseInt(val).toLocaleString('en-US');
            }
        }

        onChange(val);
    };

    return (
        <div className="field">
            <label>{label}</label>
            <input type="text" inputMode="numeric" value={value} onChange={handleChange}  />
        </div>
    );
}

export default InputField;
