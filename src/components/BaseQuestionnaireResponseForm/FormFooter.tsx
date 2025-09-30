// import { CheckCircleOutlined, CheckOutlined, CloseCircleOutlined, StopOutlined } from '@ant-design/icons';
// import { Trans } from '@lingui/macro';
// import { Button } from 'antd';
// import { CSSProperties, useContext } from 'react';
// import { useWatch } from 'react-hook-form';
// import { FormItems } from 'sdc-qrf';
// import { isLoading, isSuccess } from '@beda.software/remote-data';

// import { BaseQuestionnaireResponseFormPropsContext } from 'src/components/BaseQuestionnaireResponseForm/context';

// import { BaseQuestionnaireResponseFormProps } from '.';
// import { S } from './BaseQuestionnaireResponseForm.styles';
// import { useIsMobile } from '../../hooks/isMobile';
// import { Custom } from 'src/styles/styles.style';
// import { DebouncedFunc } from 'lodash';

// export interface FormFooterComponentProps {
//     submitting: boolean;

//     submitDisabled?: boolean;
//     onCancel?: () => void;
// }

// export interface Props extends BaseQuestionnaireResponseFormProps {
//     submitting: boolean;
//     className?: string | undefined;
//     style?: CSSProperties | undefined;
//     submitDisabled?: boolean;
//     // debouncedSaveDraft?: DebouncedFunc<(currentFormValues: FormItems) => Promise<void>>;
// }

// export function FormFooter(props: Props) {
//     const {
//         formData,
//         readOnly,
//         onCancel,
//         FormFooterComponent,
//         saveButtonTitle,
//         cancelButtonTitle,
//         submitting,
//         // debouncedSaveDraft,
//         // draftSaveResponse,
//         // setDraftSaveResponse,
//         autoSave,
//         className,
//         style,
//         submitDisabled: initialSubmitDisabled,
//     } = props;

//     const formValues = useWatch();
//     const isMobile = useIsMobile();
//     const assembledFromQuestionnaireId = formData.context.fceQuestionnaire.assembledFrom;

//     if (readOnly) {
//         return null;
//     }

//     const submitLoading = submitting;
//     const submitDisabled = submitting || initialSubmitDisabled;

//     // const draftLoading = draftSaveResponse && isLoading(draftSaveResponse);
//     // const draftSaved = draftSaveResponse && isSuccess(draftSaveResponse);

//     const isSomeButtonInLoading = submitLoading;

//     const renderDraftButton = (props: RenderDraftButtonProps) => {
//         const { draftLoading, draftSaved, formValues, isSomeButtonInLoading } = props;

//         const baseQuestionnaireResponseFormProps = useContext(BaseQuestionnaireResponseFormPropsContext);

//         const autoSave = baseQuestionnaireResponseFormProps?.autoSave;
//         const formData = baseQuestionnaireResponseFormProps?.formData;
//         const questionnaireId = formData?.context.fceQuestionnaire.assembledFrom;
//         const saveDraft = baseQuestionnaireResponseFormProps?.saveDraft;

//         if (!formValues) {
//             return null;
//         }

//         if (!questionnaireId) {
//             return null;
//         }

//         if (!saveDraft) {
//             return null;
//         }

//         if (!autoSave) {
//             return (
//                 <Button loading={draftLoading} disabled={isSomeButtonInLoading} onClick={() => saveDraft(formValues)}>
//                     <Trans>Save as draft</Trans>
//                 </Button>
//             );
//         }

//         if (autoSave && draftLoading) {
//             return (
//                 <Button ghost disabled loading={draftLoading}>
//                     <Trans>Saving draft</Trans>
//                 </Button>
//             );
//         }

//         if (autoSave && draftSaved) {
//             return (
//                 <Button ghost disabled icon={<CheckOutlined />}>
//                     <span>
//                         <Trans>Saved as draft</Trans>
//                     </span>
//                 </Button>
//             );
//         }

//         return null;
//     };

