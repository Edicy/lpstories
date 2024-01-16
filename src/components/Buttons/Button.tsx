import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color' | 'disabled' | 'children'>;

export const Button = ({ children, ...rest }: ButtonBaseProps) => <MuiButton {...rest}>{children}</MuiButton>;