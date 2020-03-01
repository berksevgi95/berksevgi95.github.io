import React from 'react'
import { FormattedMessage } from 'react-intl'

const WhoAmI = ({
    ...props
}) => {

    
    return <div className="section whoami">

        <div className="w-full h-full flex p-16">
            <div className="w-full md:w-1/2 h-full flex ">
                <article className="mb-8 md:m-auto text-left text-white text-lg">
                    <h1 className="text-4xl md:text-6xl">
                        <b><FormattedMessage id="who.am.i"/></b>
                    </h1>
                    <FormattedMessage id="who.am.i.explanation"/>
                </article>
            </div>
        </div>

        <div className="arrow">
            <span></span>
            <FormattedMessage id="scroll.to.continue"/>
        </div>
        
    </div>
}

export default WhoAmI