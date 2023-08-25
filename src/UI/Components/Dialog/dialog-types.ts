import Logger from '../../../Utils/Logger';

export interface DialogProps {
    contextIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>; // An icon to be shown in order to indicate context(warn, error, success, etc)
    confirmText: string;
    cancelText: string;
    confirmFn: () => void;
    cancelFn: () => void;
    content: { title: string; description: string };
    isDismissible: boolean; // If true, the dialog can be dismissible without user interaction
}

Logger.warn('UI', 'TODO: Pass contextIcon as enum');