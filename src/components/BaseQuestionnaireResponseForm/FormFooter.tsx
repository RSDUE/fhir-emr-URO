import { Trans } from '@lingui/macro';
import { CSSProperties } from 'react';

import { BaseQuestionnaireResponseFormProps } from '.';
import { S } from './BaseQuestionnaireResponseForm.styles';
import { useIsMobile } from 'src/hooks/isMobile';
import { Custom } from 'src/styles/styles.style';
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

    if (readOnly) {
        return null;
    }

    const submitDisabled = submitting || initialSubmitDisabled;

    const isSomeButtonInLoading = submitting;

    const isMobile = useIsMobile();

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

                        let ButtonComponent: React.ElementType;

                        if (!isMobile) {
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
                                loading={isSomeButtonInLoading}
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
