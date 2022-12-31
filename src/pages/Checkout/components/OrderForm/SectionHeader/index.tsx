import { IconProps } from 'phosphor-react'
import { ReactElement } from 'react'
import { SectionHeaderContainer } from './styles'

interface SectionHeaderProps {
  icon: ReactElement<IconProps>
  title: string
  subtitle: string
}

export function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <SectionHeaderContainer>
      {icon}
      <p>{title}</p>
      <p>{subtitle}</p>
    </SectionHeaderContainer>
  )
}
