import { UserFocus, Cube, Faders, ChartBar, TreeStructure, ArrowsClockwise, BoundingBox, LockKey, Cursor } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { PrinciplesContainer, PrinciplesContent, PrinciplesTitle } from './styles'

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export function Principles() {
    const { themeValue } =
        useContext(AppContext)

    return (
        <PrinciplesContainer variant={themeValue}>
            <main >
                <PrinciplesTitle>
                    <h2>Princípios</h2>
                    <p>Lembre-se que, agregar valor vai muito além da estilização, nossos componentes são opcionais,<br />
                        utilize com sabedoria, e preze pelos princípios de um dashboard de negócios. </p>
                    <strong>Aqui estão alguns dos principios que na OpenXBI acreditamos que todo profissional de dados deve seguir.</strong>
                </PrinciplesTitle>
                <PrinciplesContent variant={themeValue}>
                    <div>
                        <h3>Foco nos Objetivos <UserFocus size={50} weight="bold" /></h3>
                        <p>O dashboard deve ser projetado com base nos objetivos estratégicos da empresa, com ênfase naquilo que é mais importante para a organização.
                        </p>
                    </div>
                    <div>
                        <h3>Simplicidade <Cube size={40} weight="bold" /> </h3>
                        <p>O dashboard deve ser fácil de usar e entender, com uma interface limpa e clara que não sobrecarregue o usuário com informações desnecessárias.
                        </p>
                    </div>
                    <div>
                        <h3>Personalização <Faders size={40} weight="bold" /></h3>
                        <p>O dashboard deve permitir a personalização de acordo com as necessidades e preferências de cada usuário, com a possibilidade de selecionar e exibir as informações mais importantes para cada área de atuação.</p>
                    </div>
                    <div>
                        <h3>Relevância <ChartBar size={40} weight="bold" /></h3>
                        <p>O dashboard deve apresentar informações relevantes e atualizadas, em tempo real ou próximo disso, para que os usuários possam tomar decisões informadas.
                        </p>
                    </div>
                    <div>
                        <h3>Visualização Clara <Cube size={40} weight="bold" /></h3>
                        <p>A apresentação dos dados deve ser clara e fácil de entender, com gráficos e tabelas intuitivas e visualmente atraentes, que facilitem a análise dos dados.</p>
                    </div>
                    <div>
                        <h3>Acesso aos Dados <TreeStructure size={40} weight="bold" /></h3>
                        <p>O dashboard deve fornecer acesso fácil e rápido aos dados subjacentes, permitindo que os usuários explorem mais profundamente os dados e verifiquem as informações por trás dos gráficos.</p>
                    </div>
                    <div>
                        <h3>Atualização constante <ArrowsClockwise size={40} weight="bold" /></h3>
                        <p>O dashboard deve ser atualizado regularmente para refletir as mudanças no desempenho da empresa e para garantir que as informações apresentadas sejam precisas e atualizadas.</p>
                    </div>
                    <div>
                        <h3>Usabilidade <Cursor size={40} weight="bold" /></h3>
                        <p>O dashboard deve ser fácil de usar, com uma interface amigável que permita navegar pelos dados de forma intuitiva e simples.</p>
                    </div>
                    <div>
                        <h3>Compatibilidade <BoundingBox size={40} weight="bold" /> </h3>
                        <p>O dashboard deve ser compatível com várias plataformas, como desktops, laptops, tablets e smartphones, para que os usuários possam acessá-lo a qualquer momento e em qualquer lugar.</p>
                    </div>
                    <div>
                        <h3>Segurança <LockKey size={40} weight="bold" /></h3>
                        <p>O dashboard deve ser seguro e protegido, garantindo a privacidade e a confidencialidade dos dados da empresa, além de ter controle de acesso adequado para cada usuário.</p>
                    </div>
                </PrinciplesContent>

            </main>

        </PrinciplesContainer>
    )
}