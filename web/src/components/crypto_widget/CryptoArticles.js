import React, { Component } from 'react';
import './CryptoWidget.css'
import trending from './TrendingIcon.png'
import sample from './sample.webp'

class CryptoArticles extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() { 
        return ( 
            <div className='articles'>
                <div className='tTitle'>
                    <img src={trending} alt='' />
                    News
                </div>
                <div className='tCryptos'>
                    <div className='aSpacing'>
                        <div>
                            <img src={sample} alt='' className='tIcon' /> {/* Mettre ici l'image du premier article */}
                            How to Tell If an Instagram Account Is Fake {/* Mettre ici le titre du premier article */}
                        </div>
                    </div>
                    <div className='aSpacing'>
                        <div>
                            <img src={sample} alt='' className='tIcon' /> {/* Mettre ici l'image du deuxième article */}
                            Crypto exchange FTX files for bankruptcy as its CEO resigns {/* Mettre ici le titre du deuxième article */}
                        </div>
                    </div>
                    <div className='aSpacing'>
                        <div>
                            <img src={sample} alt='' className='tIcon' /> {/* Mettre ici l'image du troisième article */}
                            Amazon orders limited series about the FTX crypto exchange scandal {/* Mettre ici le titre du troisième article */}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CryptoArticles;