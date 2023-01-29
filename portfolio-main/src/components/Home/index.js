import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoTittle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Logo from './Logo';
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','t','a','n','g']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
               <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span>  
                <br/>
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}>'m</span>  
               <img src={LogoTittle} alt="devloper"/>
               <AnimatedLetters letterClass={letterClass} 
               strArray={nameArray}
               idx={15}/>
               <br/>
               <AnimatedLetters letterClass={letterClass} 
               strArray={jobArray}
               idx={20}/>
               </h1>
               <h2>Full stack devloper/ Javascript Expert / Data Analyst</h2>
               <a href={require("../../assets/file/file.pdf")} download="Mitang-resume" className='flat-button'>Download Resume</a>
            </div>
            <div className="text-bottom">
              <h4>This website is made by
                 @Mitang Patel<br/>Don't copy @copyright
                 </h4>

            </div>
              <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}


export default Home