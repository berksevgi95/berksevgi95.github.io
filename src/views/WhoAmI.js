import React from 'react'

const WhoAmI = ({
    ...props
}) => {

    
    return <div className="section whoami">

        <div style={{width : '100%', height : '100%', display : 'flex'}}>
            <div style={{ width: '50%', height: '100%', display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
                <article style={{margin : 50, textAlign : 'start', fontSize : 20, color : 'white'}}>
                    <h1 style={{fontSize : 70}}>Who Am I?</h1>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
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