import HeavyAndSlowStuff from './HeavyAndSlowStuff';
import TriggerModal from './TriggerModal';
import AppWrapper from './UI/Components/AppWrapper/AppWrapper';
import Logger from './Utils/Logger';
import Utils from './Utils/Utils';

const listItems = Utils.generateLargeList();

function App() {
    Logger.warn('UI', 'Re-render occurred');

    return (
        <>
            <AppWrapper>
                <div className="page-wrapper">
                    <h3 className='page__title'>Host component with several data being processed at calculation stage</h3>
                    <HeavyAndSlowStuff list={listItems} />
                </div>
                <div className="footer">
                    <TriggerModal />
                </div> 
            </AppWrapper>
        </>
    );  
}

export default App;
