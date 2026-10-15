import '../App.css'

const ResultPanel = ({result}) => {

    const formatNumber = (num) => {
        return Math.round(num).toLocaleString('fa-IR');
    };

    const items = [
        { label: '1ارزش طلا:', value: result.goldPrice },
        { label: 'دستمزد:', value: result.wage },
        { label: 'سود:', value: result.profit },
        { label: 'ارزش افزوده:', value: result.tax },
    ];

    return (
        <aside className="card result-card">
            <h2 className="card-title">نتیجه محاسبه</h2>

            <div className="result" id="result" hidden>
                {/* <div className="row"><span>ارزش طلا:</span><strong id="rGold">—</strong></div>
                <div className="row"><span>دستمزد:</span><strong id="rWage">—</strong></div>
                <div className="row"><span>سود:</span><strong id="rProfit">—</strong></div>
                <div className="row"><span>ارزش افزوده:</span><strong id="rTax">—</strong></div>
                <div className="row total"><span>قیمت طلای ساخته:</span><strong id="rTotal">—</strong></div> */}

                {items.map((item, index) => (
                    <div key={index} className="row">
                        <span>{item.label}:</span>
                        <strong>{formatNumber(item.value)} تومان</strong>
                    </div>
                ))}

                <div className="row total">
                    <span>💰 قیمت طلای ساخته:</span>
                    <strong>{formatNumber(result.total)} تومان</strong>
                </div>

            </div>
        </aside>
    );
}

export default ResultPanel;
