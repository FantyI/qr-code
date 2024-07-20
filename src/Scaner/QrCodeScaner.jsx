import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react'
import { Scan } from '../LocalValue'

const QrCodeScaner = () => {
    const [res, setRes] = useState('');

    const resultScanner = (result) => {
        const prevValue = JSON.parse(localStorage.getItem(Scan)) || [];
        localStorage.setItem(Scan, JSON.stringify([...prevValue, result[0].rawValue]));
        setRes(result[0].rawValue);
    }

    return (
        <div>
            <Scanner styles={{ container: {width: 400}}} onScan={resultScanner} />
            <p>{res}</p>
        </div>
    )
}

export default QrCodeScaner;