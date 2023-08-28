import { useState } from 'react';

function HeavyAndSlowStuff({ list }: {list: string[]}) {

    const [listItems] = useState(list);
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