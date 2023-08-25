import { useState } from 'react';
import PopUpError from './UI/Assets/icons/ic_pop_up_error';
import AppWrapper from './UI/Components/AppWrapper/AppWrapper';
import Button from './UI/Components/Button/Button';
import Dialog from './UI/Components/Dialog/Dialog';
import Logger from './Utils/Logger';

function App() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    return (
        <AppWrapper>
            <div className="page-content">
                <h3>Host component with several data being processed at calculation stage</h3>
                <Dialog 
                    contextIcon={PopUpError}
                    cancelFn={()=> setIsDialogOpen(false)}
                    confirmFn={()=> Logger.log('UI', 'Confirmed')}
                    content={{
                        title: 'Beware of unnecessary renders',
                        description: 'This component is causing more re-renders than it should.'
                    }}
                    cancelText="Cancel"
                    confirmText='Confirm'
                    isOpen={isDialogOpen}
                />
            </div>
            <div className="footer">
                <Button mode={'NORMAL'} actionFn={() => setIsDialogOpen(true)}>Open dialog</Button> </div>    
        </AppWrapper>
    );  
}

export default App;
