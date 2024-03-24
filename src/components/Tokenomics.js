import React from 'react'
import "../scss/token.scss"
function Tokenomics() {
    return (
        <>
            <div id='tokenomics' className=" border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5" >
                <div className="max-w-[1200px] mx-auto relative md:pt-24 pt-14">
                    <div >
                        <div className="md:text-[90px] text-[52px] text-center">
                            <h2 className="text-yellow md:leading-normal leading-[60px] text__">TOKENOMICS</h2>
                        </div>
                        <div className="text-center  md:text-3xl text-xl max-w-[700px] mx-auto text-white">
                            <p>BUIDL made 777 Million tokens but  <strong className="text-red">greedy son of a bitch</strong> and wants to keep them all
                                to himself.</p>
                        </div>
                    </div>
                    <div >
                        <div className="md:p-20 p-5 pt-10 w-full flex md:flex-row flex-col gap-10 items-center">
                            <div className="relative md:w-1/2   overflow-hidden rounded-2xl">
                                <div className="absolute top-0 left-0 bottom-0 bg-transparent blink-bg right-0 z-10"></div>
                                <img className="object-contain border-4 border-yellow w-[100%]" src="https://www.trumpbull.lol/assets/image%2012-DfmgqL7e.png" alt="trading" />
                            </div>
                            <div className="flex flex-col items-center">

                                <div >
                                    <div className="flex flex-col md:gap-5 gap-3 relative z-20">
                                        <div >
                                            <div className="flex-1 f p-5 border border-white bg-yellow text-center" style={{
                                                background: '#0345fb',
                                                background: 'rgba( 255, 255, 255, 0.25 )',
                                                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                                                backdropFilter: 'blur( 4px )',
                                                WebkitBackdropFilter: 'blur( 4px )',
                                                borderRadius: '10px',
                                                border: '1px solid rgba( 255, 255, 255, 0.18 )'
                                            }}>
                                                <div className="md:text-4xl text-xl head">TOTAL SUPPLY</div>
                                                <div className="md:text-xl md:mt-5 mt-2 break-all">777,777,777 $BUIDL</div>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="flex-1 py-5 px-10 md:px-20 border border-white bg-yellow text-center" style={{
                                                background: '#0345fb',
                                                background: 'rgba( 255, 255, 255, 0.25 )',
                                                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                                                backdropFilter: 'blur( 4px )',
                                                WebkitBackdropFilter: 'blur( 4px )',
                                                borderRadius: '10px',
                                                border: '1px solid rgba( 255, 255, 255, 0.18 )'
                                            }}>
                                                <div className="md:text-4xl text-xl head">TOKEN ADDRESS</div>
                                                <div className="md:text-xl text-xs md:mt-5 mt-2 break-all">
                                                    1111111111111111111111111111111111111111</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:absolute md:bottom-[-60px] md:mt-0 mt-10 md:left-[200px] z-10 rotate-6" ><a href="#" rel="noopener noreferrer" target="_blank"><button className="font-display text-2xl border-1 rounded-0 border-black rotate-[5deg] shadow px-5 py-3 md:hover:scale-105 transition-all ease-in-out md:text-4xl md:animate-bounce-fast bg-red text-white bg-[#0345fb] head btn__">BUY
                                $BUIDL HERE</button></a></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tokenomics
