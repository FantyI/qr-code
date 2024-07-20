import { Link } from "react-router-dom";

const Navigate = () => {
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Link to="/">Home</Link>
        <Link to="/generate"> QrCodeGenerate</Link>
        <Link to="/scan"> QrCodeScanere</Link>
        <Link to="/history"> HistoryGenereta</Link>
    </div>
    )
}

export default Navigate;