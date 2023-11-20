import { Astronauta, Fundo, Icons, Resumo, Sessao1 } from "./styledDirect";
import { Buttons, Present, Question, SmallTitle } from "../home/styledHome";
import { Title } from "../about/styleAbout";
import Purple from "../../components/buttons/purple/principal";
import lost from "../../assets/astronaut_jump.png"
import game from '../../assets/gameboy.svg'
import pesos from '../../assets/gym.svg'
import barraca from '../../assets/camp.svg'


function Orientacao() {
    return(
        <>
           <Fundo>
                <Sessao1>
                    <Present>
                        <Question>Bora planejar sua jornada de descoberta</Question>
                        <SmallTitle>
                            Este site foi criado para que você 
                            possa descobrir novos hobbies para inserir 
                            sua rotina e se encantar por novos universos. 
                        </SmallTitle>
                        <SmallTitle>
                            Para facilitar sua jornada conosco aqui embaixo 
                            tem algumas definições das principais áreas de todos 
                            os hobbies espalhados pelo mundo.
                        </SmallTitle>
                        <Buttons>
                            <Purple CTA={"Descobrir"}/>
                        </Buttons>
                    </Present>
                    <Astronauta src={lost}/>
                </Sessao1>
                <Resumo>
                    <Title>
                        <Icons src={game}/>
                        Estimulos Audiovisuais e Manuais
                    </Title>
                    <p>
                        A integração de estímulos audiovisuais em atividades diárias não apenas proporciona entretenimento, 
                        mas também oferece uma série de benefícios cognitivos e emocionais. Através de conteúdos visuais e sonoros, 
                        as atividades ganham vida, estimulando a mente de maneira única. A absorção de informações torna-se mais eficaz, 
                        favorecendo o processo de aprendizado. Além disso, a presença de elementos visuais e auditivos proporciona uma experiência sensorial rica, 
                        contribuindo para a retenção de informações e o desenvolvimento da criatividade. A utilização desses estímulos também desencadeia respostas emocionais, 
                        promovendo o bem-estar mental. Dessa forma, integrar estímulos audiovisuais em nossa rotina diária não apenas enriquece nossas experiências, 
                        mas também impulsiona o desenvolvimento cognitivo e emocional de forma positiva.
                    </p>
                    <Title>
                        <Icons src={pesos}/>
                        Exercícios Físicos
                    </Title>
                    <p>
                        A prática regular de atividades físicas é essencial para a promoção da saúde e do bem-estar. 
                        Além de contribuir para a manutenção de um peso saudável, 
                        o exercício fortalece os músculos, melhora a circulação sanguínea e promove a flexibilidade. 
                        A liberação de endorfinas durante a atividade física não apenas eleva o humor, combatendo o estresse e a ansiedade, 
                        mas também aprimora a qualidade do sono. A longo prazo, o exercício regular reduz o risco de doenças cardíacas, 
                        diabetes e melhora a saúde mental. Engajar-se em atividades físicas não só proporciona benefícios físicos tangíveis, 
                        mas também é uma peça fundamental para uma vida equilibrada e saudável.
                    </p>
                    <Title>
                        <Icons src={barraca}/>                       
                        Atividades Externas
                    </Title>
                    <p>
                        Imersão na natureza, como no contexto de acampamentos, oferece benefícios inigualáveis para o corpo e a mente. 
                        A exposição ao ar fresco e à luz natural não apenas fortalece o sistema imunológico, mas também revitaliza o espírito. 
                        O acampamento, por exemplo proporciona uma pausa revigorante do ritmo acelerado da vida urbana, reduzindo o estresse e melhorando a saúde mental. 
                        Além disso, atividades ao ar livre, como caminhadas e escaladas, oferecem exercícios físicos desafiadores, promovendo a aptidão e o equilíbrio.
                        A conexão com a natureza também estimula a criatividade e a reflexão, fornecendo uma oportunidade valiosa para rejuvenescer e encontrar equilíbrio 
                        em meio à beleza natural que essa divisão podem nos oferecer.
                    </p>
                </Resumo>
           </Fundo>
        </>
    )
}

export default Orientacao; 