import { IconProps } from '../../../shared/shared-interfaces';
import { ReactComponent as ClosePopUpIcon } from './ic_close_white.svg';
import { themeProvider } from '../../ThemeProvider/LightTheme';

function PopUpError(props: IconProps) {
    return (
        <div style={{
            padding: '10px',
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeProvider.palette.primaryColor
        }}>
            <ClosePopUpIcon {...props} />
        </div>
    );
}

export default PopUpError;