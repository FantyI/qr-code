import QrCodeGenerate from './Generate/QrCodeGenerate'
import QrCodeScaner from './Scaner/QrCodeScaner'
import HistoryGener from './HistoryGenerate/HistoryGener'
import Navigate from './Navigathion/Navigate'
import { Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navigate />

            <Routes>
                <Route path="/" element={''} />
                <Route path="/generate" element={ <QrCodeGenerate />} />
                <Route path="/scan" element={ <QrCodeScaner />} />
                <Route path="/history" element={ <HistoryGener />} />
            </Routes>
        </div>
    )
}

export default App;