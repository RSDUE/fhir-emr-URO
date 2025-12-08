import { Form, Input } from 'antd';
import { QuestionItemProps } from 'sdc-qrf';

import { useFieldController } from '../hooks';
import { useEffect, useState } from 'react';
import { set } from 'lodash';

export function QuestionString({ parentPath, questionItem }: QuestionItemProps) {
    const { linkId } = questionItem;
    const fieldName = [...parentPath, linkId, 0, 'value', 'string'];
    const { value, onChange, disabled, formItem, onBlur, placeholder } = useFieldController<string>(
        fieldName,
        questionItem,
    );

    return (
        <Form.Item {...formItem} data-testid={linkId}>
            <Input value={value} disabled={disabled} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
        </Form.Item>
    );
}
export function QuestionEmail({ parentPath, questionItem }: QuestionItemProps) {
    const { linkId } = questionItem;
    const fieldName = [...parentPath, linkId, 0, 'value', 'string'];
    const { value, onChange, disabled, formItem, onBlur, placeholder } = useFieldController<string>(
        fieldName,
        questionItem,
    );

    const [preffix, setPrefix] = useState<any>(undefined);
    const outerStatus = formItem?.validateStatus;
    const outerHelp = formItem?.help;
    

    const errorDuplicateEmail = 'This email is already registered';
    const errorInvalidFormat = 'Invalid email format';
    const errorEmailRequired = 'Email is required';


    const [validateStatus, setValidateStatus] = useState<'success'|'warning' | 'error' | undefined>(outerStatus);
    const [errorMsg, setErrorMsg] = useState<any>(outerHelp);

    useEffect(() => {
        console.log('QuestionEmail outerStatus changed', outerStatus);
        console.log('QuestionEmail outerHelp changed', outerHelp);
        setValidateStatus(outerStatus);
        setErrorMsg(outerHelp);
    }, [outerStatus, outerHelp]);


    console.log('QuestionEmail parameters', questionItem);
    console.log('QuestionEmail formItem', formItem);
    console.log('QuestionEmail validateStatus', outerStatus);
    console.log('QuestionEmail validateStatus', validateStatus);
    console.log('QuestionEmail help', outerHelp);
    console.log('QuestionEmail help', errorMsg);

    const onPreChange = (value: string) => {
        console.log('onPreChange QuestionEmail called', value);
        onChange(value.trim());
    };

    const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

    const onPreBlur = () => {
        //Si hay error de validacion externo, no hacer nada
        if(validateStatus === 'error'){
            return;
        }          
        //this is the correct moment to validate email format
        if(value === undefined || value.length == 0){
            console.log('Email is required:', value);
            setValidateStatus('error');
            setPrefix(<span style={{ color: 'red' }}>✖</span>);
            setErrorMsg(errorEmailRequired);
            return;
        }

        if (value && !isEmail(value)) {
            console.log('Invalid email format:', value);
            setValidateStatus('error');
            setPrefix(<span style={{ color: 'red' }}>✖</span>);
            setErrorMsg(errorInvalidFormat);
        }else{
               // Optionally, you can set some error state here to inform the user
            setValidateStatus(undefined);
            setPrefix(undefined);

        }
        console.log('onPreBlur QuestionEmail called');
        onBlur();
    };

    return (
        <Form.Item {...formItem} data-testid={linkId} validateStatus={validateStatus} help={validateStatus === 'error' ? errorMsg : undefined}>
            <Input
                value={value}
                disabled={disabled}
                onChange={(e) => onPreChange(e.target.value)}
                onBlur={onPreBlur}
                placeholder={placeholder}
                status={validateStatus}
                prefix={preffix}
            />
        </Form.Item>
    );
}

export function QuestionText({ parentPath, questionItem }: QuestionItemProps) {
    const { linkId, rowsNumber = 3 } = questionItem;
    const fieldName = [...parentPath, linkId, 0, 'value', 'string'];
    const { value, onChange, disabled, formItem, placeholder } = useFieldController<string>(fieldName, questionItem);

    return (
        <Form.Item {...formItem} data-testid={linkId}>
            <Input.TextArea
                value={value}
                rows={rowsNumber}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Form.Item>
    );
}
