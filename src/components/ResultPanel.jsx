import '../App.css'

const ResultPanel = () => {
    return (
        <aside className="card result-card">
            <h2 className="card-title">نتیجه محاسبه</h2>

            <div className="result" id="result" hidden>
                <div className="row"><span>ارزش طلا:</span><strong id="rGold">—</strong></div>
                <div className="row"><span>دستمزد:</span><strong id="rWage">—</strong></div>
                <div className="row"><span>سود:</span><strong id="rProfit">—</strong></div>
                <div className="row"><span>ارزش افزوده:</span><strong id="rTax">—</strong></div>
                <div className="row total"><span>قیمت طلای ساخته:</span><strong id="rTotal">—</strong></div>
            </div>
        </aside>
    );
}

export default ResultPanel;
