import './index.scss'
import LogoN from '../../../assets/images/logo-n.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 10,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoN} alt="N" />
      <svg
        width="972pt"
        height="897pt"
        viewBox="0 0 728.01 671.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" fill="none">
          <path
            ref={outlineLogoRef}
            fill="#fff"
            stroke="#0052bd"
            stroke-width="2px"
            d="M688.01,1V11.3l-87.55,51.5V670.5h-40.17L145.2,100.91V619l5.15,5.15h77.25v46.35H6.15v-46.35H83.4l5.15-5.15V62.8L1,11.3V1H175.07l368.74,507.79V62.8L456.26,11.3V1h231.75Z"
          />
          <path
            ref={outlineLogoRef}
            fill="#fff"
            stroke="#0052bd"
            stroke-width="2px"
            d="M727.01,1V11.3l-87.55,51.5V670.5h-40.17L184.2,100.91V619l5.15,5.15h77.25v46.35H45.15v-46.35H122.4l5.15-5.15V62.8L40,11.3V1H214.07l368.74,507.79V62.8L495.26,11.3V1h231.75Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
