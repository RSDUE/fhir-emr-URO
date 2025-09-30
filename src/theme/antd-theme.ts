import { theme as ANTDTheme, ThemeConfig } from 'antd';
import _ from 'lodash';

import { colors, getPalette } from './palette';

const { getDesignToken } = ANTDTheme;

export function getANTDTheme({ dark }: { dark?: boolean }): ThemeConfig {
    const palette = getPalette({ dark });

    const config: ThemeConfig = {
        token: {
            colorPrimary: colors.primary,
            colorLink: palette.link,
            colorLinkHover: palette.secondaryPalette.bcs_9,
            colorLinkActive: palette.secondaryPalette.bcs_4,
            colorError: palette.error,
            colorSuccess: palette.success,
            colorWarning: palette.warning,
            colorInfo: palette.primaryPalette.bcp_6,
            fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji'`,
        },
        algorithm: dark ? ANTDTheme.darkAlgorithm : ANTDTheme.defaultAlgorithm,
        components: {
            Typography: {
                titleMarginBottom: 0,
                titleMarginTop: 0,
            },
            Layout: {
                siderBg: palette.neutral.sidebarBackground,
                bodyBg: palette.neutralPalette.gray_2,
                colorBgBody: palette.neutralPalette.gray_2,
                colorBgHeader: palette.neutral.sidebarBackground,
            },
            Tabs: {
                itemActiveColor: '#23a292',
                itemHoverColor: '#5BA694',
                inkBarColor: '#23a292',
                itemSelectedColor: '#23a292',
            },
            Result: {
                colorSuccess: palette.secondary,
            },
            Menu: {
                itemHoverColor: '#23a292', // color del texto al hover
                itemHoverBg: 'transparent', // si no quieres que cambie el fondo
            },
        },
    };

    const defaultTokens = getDesignToken(config);

    return _.merge({}, { token: defaultTokens }, config);
}
