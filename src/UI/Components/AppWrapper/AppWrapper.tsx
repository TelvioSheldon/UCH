import AppWrapperScreen from './app-wrapper-styles';
import { AppWrapperProps } from './app-wrapper-types';

function AppWrapper({ children }: AppWrapperProps) {
    return (
        <AppWrapperScreen>
            {children}
        </AppWrapperScreen>
    );
}
export default AppWrapper;