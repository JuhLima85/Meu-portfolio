import React from "react";
import der from "../../public/images/der.png";

  const SectionContent = ({ title, children }) => {
    const words = title.split(" ");
    const lastWord = words.pop();
    const titleWithGreen = words.join(" ") + " " + `<span class="custom-text-green">${lastWord}</span>`;

    return (
      <div className="text-center mt-8">
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: titleWithGreen }} />
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InfoProjeto1 = () => {
    return (
      <div>
        <section id="regras" className="text-white">
          <SectionContent title="Regras de Negócio e Validações">
            <div className="text-justify leading-7 w-11/12 mx-auto"><br />
              <p className="custom-text-green">Cadastro de Pessoa:</p>
              <ul>
                <li>A aplicação permite cadastrar pessoas com informações como
                  nome, data de nascimento, CPF e se são funcionárias ou não.</li>
                <li><span className="text-gray-400">CPF:</span> O sistema verifica se o CPF informado é válido,
                  utilizando a biblioteca "CPFValidator" e verifica também se não
                  existe outro registro com o mesmo CPF na base de dados antes de
                  salvar uma pessoa.</li>
                <li><span className="text-gray-400">Data de Nascimento:</span> O sistema não permite o cadastro de uma
                  pessoa com data de nascimento futura em relação à data atual. Caso
                  seja, a pessoa não é salva, e uma mensagem de erro é retornada ao
                  usuário.</li>
              </ul><br />
              <p className="custom-text-green">Cadastro de Projeto:</p>
              <ul>
                <li><span className="text-gray-400">Ao cadastrar um projeto:</span> O sistema determina automaticamente
                  a classificação de risco do projeto com base no status e nas datas.
                  Além disso, ao longo do tempo, a classificação de risco é
                  continuamente atualizada.</li>
                <li><span className="text-gray-400">Data de Previsão de Término:</span> Ao cadastrar ou atualizar um
                  projeto, o sistema verifica se a data de previsão de término não é
                  anterior à data de início do projeto.</li>
                <li><span className="text-gray-400">Data de Término:</span> Caso seja informada uma data de término
                  para o projeto, o sistema verifica se essa data está no futuro em
                  relação à data atual.</li>
                <li><span className="text-gray-400">Gerente Responsável:</span> Ao cadastrar um projeto, é necessário
                  selecionar um gerente responsável entre as pessoas cadastradas, caso
                  não tenha gerentes disponíveis, o usuário é orientado a cadastrar
                  primeiro um funcionário e só depois cadastrar o projeto.</li>
              </ul><br />
              <p className="custom-text-green">Atualização de Pessoa:</p>
              <p>O sistema permite que você atualize informações sobre uma
                pessoa, como nome, data de nascimento, CPF e se ela é funcionária. No
                entanto, existe uma restrição específica: se essa pessoa for um
                gerente responsável por algum projeto, não será permitido alterar a
                informação de "funcionário". Isso ocorre porque, se a pessoa deixar
                de ser funcionária, ela também deixará de ser gerente
                automaticamente. Portanto, em tal situação, o usuário do sistema será
                orientado a primeiro remover a pessoa da função de gerente do projeto
                e só então atualizar seu status para "não funcionário".</p><br />
              <p className="custom-text-green">Atualização de Projeto:</p>
              <ul>
                <li>É possível atualizar as informações de um projeto, como
                  nome, datas, descrição, status, orçamento e o gerente responsável.
                  Salvo se o projeto já estiver com status concluído, neste caso, o
                  sistema não permitirá a atualização.</li>
                <li>Todas as validações aplicadas no cadastro do projeto também
                  são aplicadas na atualização do mesmo.</li>
              </ul><br />
              <p className="custom-text-green">Listagem de Pessoas:</p>
              <p>O sistema disponibiliza uma lista com todas as pessoas
                cadastradas.</p><br />
              <p className="custom-text-green">Listagem de Projetos:</p>
              <p>O sistema mostra uma lista com todos os projetos cadastrados,
                apresentando a classificação de risco de cada projeto.</p><br />
              <p className="custom-text-green">Remoção de Pessoas:</p>
              <p>O serviço PessoaService possui o método removerPessoa que
                permite excluir uma pessoa da base de dados. Caso a pessoa seja
                gerente responsável por algum projeto, a remoção não é permitida, e
                uma mensagem de orientação é exibida ao usuário.</p><br />
              <p className="custom-text-green">Remoção de Projetos:</p>
              <p>O sistema permite a remoção de projetos quando necessário. No
                entanto, há uma restrição que impede a exclusão de projetos que
                estejam com os status de 'Iniciado', 'Em andamento' ou 'Encerrado'.
                Essa medida visa garantir a integridade dos dados e evitar a remoção
                acidental de informações relevantes. Projetos nessas etapas possuem
                histórico e informações relevantes que podem ser cruciais para a
                análise de desempenho ou outras finalidades de relatórios.</p>
            </div>
          </SectionContent>
        </section>

        <section id="testes" className="text-white">
          <SectionContent title="Testes Unitários">
            <div className="text-justify leading-7 w-11/12 mx-auto"><br />
              <p>Foram realizados testes unitários no projeto, focados em
                diferentes aspectos do sistema. Os testes são implementados usando a
                biblioteca MOCKITO para simular o comportamento do repositório e
                garantir que as funcionalidades do serviço são corretamente testadas,
                independentemente do repositório real.</p>

              <p>Esses testes atingem diferentes camadas do sistema, como a
                camada de serviço, onde a lógica de negócios é testada isoladamente.
                O Mockito é usado para simular o repositório e garantir que os testes
                não dependam do banco de dados real. Isso torna os testes mais
                rápidos e mais isolados, o que é uma prática recomendada para testes
                unitários.</p>

              <p>Em resumo, os testes abordam cenários comuns e possíveis
                problemas que podem surgir durante a execução do sistema, ajudando a
                garantir que o código funcione conforme o esperado e que as mudanças
                futuras não introduzam regressões. Isso ajuda a garantir a qualidade
                do projeto e torna-o mais confiável para uso em produção.</p>
            </div>
          </SectionContent>
        </section>
        <div className="flex flex-col items-center">
          <section id="der" className="text-white">
            <SectionContent title="DER">
              <p className="text-gray-400 my-3 text-lg">Diagrama de Entidade-Relacionamento</p>
              <div className="h-full relative flex justify-center items-center">
                <img
                  src={der}
                  alt="DER"
                  className="max-w-3xl max-h-3xl w-full object-cover bg-cyan-600 rounded-xl"
                />
              </div>
            </SectionContent>
          </section>
          <div className="py-6">
            <a href="https://codedeving.com.br/portfolio/pessoas/novo" target="_blank" rel="noopener noreferrer">
              <button className="custom-download-button text-lg">Acessar Aplicação</button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default InfoProjeto1;