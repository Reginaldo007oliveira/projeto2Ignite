import { HeaderContainer } from './styles'
import { Scroll, Timer, Cube, BatteryFull, Brain } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Sphera from './Sphera'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <Sphera />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/agoravai" title="Foi">
          <Brain color="#AE2983" weight="fill" size={32} />
        </NavLink>
        <BatteryFull color="#DF1" weight="fill" size={32} />

        <Cube color="#DF3456" weight="fill" size={32} />
      </nav>
    </HeaderContainer>
  )
}
