import styles from './Company.module.css';
function Company() {
  return (
    <div>
      <h1>Bem-vindo ao Costs!</h1>
      <h2>Meu primeiro projeto React</h2>
      <p>
        Este projeto foi possível graças ao curso de React do Matheus Battisti
        do canal Hora de Codar. O projeto tem como objetivo proporcionar uma
        introdução aprofundada à biblioteca React, abordando diversos tópicos,
        como:
      </p>
      <ul>
        <li>
          <strong>React</strong>:
          <ul>
            <li>
              <strong>useState</strong>: Hook usado para adicionar estado a
              componentes funcionais. Por exemplo:
              <pre>
                <code>{`const [count, setCount] = useState(0);`}</code>
              </pre>
              Isso cria uma variável de estado chamada `count` e uma função para
              atualizá-la chamada `setCount`.
            </li>
            <li>
              <strong>useEffect</strong>: Hook usado para lidar com efeitos
              colaterais em componentes funcionais, como chamadas de API,
              assinaturas, e manipulação direta do DOM. Ele recebe uma função de
              efeito e uma lista de dependências. Por exemplo:
              <pre>
                <code>
                  {`useEffect(() => {doument.title = \`Você clicou \${count} vezes\`;}, [count]);`}
                </code>
              </pre>
              Isso atualizará o título do documento sempre que `count` mudar.
            </li>
            <li>
              <strong>useRef</strong>: Hook usado para acessar diretamente um
              elemento DOM ou manter uma referência mutável que não cause uma
              nova renderização. Por exemplo:
              <pre>
                <code>{`const inputRef = useRef(null);`}</code>
              </pre>
              Isso cria uma referência que pode ser atribuída a um elemento:
              <pre>
                <code>{`<input ref={inputRef} />`}</code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          <strong>React Router</strong>:
          <ul>
            <li>
              <strong>useNavigate</strong>: Hook usado para programaticamente
              navegar entre rotas. Por exemplo:
              <pre>
                <code>
                  {`const navigate = useNavigate();
navigate('/home');`}
                </code>
              </pre>
            </li>
            <li>
              <strong>useParams</strong>: Hook usado para acessar os parâmetros
              da rota atual. Por exemplo:
              <pre>
                <code>{`const { id } = useParams();`}</code>
              </pre>
            </li>
            <li>
              <strong>useLocation</strong>: Hook usado para acessar o objeto de
              localização atual, que contém informações sobre a URL atual. Por
              exemplo:
              <pre>
                <code>{`const location = useLocation();`}</code>
              </pre>
            </li>
            <li>
              <strong>Link</strong>: Componente usado para criar links de
              navegação entre rotas. Por exemplo:
              <pre>
                <code>{`<Link to="/about">Sobre</Link>`}</code>
              </pre>
            </li>
            <li>
              <strong>BrowserRouter as Router</strong>: Componente de alto nível
              que envolve a aplicação e habilita o roteamento baseado em
              browser. Por exemplo:
              <pre>
                <code>{`<Router>
  <App />
</Router>`}</code>
              </pre>
            </li>
            <li>
              <strong>Route</strong>: Componente usado para definir uma rota e
              associar um componente a essa rota. Por exemplo:
              <pre>
                <code>{`<Route path="/home" element={<Home />} />`}</code>
              </pre>
            </li>
            <li>
              <strong>Routes</strong>: Componente que engloba todas as rotas
              definidas com {`<Route>`}. Por exemplo:
              <pre>
                <code>
                  {`<Routes>
                  {'<Route path="/home" element={<Home />} />'}
                  {'<Route path="/about" element={<About />} />'}
</Routes>`}
                </code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          <strong>UUID</strong>:
          <ul>
            <li>
              <strong>parse</strong>: Função usada para converter uma string
              UUID em um array de bytes.
            </li>
            <li>
              <strong>v4</strong>: Função usada para gerar um UUID v4, que é um
              identificador único. Por exemplo:
              <pre>
                <code>{`import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();`}</code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          <strong>React Icons</strong>:
          <ul>
            <li>
              <strong>FaLinkedin</strong> e <strong>FaGithub</strong>: Ícones
              usados para representar as redes sociais LinkedIn e GitHub,
              respectivamente. Eles são importados da biblioteca `react-icons`.
              Por exemplo:
              <pre>
                <code>{`import { FaLinkedin, FaGithub } from 'react-icons/fa';`}</code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          <strong>JSON-SERVER</strong>:
          <p>
            JSON-SERVER é uma ferramenta usada para criar um servidor RESTful
            simples a partir de um arquivo JSON. Ele é utilizado para simular
            uma API, permitindo a criação, edição e exclusão de projetos com os
            métodos GET, PATCH e DELETE. Por exemplo:
            <pre>
              <code>{`fetch('http://localhost:3000/projects', { method: 'GET' });`}</code>
            </pre>
            Busca todos os projetos. A função <code>fetch()</code> retorna uma
            Promise, que pode ser manipulada com <code>then()</code> e{' '}
            <code>catch()</code> para processar a resposta e lidar com erros.
            Fundamental para integrar o front-end com APIs RESTful.
          </p>
        </li>
        <li>
          <strong>Firebase</strong>:
          <p>
            O Firebase é uma plataforma de desenvolvimento de aplicativos móveis
            e web. Ele oferece diversos serviços, como autenticação, banco de
            dados em tempo real, armazenamento e hospedagem. Para tornar o
            projeto funcional na web, foi necessário aprender conceitos sobre
            Firebase e usar várias funções do Firebase:
            <ul>
              <li>
                <strong>ref</strong>: A função <code>ref</code> cria uma
                referência para um local específico no banco de dados Firebase.
                Por exemplo:
                <pre>
                  <code>{`const dbRef = ref(getDatabase(), 'projects');`}</code>
                </pre>
                Cria uma referência ao nó 'projects' no banco de dados.
              </li>
              <li>
                <strong>get</strong>: A função <code>get</code> é usada para
                buscar dados de uma referência específica no Firebase. Por
                exemplo:
                <pre>
                  <code>{`get(dbRef).then((snapshot) => { const data = snapshot.val(); });`}</code>
                </pre>
                Busca os dados no nó 'projects' e os armazena em 'data'.
              </li>
              <li>
                <strong>remove</strong>: A função <code>remove</code> é usada
                para excluir dados de uma referência específica no Firebase. Por
                exemplo:
                <pre>
                  <code>{`remove(ref(getDatabase(), 'projects/' + projectId));`}</code>
                </pre>
                Exclui o projeto com o identificador 'projectId'.
              </li>
              <li>
                <strong>update</strong>: A função <code>update</code> é usada
                para atualizar dados em uma referência específica no Firebase.
                Por exemplo:
                <pre>
                  <code>{`update(ref(getDatabase(), 'projects/' + projectId), { name: newName });`}</code>
                </pre>
                Atualiza o nome do projeto com 'projectId'.
              </li>
              <li>
                <strong>push</strong>: A função <code>push</code> é usada para
                adicionar novos dados a uma referência no Firebase. Por exemplo:
                <pre>
                  <code>{`const newProjectRef = push(ref(getDatabase(), 'projects'));`}</code>
                </pre>
                Adiciona um novo projeto ao nó 'projects' e retorna uma
                referência a ele.
              </li>
            </ul>
            O Firebase oferece uma solução de backend como serviço (BaaS),
            simplificando o desenvolvimento de aplicações web e móveis,
            especialmente no que diz respeito à configuração de infraestrutura e
            gerenciamento de dados em tempo real.
          </p>
        </li>
        <li>
          <strong>Componentização</strong>:
          <p>
            Em React, a componentização é a prática de dividir a interface do
            usuário em componentes reutilizáveis e independentes. Cada
            componente pode possuir seu próprio estado e lógica, permitindo um
            desenvolvimento mais modular e manutenção simplificada. Por exemplo,
            um componente de botão pode ser usado em várias partes da aplicação
            sem duplicação de código.
          </p>
        </li>
        <li>
          <strong>Estilos Dinâmicos</strong>:
          <p>
            Estilos dinâmicos permitem a modificação de estilos CSS com base no
            estado do componente ou nas propriedades recebidas. Isso pode ser
            feito usando classes condicionais ou diretamente através de objetos
            de estilo em JSX. Por exemplo:
            <pre>
              <code>{`const buttonStyle = { backgroundColor: isActive ? 'green' : 'red' };`}</code>
            </pre>
            Usa uma condição para definir a cor de fundo de um botão com base no
            estado `isActive`.
          </p>
        </li>
        <li>
          <strong>Tratamento de Formulários</strong>:
          <p>
            O tratamento de formulários em React envolve a captura e manipulação
            de entradas do usuário, validação de dados e submissão. Com o uso de
            hooks como `useState`, é possível gerenciar o estado dos campos do
            formulário e validar os dados antes do envio. Por exemplo:
            <pre>
              <code>{`const [formData, setFormData] = useState({ name: '', email: '' });

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
};`}</code>
            </pre>
            Isso captura as mudanças nos campos do formulário e as armazena no
            estado, e lida com a submissão do formulário.
          </p>
        </li>
        <li>
          <strong>Desenvolvimento de Funções</strong>:
          <p>
            Em React, as funções são usadas para definir a lógica de negócios e
            manipulação de dados dentro dos componentes. Funções como
            manipuladores de eventos, funções de transformação de dados e hooks
            personalizados permitem encapsular e reutilizar lógica complexa. Por
            exemplo:
            <pre>
              <code>{`const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};`}</code>
            </pre>
            Essa função calcula o total dos preços dos itens em um carrinho de
            compras.
          </p>
        </li>
        <li>
          <strong>Layouts</strong>:
          <p>
            A criação de layouts em React envolve a organização e disposição dos
            componentes na interface do usuário. Com a ajuda de CSS e frameworks
            como Flexbox ou Grid, é possível criar layouts responsivos e
            acessíveis. Componentes de layout podem ser usados para definir a
            estrutura principal da aplicação, como cabeçalhos, rodapés e áreas
            de conteúdo.
          </p>
        </li>
        <li>
          <strong>Props</strong>:
          <p>
            `Props` (abreviação de propriedades) são parâmetros passados para
            componentes React que permitem a comunicação de dados entre
            componentes. As props são imutáveis dentro do componente filho e são
            usadas para personalizar e configurar os componentes. Por exemplo:
            <pre>
              <code>{`const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};`}</code>
            </pre>
            Aqui, o componente `Welcome` recebe uma prop `name` e a usa para
            exibir uma mensagem de saudação.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Company;
