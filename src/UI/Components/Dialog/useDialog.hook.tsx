import { useState } from 'react';
import { createPortal } from 'react-dom';
import { rootContainer } from '../../..';
import Dialog from './Dialog';
import { DialogProps } from './dialog-types';

export const useDialog = () => { // TODO: Refactor this to render all sort of pop ups depending on a "type" argument

    const [isOpen, setIsOpen] = useState(false);
    const [{
        primaryActionLabel,
        secondaryActionLabel,
        secondaryActionFn,
        primaryActionFn,
        content,
        contextIcon
    }, setDialogProps] = useState<Omit<DialogProps, 'isOpen' | 'onCloseFn'>>({
        primaryActionLabel: '',
        secondaryActionLabel: '',
        secondaryActionFn: () => { return; },
        primaryActionFn: () => { return; },
        content: { title: '', children: '' },
        contextIcon: undefined
    });

    const close = () => setIsOpen(false);


    const DialogModal = () => (
        createPortal(<Dialog
            primaryActionLabel={primaryActionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryActionFn={secondaryActionFn}
            primaryActionFn={primaryActionFn}
            isOpen={isOpen}
            content={content}
            onCloseFn={close}
            contextIcon={contextIcon}
        />, rootContainer)
    );

    const open = () => {
        setIsOpen(true);
    };
    

    return { open, close, setDialogProps, DialogModal };
};