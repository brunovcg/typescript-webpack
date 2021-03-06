import './styles.css'
import IMAGE from './react.png'
import GOOGLE from './google.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const a = 33

  return (
    <>
      <img src={IMAGE} alt="react-logo" />
      <img src={GOOGLE} alt="google-logo" />
      <div>React Typescript Webpack Starter</div>
      <div>
        Modo: {process.env.NODE_ENV} Variavel: {process.env.name}
        {a}
      </div>
      <ClickCounter />
    </>
  )
}
