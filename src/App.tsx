import HeavyAndSlowStuff from './HeavyAndSlowStuff';
import { LOGGER_TAGS } from './shared/shared-enums';
import { DUMMY_LIST_LENGTH } from './shared/sharred-constants';
import PopUpError from './UI/Assets/icons/ic_pop_up_error';
import AppWrapper from './UI/Components/AppWrapper/AppWrapper';
import Button from './UI/Components/Button/Button';
import { useDialog } from './UI/Components/Dialog/useDialog.hook';
import Logger from './Utils/Logger';
import Utils from './Utils/Utils';

const listItems = Utils.generateLargeList(DUMMY_LIST_LENGTH);

function App() {
    Logger.log(LOGGER_TAGS.APP, 'Re-render occurred');

    const { open, close, setDialogProps, DialogModal } = useDialog();

    const openDialog = () => {
        setDialogProps({
            contextIcon: PopUpError,
            primaryActionLabel: 'Cancel',
            secondaryActionLabel: 'Confirm',
            secondaryActionFn: () => { 
                Logger.log('UI', 'Dialog secondary action\'s dispatched');
                close();
            },
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
            <DialogModal />
            <AppWrapper>
                <div className="page-wrapper">
                    <h3 className='page__title'>Host component</h3>
                    <HeavyAndSlowStuff list={listItems} />
                </div>
                <div className="footer">
                    <Button actionFn={openDialog}>Trigger dialog modal</Button>
                </div> 
            </AppWrapper>
        </>
    );  
}

export default App;
