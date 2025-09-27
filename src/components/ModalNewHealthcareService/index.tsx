import { PlusOutlined } from '@ant-design/icons';
import { t, Trans } from '@lingui/macro';
import { notification } from 'antd';

import { questionnaireIdLoader } from 'src/hooks/questionnaire-response-form-data';
import { selectCurrentUserRoleResource } from 'src/utils/role';

import { ModalTrigger } from '../ModalTrigger';
import { QuestionnaireResponseForm } from '../QuestionnaireResponseForm';
import { Custom } from 'src/styles/styles.style';

interface ModalNewHealthcareServiceProps {
    onCreate: () => void;
}
export const ModalNewHealthcareService = (props: ModalNewHealthcareServiceProps) => {
    const author = selectCurrentUserRoleResource();
    return (
        <ModalTrigger
            title={t`Add Healthcare Service`}
            trigger={
                <Custom.ButtonMD icon={<PlusOutlined />} type="primary">
                    <span>
                        <Trans>Add healthcare service</Trans>
                    </span>
                </Custom.ButtonMD>
            }
        >
            {({ closeModal }) => (
                <QuestionnaireResponseForm
                    questionnaireLoader={questionnaireIdLoader('healthcare-service-create')}
                    launchContextParameters={[
                        {
                            name: 'Author',
                            resource: author,
                        },
                    ]}
                    onSuccess={() => {
                        closeModal();
                        notification.success({ message: t`Healthcare service successfully created` });
                        props.onCreate();
                    }}
                    onCancel={closeModal}
                />
            )}
        </ModalTrigger>
    );
};
