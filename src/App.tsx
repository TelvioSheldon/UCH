import HeavyAndSlowStuff from './HeavyAndSlowStuff';
import TriggerModal from './TriggerModal';
import AppWrapper from './UI/Components/AppWrapper/AppWrapper';
import { DUMMY_LIST_LENGTH, LOGGER_TAGS } from './Utils/Constants';
import Logger from './Utils/Logger';
import Utils from './Utils/Utils';

const listItems = Utils.generateLargeList(DUMMY_LIST_LENGTH);

function App() {
    Logger.log(LOGGER_TAGS.APP, 'Re-render occurred');

    return (
        <>
            <AppWrapper>
                <div className="page-wrapper">
                    <h3 className='page__title'>Host component rendering heavy components</h3>
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
