import { useState } from 'react';
import { createPortal } from 'react-dom';
import { rootContainer } from '../../..';
import Dialog from './Dialog';
import { DialogProps } from './dialog-types';

export const useDialog = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [dialogProps, setDialogProps] = useState<Omit<DialogProps, 'isOpen' | 'onCloseFn'>>({
        primaryActionLabel: '',
        secondaryActionLabel: '',
        secondaryActionFn: () => { return; },
        primaryActionFn: () => { return; },
        content: { title: '', description: '' },
        contextIcon: undefined
    });

    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    const DialogModal = () => createPortal(<Dialog {...{...dialogProps, isOpen, onCloseFn: close}} />, rootContainer);

    return { open, close, setDialogProps, DialogModal };
};