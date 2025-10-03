import styled from 'styled-components';

export const PATIENT_DOCUMENT_PADDING = 32;

export const S = {
    Content: styled.div`
        width: 760px;
        background-color: ${({ theme }) => theme.antdTheme?.colorBgContainer};
        border: 1px solid ${({ theme }) => theme.antdTheme?.colorBorderSecondary};
        padding: 32px;
        border-radius: 10px;
    `,
};
