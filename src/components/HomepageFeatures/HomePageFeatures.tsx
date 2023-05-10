import '../../css/features.css';
import React from 'react';
import { FeatureList } from '@site/src/components/HomepageFeatures/features';
import Feature from '@site/src/components/HomepageFeatures/Feature';

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={'features'}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
