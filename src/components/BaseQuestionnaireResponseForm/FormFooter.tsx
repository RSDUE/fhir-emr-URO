import { Trans } from '@lingui/macro';
import { CSSProperties } from 'react';

import { useIsMobile } from '../../hooks/isMobile';
import { Custom } from 'src/styles/styles.style';

import { BaseQuestionnaireResponseFormProps } from '.';
import { S } from './BaseQuestionnaireResponseForm.styles';
import { CheckCircleOutlined, CloseCircleOutlined, StopOutlined } from '@ant-design/icons';

export interface FormFooterComponentProps {
    submitting: boolean;
    submitDisabled?: boolean;
    onCancel?: () => void;
}

export interface Props extends BaseQuestionnaireResponseFormProps {
    submitting: boolean;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    submitDisabled?: boolean;
}

export function FormFooter(props: Props) {
    const {
        readOnly,
        onCancel,
        FormFooterComponent,
        saveButtonTitle,
        cancelButtonTitle,
        submitting,
        className,
        style,
        submitDisabled: initialSubmitDisabled,
    } = props;

    const isMobile = useIsMobile();

    if (readOnly) {
        return null;
    }

    const submitDisabled = submitting || initialSubmitDisabled;

    const isSomeButtonInLoading = submitting;

    return (
        <>
            {FormFooterComponent ? (
                <FormFooterComponent submitting={submitting} submitDisabled={submitDisabled} onCancel={onCancel} />
            ) : (
                <S.Footer className={className} style={style}>
                    {onCancel &&
                        (() => {
                            const CancelButtonComponent = isMobile ? Custom.ButtonOutline2 : Custom.ButtonOutline;

                            return (
                                <CancelButtonComponent
                                    type="default"
                                    onClick={onCancel}
                                    data-testid="cancel-button"
                                    disabled={isSomeButtonInLoading}
                                >
                                    <StopOutlined />
                                    {cancelButtonTitle ?? <Trans>Cancel</Trans>}
                                </CancelButtonComponent>
                            );
                        })()}
                    {(() => {
                        const isCancel =
                            typeof saveButtonTitle === 'string' &&
                            (saveButtonTitle === 'Cancel appointment' || saveButtonTitle === 'Anular');

                        const isAgree = typeof saveButtonTitle === 'string' && saveButtonTitle === 'Estoy de acuerdo';

                        let ButtonComponent: React.ElementType;

                        if (isAgree) {
                            ButtonComponent = isMobile ? Custom.ButtonSM2 : Custom.ButtonSM;
                        } else if (!isMobile) {
                            ButtonComponent = isCancel ? Custom.ButtonRed : Custom.Button;
                        } else {
                            ButtonComponent = isCancel ? Custom.ButtonRed2 : Custom.Button2;
                        }

                        const IconComponent = isCancel ? <CloseCircleOutlined /> : <CheckCircleOutlined />;

                        return (
                            <ButtonComponent
                                type="primary"
                                htmlType="submit"
                                data-testid="submit-button"
                                loading={submitting}
                                disabled={submitDisabled || isSomeButtonInLoading}
                                icon={IconComponent}
                            >
                                {saveButtonTitle ?? <Trans>Save</Trans>}
                            </ButtonComponent>
                        );
                    })()}
                </S.Footer>
            )}
        </>
    );
}

//     {onCancel && (
//         <Button
//             type="default"
//             onClick={onCancel}
//             data-testid="cancel-button"
//             disabled={isSomeButtonInLoading}
//         >
//             {cancelButtonTitle ?? <Trans>Cancel</Trans>}
//         </Button>
//     )}
//     <Button
//         type="primary"
//         htmlType="submit"
//         data-testid="submit-button"
//         loading={submitting}
//         disabled={submitDisabled || isSomeButtonInLoading}
//     >
//         {saveButtonTitle ?? <Trans>Save</Trans>}
//     </Button>
