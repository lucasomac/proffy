import React, {TextareaHTMLAttributes} from 'react';
import './styles.css'

interface TextAreasProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const TextArea: React.FC<TextAreasProps> = ({label, name, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
};

export default TextArea;