//     return (
//         <>
//             {FormFooterComponent ? (
//                 <FormFooterComponent submitting={submitting} submitDisabled={submitDisabled} onCancel={onCancel} />
//             ) : (
//                 <S.Footer className={className} style={style}>
//                     <RenderDraftButton
//                         assembledFromQuestionnaireId={assembledFromQuestionnaireId}
//                         formValues={formValues}
//                         isSomeButtonInLoading={isSomeButtonInLoading}
//                     />
//                     {onCancel &&
//                         (() => {
//                             const CancelButtonComponent = isMobile ? Custom.ButtonOutline2 : Custom.ButtonOutline;

//                             return (
//                                 <CancelButtonComponent
//                                     type="default"
//                                     onClick={onCancel}
//                                     data-testid="cancel-button"
//                                     disabled={isSomeButtonInLoading}
//                                 >
//                                     <StopOutlined />
//                                     {cancelButtonTitle ?? <Trans>Cancel</Trans>}
//                                 </CancelButtonComponent>
//                             );
//                         })()}
//                     {(() => {
//                         const isCancel =
//                             typeof saveButtonTitle === 'string' &&
//                             (saveButtonTitle === 'Cancel appointment' || saveButtonTitle === 'Anular');

//                         let ButtonComponent: React.ElementType;

//                         if (!isMobile) {
//                             ButtonComponent = isCancel ? Custom.ButtonRed : Custom.Button;
//                         } else {
//                             ButtonComponent = isCancel ? Custom.ButtonRed2 : Custom.ButtonSM;
//                         }

//                         const IconComponent = isCancel ? <CloseCircleOutlined /> : <CheckCircleOutlined />;

//                         return (
//                             <ButtonComponent
//                                 type="primary"
//                                 htmlType="submit"
//                                 data-testid="submit-button"
//                                 loading={submitLoading}
//                                 disabled={submitDisabled || isSomeButtonInLoading}
//                                 icon={IconComponent}
//                             >
//                                 {saveButtonTitle ?? <Trans>Save</Trans>}
//                             </ButtonComponent>
//                         );
//                     })()}
//                 </S.Footer>
//             )}
//         </>
//     );
// }

// interface RenderDraftButtonProps {
//     assembledFromQuestionnaireId: string | undefined;
//     autoSave?: boolean;
//     draftLoading?: boolean;
//     draftSaved?: boolean;
//     formValues?: FormItems;
//     isSomeButtonInLoading?: boolean;
// }

// export function RenderDraftButton(props: RenderDraftButtonProps) {
//     const { draftLoading, draftSaved, formValues, isSomeButtonInLoading } = props;

//     const baseQuestionnaireResponseFormProps = useContext(BaseQuestionnaireResponseFormPropsContext);

//     const autoSave = baseQuestionnaireResponseFormProps?.autoSave;
//     const formData = baseQuestionnaireResponseFormProps?.formData;
//     const questionnaireId = formData?.context.fceQuestionnaire.assembledFrom;
//     const saveDraft = baseQuestionnaireResponseFormProps?.saveDraft;

//     if (!formValues) {
//         return null;
//     }

//     if (!questionnaireId) {
//         return null;
//     }

//     if (!saveDraft) {
//         return null;
//     }

//     if (!autoSave) {
//         return (
//             <Custom.ButtonGreenLG
//                 loading={draftLoading}
//                 disabled={isSomeButtonInLoading}
//                 onClick={() => saveDraft(formValues)}
//             >
//                 <Trans>Save as draft</Trans>
//             </Custom.ButtonGreenLG>
//         );
//     }

//     if (autoSave && draftLoading) {
//         return (
//             <Custom.ButtonGreenLG ghost disabled loading={draftLoading}>
//                 <Trans>Saving draft</Trans>
//             </Custom.ButtonGreenLG>
//         );
//     }

//     if (autoSave && draftSaved) {
//         return (
//             <Custom.ButtonGreenLG ghost disabled icon={<CheckOutlined />}>
//                 <span>
//                     <Trans>Saved as draft</Trans>
//                 </span>
//             </Custom.ButtonGreenLG>
//         );
//     }

//     return null;
// }

import { Trans } from '@lingui/macro';
import { Button } from 'antd';
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

                        let ButtonComponent: React.ElementType;

                        if (!isMobile) {
                            ButtonComponent = isCancel ? Custom.ButtonRed : Custom.ButtonLG;
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
