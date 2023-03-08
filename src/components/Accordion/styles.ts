import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const StyledAccordion = styled(Accordion)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  width: 100%;
  margin: 5rem 0;
`

export const ItemBody = styled(AccordionItem)<ThemeProps>`
  width: 100%;
  max-width: 500px;
`

export const Trigger = styled(AccordionTrigger)<ThemeProps>`
  font-weight: bold;
  width: 100%;
  text-align: left;
  border: 1px solid
    ${(props) =>
      props.variant === 'light'
        ? props.theme['gray-100']
        : props.theme['gray-900']};
  padding: 0.5rem;
  background: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.offblack};
  border-radius: 5px;
  margin: 0.1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) =>
    props.variant === 'light' ? props.theme.offblack : props.theme.white};

  &:focus {
    color: ${(props) => props.theme['blue-emerald']};
  }
`

export const Content = styled(AccordionContent)`
  padding: 1rem;
`

export const TitleAccord = styled.h2`
  margin: 1rem 0;
`
