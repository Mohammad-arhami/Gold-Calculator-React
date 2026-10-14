import '../App.css'

const InputField = () => {
    return (
        <section className="card form-card">
            <h2 className="card-title">اطلاعات ورودی</h2>

            <div className="field">
                <label>نرخ روز طلا (هر گرم - تومان)</label>
                <input type="text" inputmode="numeric" id="goldPrice" />
            </div>

            <div className="field">
                <label>وزن طلا (گرم)</label>
                <input type="text" inputmode="decimal" id="weight" />
            </div>

            <div className="field">
                <label>اجرت ساخت</label>
                <div className="combo-wrap">
                    <input type="text" inputmode="text" id="wagePercent" autocomplete="off"/>
                    <button type="button" className="combo-toggle" id="wageToggle">▼ %</button>
                    <ul className="combo-list" id="wageList" hidden></ul>
                </div>
            </div>

            <div className="field">
                <label>سود فروشنده </label>
                <input type="text" inputmode="text" id="profitPercent" value="7 %" />
            </div>
            
            <div className="field">
                <label>مالیات بر ارزش افزوده </label>
                <input type="text" inputmode="text" id="taxPercent" value="10 %" />
            </div>
        </section>
    );
}

export default InputField;
