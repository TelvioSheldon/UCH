import PopUpError from './UI/Assets/icons/ic_pop_up_error';
import AppWrapper from './UI/Components/AppWrapper/AppWrapper';
import Button from './UI/Components/Button/Button';
import { useDialog } from './UI/Components/Dialog/useDialog.hook';
import Logger from './Utils/Logger';

function App() {
    const { open, close, setDialogProps, DialogModal } = useDialog();
    Logger.warn('UI', 'Re-render occurred');

    const openDialog = () => {
        setDialogProps({
            contextIcon: PopUpError,
            primaryActionLabel: 'Cancel',
            secondaryActionLabel: 'Confirm',
            secondaryActionFn: () => { Logger.log('UI', 'Dialog primary action\'s dispatched'); close(); },
            primaryActionFn: close,
            content: {
                title: 'Beware of unnecessary renders',
                children: 'This component is causing more re-renders than it should.'
            }
        });
        open();
    };

    return (
        <>
            <DialogModal />
            <AppWrapper>
                <div className="page-content">
                    <h3>Host component with several data being processed at calculation stage</h3>
                </div>
                <div className="footer">
                    <Button actionFn={openDialog}>Open dialog modal</Button>
                </div> 
            </AppWrapper>
        </>
    );  
}

export default App;
