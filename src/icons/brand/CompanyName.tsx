import { useTheme } from 'styled-components';

export function CompanyName(props: React.SVGProps<SVGSVGElement>) {
    const theme = useTheme();
    const color = props.color;
    const fillColor = color ? color : theme.mode === 'dark' ? 'rgba(255,255,255,0.85)' : '#203767';

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="89px" height="15px" viewBox="0 0 89 15" fill={fillColor}>
            <text x="0" y="15" fontFamily="Verdana" fontWeight="bold" fontSize="20">
                U-Salud
            </text>
        </svg>
    );
}
