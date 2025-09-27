import styled from 'styled-components';
import { Button } from 'antd';

export const Custom = {
    ButtonXS: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 80px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutlineXS: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 80px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreenXS: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 80px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRedXS: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 80px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    ButtonXS2: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 90px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutlineXS2: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 90px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreenXS2: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 90px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRedXS2: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 90px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    Button: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutline: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreen: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRed: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    Button2: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutline2: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreen2: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRed2: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 130px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    ButtonRed3: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 150px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    ButtonSM: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 170px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutlineSM: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 170px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreenSM: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 170px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRedSM: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 170px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreenSM2: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 150px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRedSM2: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 170px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    ButtonMD: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        max-width: 215px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutlineMD: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        max-width: 215px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreenMD: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        max-width: 215px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRedMD: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        max-width: 215px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    ButtonLG: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        max-width: 250px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutlineLG: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        max-width: 250px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreenLG: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        max-width: 250px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRedLG: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        max-width: 250px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
    ButtonLG2: styled(Button)`
        flex: 1;
        background-color: #057e80;
        color: #effefc;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 250px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #c7fff9;
            color: #057e80;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #51f7ed;
        }
    `,
    ButtonOutlineLG2: styled(Button)`
        flex: 1;
        background-color: #f0f7fe;
        color: #057e80;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 250px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #002f33;
            color: #effefc;
            border: none;
        }
    `,
    ButtonGreenLG2: styled(Button)`
        flex: 1;
        background-color: #5ba694;
        color: #edfcf4;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 250px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #2b5a51;
            color: #edfcf4;
        }
        &:disabled,
        &.ant-btn-disabled {
            background-color: #d2f9e3;
            color: #087450;
            cursor: not-allowed;
            opacity: 0.7;
            border: 1px solid #aaf0cd;
        }
    `,
    ButtonRedLG2: styled(Button)`
        flex: 1;
        background-color: #ce0711;
        color: #f6f6f6;
        box-shadow: none;
        width: auto;
        min-width: 75px;
        max-width: 250px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px;
        border-radius: 16px;
        gap: 10px;

        &:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: #4d0206;
            color: #effefc;
            border: none;
        }
    `,
};
