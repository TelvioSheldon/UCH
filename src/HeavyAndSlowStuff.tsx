import { LOGGER_TAGS } from './shared/shared-enums';
import Logger from './Utils/Logger';

function HeavyAndSlowStuff({ list }: {list: string[]}) {
    Logger.log(LOGGER_TAGS.HEAVY_COMPONENT, 'Re-render occurred');

    return (
        <div style={{ overflow: 'scroll', display: 'flex', flexWrap: 'wrap' }}>
            {list.map((item, index) => (
                <span key={`${item}${index}`}>
                    {item}
                </span>
            ))}   
        </div>
    );
}

export default HeavyAndSlowStuff;