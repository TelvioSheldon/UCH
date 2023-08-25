import PopUpError from './UI/Assets/icons/ic_pop_up_error';
import Dialog from './UI/Components/Dialog/Dialog';
import Logger from './Utils/Logger';

function App() {
    return (
        <>
            Content
            <Dialog 
                contextIcon={PopUpError}
                cancelFn={()=> Logger.log('UI', 'Cancelled')}
                confirmFn={()=> Logger.log('UI', 'Confirmed')}
                content={{
                    title: 'Beware of unnecessary renders',
                    description: 'This component is causing more re-renders than it should.'
                }}
                cancelText="Cancel"
                confirmText='Confirm'
                isDismissible
            />
            Content
        </>
    );  
}

export default App;
