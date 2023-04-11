import { UserFocus, Cube, Faders, ChartBar, TreeStructure, ArrowsClockwise, BoundingBox, LockKey, Cursor } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { PrinciplesContainer, PrinciplesContent, PrinciplesTitle } from './styles'

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export function Principles() {
    const { themeValue, languageSelect } =
        useContext(AppContext)

    return (
        <PrinciplesContainer variant={themeValue}>
            <main >
                {languageSelect === 'pt' ? <>
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
                    </PrinciplesContent> </> :
                    <>
                        <PrinciplesTitle>
                            <h2>Our Principles</h2>
                            <p>Remember that adding value goes beyond styling, our components are optional,<br />
                                use them wisely, and prioritize the principles of a business dashboard.</p>
                            <strong>Here are some principles that at OpenXBI we believe every data professional should follow.</strong>
                        </PrinciplesTitle>
                        <PrinciplesContent variant={themeValue}>
                            <div>
                                <h3>Focus on Objectives <UserFocus size={50} weight="bold" /></h3>
                                <p>The dashboard should be designed based on the company's strategic objectives, with emphasis on what is most important to the organization.
                                </p>
                            </div>
                            <div>
                                <h3>Simplicity <Cube size={40} weight="bold" /> </h3>
                                <p>The dashboard should be easy to use and understand, with a clean and clear interface that does not overload the user with unnecessary information.
                                </p>
                            </div>
                            <div>
                                <h3>Customization <Faders size={40} weight="bold" /></h3>
                                <p>The dashboard should allow customization according to the needs and preferences of each user, with the possibility of selecting and displaying the most important information for each area of operation.</p>
                            </div>
                            <div>
                                <h3>Relevance <ChartBar size={40} weight="bold" /></h3>
                                <p>The dashboard should present relevant and updated information, in real time or close to it, so that users can make informed decisions.
                                </p>
                            </div>
                            <div>
                                <h3>Clear Visualization <Cube size={40} weight="bold" /></h3>
                                <p>The presentation of data should be clear and easy to understand, with intuitive and visually appealing graphs and tables that facilitate data analysis.</p>
                            </div>
                            <div>
                                <h3>Data Access <TreeStructure size={40} weight="bold" /></h3>
                                <p>The dashboard should provide easy and fast access to the underlying data, allowing users to explore the data more deeply and verify the information behind the charts.</p>
                            </div>
                            <div>
                                <h3>Constant Updating <ArrowsClockwise size={40} weight="bold" /></h3>
                                <p>The dashboard should be regularly updated to reflect changes in the company's performance and to ensure that the information presented is accurate and up-to-date.</p>
                            </div>
                            <div>
                                <h3>Usability <Cursor size={40} weight="bold" /></h3>
                                <p>The dashboard should be easy to use, with a user-friendly interface that allows for intuitive and simple data navigation.</p>
                            </div>
                            <div>
                                <h3>Compatibility <BoundingBox size={40} weight="bold" /> </h3>
                                <p>The dashboard should be compatible with various platforms, such as desktops, laptops, tablets, and smartphones, so that users can access it anytime and anywhere.</p>
                            </div>
                            <div>
                                <h3>Security <LockKey size={40} weight="bold" /></h3>
                                <p>The dashboard should be secure and protected, ensuring the privacy and confidentiality of the company's data, as well as having adequate access control for each user.</p>
                            </div>
                        </PrinciplesContent>

                    </>
                }

            </main>

        </PrinciplesContainer>
    )
}