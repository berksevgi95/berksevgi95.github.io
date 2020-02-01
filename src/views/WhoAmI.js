import React from 'react'

const WhoAmI = ({
    ...props
}) => {

    
    return <div className="section whoami">

        <div className="w-full h-full flex">
            <div className="w-0-5 h-full flex justify-center align-center">
                <article className="ml-30 mt-30 mb-30 mr-30 text-align-start white font-size-20">
                    <h1 className="h1">Who Am I?</h1>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan 
                    mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının 
                    bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini 
                    alarak karıştırdığı 1500'lerden beri endüstri standardı sahte 
                    metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını 
                    sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik 
                    dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da 
                    içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda 
                    Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü 
                    yayıncılık yazılımları ile popüler olmuştur.
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