import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

// Only include variant, size, and color
type TypographyBaseProps = Pick<MuiTypographyProps, 'variant'|'children'>;

export const Typography = ({children, ...rest} :TypographyBaseProps) => <MuiTypography {...rest}>{children}</MuiTypography>;