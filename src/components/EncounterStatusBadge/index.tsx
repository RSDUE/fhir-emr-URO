import { t } from '@lingui/macro';
import { Tag, theme } from 'antd';
import { Encounter, QuestionnaireResponse } from 'fhir/r4b';
import { upperFirst } from 'lodash';

// const { useToken } = theme;

interface Props {
    status: Encounter['status'] | QuestionnaireResponse['status'];
}

// export function StatusBadge(props: Props) {
//     const { status } = props;
//     const { token } = useToken();

//     const statusHumanTitle = {
//         'in-progress': t`in progress`,
//         finished: t`completed`,
//         completed: t`completed`,
//     };

//     const color = {
//         'in-progress': token['orange-6'],
//         finished: token['purple-6'],
//         completed: token['purple-6'],
//     };

//     return <Tag color={color[status]}>{statusHumanTitle[status] ?? status}</Tag>;
// }
export function StatusBadge({ status }: Props) {
    const statusDataMapping: {
        [key: string]: {
            color: string;
            text: string;
            textColor?: string;
        };
    } = {
        'in-progress': {
            color: '#4f0250',
            text: t`In progress`,
            textColor: '#F6F6F6',
        },
        completed: {
            color: '#C1E1FC',
            text: t`Completed`,
            textColor: '#141414',
        },
        finished: {
            color: '#C1E1FC',
            text: t`Completed`,
            textColor: '#141414',
        },
        pending: {
            color: '#76747F',
            text: t`Pending`,
            textColor: '#F8FFFF',
        },
    };

    const { color, text, textColor } = statusDataMapping[status] || {
        text: upperFirst(status),
    };

    return (
        <Tag
            style={{
                color: textColor,
                width: '140px',
                height: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 8px',
                borderRadius: '16px',
            }}
            color={color}
        >
            {text}
        </Tag>
    );
}
