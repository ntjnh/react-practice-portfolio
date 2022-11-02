import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faSass,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quis eligendi ipsum ratione ex accusamus numquam rerum voluptate
          laboriosam alias ea suscipit distinctio magnam molestiae, quia vero
          omnis deserunt magni!
        </p>
        <p>
          Neque tenetur dolore quidem ut ex. Nemo sint modi velit vero numquam
          perspiciatis praesentium, quis adipisci saepe corporis repellat fugiat
          repudiandae doloremque!
        </p>
        <p>
          Ipsam fuga similique magnam natus laudantium soluta, quasi maiores
          repellendus, dolorum necessitatibus aliquam exercitationem quo
          ratione! Eos quasi minus expedita quidem vero.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faSass} color="#cf649a" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
