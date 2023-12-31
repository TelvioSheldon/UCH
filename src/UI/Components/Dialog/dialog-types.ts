import Logger from '../../../Utils/Logger';

export interface DialogProps {
    contextIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>; // An icon to be shown in order to indicate context(warn, error, success, etc)
    primaryActionLabel: string;
    secondaryActionLabel: string;
    primaryActionFn: () => void;
    secondaryActionFn: () => void;
    onCloseFn: () => void;
    content: { title: string; description: string };
    isOpen: boolean;
}

Logger.warn('UI', 'TODO: Pass contextIcon as enum');