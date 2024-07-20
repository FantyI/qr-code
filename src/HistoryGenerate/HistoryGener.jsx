import { Generate } from "../LocalValue";
import {QRCodeSVG} from 'qrcode.react';
import s from './index.module.css'
const HistoryGener = () => {
    const data = JSON.parse(localStorage.getItem(Generate) || '[]');

    
    return(
        <div>
             {data.map((value) => (
                <p key={value}>
                    <span>{value}</span>
                    < QRCodeSVG value={value} />
                </p>
             ))}
        </div>
    )
}

export default HistoryGener;