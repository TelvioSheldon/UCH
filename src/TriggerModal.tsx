import PopUpError from './UI/Assets/icons/ic_pop_up_error';
import Button from './UI/Components/Button/Button';
import { useDialog } from './UI/Components/Dialog/useDialog.hook';
import Logger from './Utils/Logger';

function TriggerModal() {

    const { open, close, setDialogProps, DialogModal } = useDialog();

    const openDialog = () => {
        setDialogProps({
            contextIcon: PopUpError,
            primaryActionLabel: 'Cancel',
            secondaryActionLabel: 'Confirm',
            secondaryActionFn: () => { Logger.log('UI', 'Dialog primary action\'s dispatched'); close(); },
            primaryActionFn: close,
            content: {
                title: 'Beware of unnecessary renders',
                description: 'This component is causing more re-renders than it should.'
            }
        });
        open();
    };

    return (
        <>
            <Button actionFn={openDialog}>Trigger dialog modal</Button>
            <DialogModal />
        </>

    );
}

export default TriggerModal;
