import React from 'react'

const WhoAmI = ({
    ...props
}) => {

    
    return <div className="section whoami">

        <div className="w-full h-full flex p-16">
            <div className="w-full md:w-1/2 h-full flex ">
                <article className="mb-8 md:m-auto text-left text-white text-lg">
                    <h1 className="text-4xl md:text-6xl">
                        <b>Who Am I?</b>
                    </h1>
                    I am a software engineer who aims to develop effective and practical solutions,
                    experienced on primarily web and mobile applications, also embedded systems, 
                    neural networks and continious integration concepts, enjoys researching but enjoys 
                    more than coding, open-minded, willingful for working, compatible with team work, 
                    motorcycle addict

                    {/* Bilişim sektörüne pratik ve efektif çözümler sunmayı amaç edinmiş, 
                    öncelikli olarak web ve mobil platformlarında, bunun yanı sıra gömülü
                    sistemler ve sürekli entegrasyon alanlarında da fikir sahibi,
                    araştırmaktan zevk alan, ancak kodlamaktan daha çok zevk alan, yeni 
                    fikirlere & eleştirilere açık, çalışmaya hevesli, takım çalışmasına uyumlu,
                    motosiklet tutkunu bir yazılım mühendisiyim. */}
                </article>
            </div>
        </div>

        <div className="arrow">
            <span></span>
            Scroll to Continue
        </div>
        
    </div>
}

export default WhoAmI