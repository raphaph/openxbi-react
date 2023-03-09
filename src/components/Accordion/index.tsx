import { Code, Gauge, Graph } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import {
  Content,
  ItemBody,
  StyledAccordion,
  TitleAccord,
  Trigger,
} from './styles'

export function MyAccordion() {
  const { themeValue } = useContext(AppContext)

  return (
    <>
      <StyledAccordion type="multiple">
        <TitleAccord>Vantagens</TitleAccord>
        <ItemBody value="1" variant={themeValue}>
          <Trigger variant={themeValue}>
            Performance <Gauge size={18} weight="fill" />{' '}
          </Trigger>
          <Content>
            O uso de componentes estilizados em html e css, possuem um impacto
            mínimo ou dependendo do componente, uma performance melhor do que
            componentes nativos do PowerBI.
            <br />
            <br />
            Podendo agregar ainda mais na eficiência do seu Dashboard e no seu
            tempo de carregamento.
          </Content>
        </ItemBody>
        <ItemBody value="2" variant={themeValue}>
          <Trigger variant={themeValue}>
            Easy-to-use <Code size={18} weight="fill" />{' '}
          </Trigger>
          <Content>
            Components estão prontos para uso, copie o código e incorpore com
            medidas e variáveis DAX.
            <br />
            <br />
            Trabalhamos para que os códigos sejam o mais otimizado possivel,
            além de inserir comentários para que usuários com pouca experiência
            possam adaptar facilmente em seus projetos.
          </Content>
        </ItemBody>
        <ItemBody value="3" variant={themeValue}>
          <Trigger variant={themeValue}>
            Use DAX <Graph size={18} weight="fill" />
          </Trigger>
          <Content>
            A possibilidade de reaproveitar as medidas e variáveis DAX dentro de
            componentes estilizados, é nossa grande vantagem e principal
            influência na criação do <strong>OpenXBI</strong>.
          </Content>
        </ItemBody>
      </StyledAccordion>
    </>
  )
}
