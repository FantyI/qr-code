import {QRCodeSVG} from 'qrcode.react'; 
import { useState } from 'react';
import { Generate } from "../LocalValue";

const QrCodeGenerate = () => {

    const [value, setValue] = useState('')
    const [condition, setCondition] = useState('')
    const Change = (event) => {
        setCondition('');
        setValue(event.target.value);
    };

    const Click = () => {
        const prevValue = JSON.parse(localStorage.getItem(Generate)|| '[]' )
        localStorage.setItem(Generate, JSON.stringify([...prevValue, value]));
        
        setCondition(value)
        setValue('')
    };

    return (
        <div>
            {condition && < QRCodeSVG value={condition}/>}
            <input type="text" value={value} onChange={Change}/>
            <button onClick={Click} >Генирировать Qr Code</button>
        </div>
    )
}

export default QrCodeGenerate;