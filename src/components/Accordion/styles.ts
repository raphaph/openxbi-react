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
`

export const ItemBody = styled(AccordionItem) <ThemeProps>`
  width: 100%;
  max-width: 500px;
  transition: 0.3s;
`

export const Trigger = styled(AccordionTrigger) <ThemeProps>`
  font-weight: bold;
  width: 100%;
  text-align: left;
  border: 1px solid
    ${(props) =>
    props.variant === 'light'
      ? props.theme['gray-100']
      : props.theme['gray-900']};
  padding: 0.5rem;
  background:  ${props => props.theme["linear-card-dark"]};;

  border-radius: 5px;
  margin: 0.1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) =>
    props.variant === 'light' ? props.theme.offblack : props.theme.white};

`

export const Content = styled(AccordionContent)`
  margin: 0.5rem;
  overflow: hidden;

  &[data-state='open'] {
    animation: slideDown 500ms ease-in-out;
  }

  &[data-state='closed'] {
    animation: slideUp 500ms ease-in-out;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`

export const TitleAccord = styled.h2`
  margin: 1rem 0;
`
