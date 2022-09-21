const data = [
    {
      question: "Como administrador, você precisa recuperar o endereço ip de uma VM específica usando o Bash. Qual das ferramentas a seguir você deveria usar?",
      options: [
        "Modelos de ARM",
        "O portal do Azure",
        "Azure PowerShell",
        "A CLI do Azure"],
      answer: "A CLI do Azure",
    },
    {
      question: "Qual objeto do Azure contém múltiplos datacenters que são conectados por uma rede de baixa latência?",
      options: [
        "Uma Geografia",
        "Uma Região",
        "Um Conjunto de disponibilidade",
        "Um Par"],
      answer: "Uma Região",
    },
    {
      question: "Os Conjuntos de disponibilidade são compostos por quais dos itens a seguir?",
      options: [
        "Domínios de atualização",
        "Pares de regiões", 
        "Uma Geografia"],
      answer: "Domínios de atualização",
    },
    {
      question: "Qual recurso de computação do azure pode ser implantado para gerenciar um conjunto de máquinas virtuais idênticas?",
      options: [
        "Conjuntos de escala de máquina virtual",
        "Conjunto de disponibilidade da máquina virtual",
        "Zonas de disponibilidade da máquina virtual",
        "Região de disponibilidade"],
      answer: "Conjuntos de escala de máquina virtual",
    },
    {
      question:
        "Qual dos seguintes serviços devem ser usados quando a principal preocupação é executar o trabalho em resposta a um evento (geralmente por meio de um comando REST) que precisa de uma resposta em alguns segundos?",
      options: [
        "Azure Functions",
        "Serviço de aplicativo do Azure",
        "Instâncias de Contêiner do Azure",
        "Área de Trabalho virtual do Azure"],
      answer: "Azure Functions",
    },
    {
      question: "Qual das opções a seguir não é uma categoria de computação em nuvem?",
      options: [
        "PaaS",
        "NaaS",
        "SaaS",
        "IaaS"],
      answer: "NaaS",
    },
    {
      question: "Quais das opções a seguir você pode usar para vincular redes virtuais?",
      options: [
        "Conversão de endereços de rede",
        "agregação de link de vários chassis",
        "Protocolo DHCP",
        "Emparelhamento de rede virtual"],
      answer: "Emparelhamento de rede virtual",
    },
    {
      question: "Qual das opções a seguir não é um benefício do expressRoute?",
      options: [
        "conectividade redundante",
        "Taxa de transferência de rede consistente",
        "Comunicação de rede criptografada",
        "Acesso aos serviços em nuvem da Microsoft"],
      answer: "Comunicação de rede criptografada",
    },
    {
      question: "Qual é a primeira etapa que você seguiria para compartilhar um arquivo de imagem como um blob no Armazenamento do Azure?",
      options: [
        "Criar um contêiner do Armazenamento do Azure para armazenar a imagem",
        "Criar uma conta do Armazenamento do Azure",
        "Carregue o arquivo de imagem e crie um contêiner",
        "Use um token SAS para restringir o acesso à imagem"],
      answer: "Criar uma conta do Armazenamento do Azure",
    },
    {
      question: "Sua equipe de desenvolvimento está interessada em escrever aplicativos baseados em Graph que aproveitem a API do Gremlin. Qual opção seria ideal para esse cenário?",
      options: [
        "Azure Cosmos DB",
        "Banco de Dados SQL do Azure",
        "Azure Databricks",
        "Banco de dados do Azure para PostgreSQL"],
      answer: "Azure Cosmos DB",
    },
    {
      question: "Quais dos serviços do azure a seguir possuem modelos pré-treinados disponíveis para enviar dados para previsões?",
      options: [
        "Serviços Cognitivos do Azure",
        "Assistente do Azure",
        "Azure Machine Learning",
        "Hub IoT do Azure"],
      answer: "Serviços Cognitivos do Azure",
    },
    {
      question: "Como parte do Azure DevOps, qual serviço você usaria na adoção de CI/CD para uma equipe de desenvolvedores?",
      options: [
        "Assistente do Azure",
        "Azure Boards",
        "Azure Test Plants",
        "Azure Pipelines"],
      answer: "Azure Pipelines",
    },
    {
      question: "Você quer orquestrar um fluxo de trabalho usando APIs de vários serviços conhecidos. Qual é a melhor opção para este cenários?",
      options: [
        "Assistente do Azure",
        "Funções do Azure",
        "Aplicativos lógicos do Azure",
        "Azure Pipelines"],
      answer: "Aplicativos lógicos do Azure",
    },
    {
      question: "O que siginifica computação em nuvem?",
      options: [
        "Entrega de serviçps de computação pela internet",
        "Configuração do seu próprio data center",
        "Uso da Internet para meios corporativos",
        "Rede interna"],
      answer: "Entrega de serviçps de computação pela internet",
    },
    {
      question: "Qual da opções a seguir não é um recurso da computação em nuvem?",
      options: [
        "Inovação mais rápida",
        "Um pool limitado de serviços",
        "Reconhecimento de fala e outros serviços cognitivos"],
      answer: "Um pool limitado de serviços",
    },
    {
      question: "Qual da opções a seguir é verdadeira?",
      options: [
        "Com as OpEx, você é responsável por comprar e manter seus recursos de computação",
        "Com as OpEx, você é responsável somente pelos recursos de computação que usa",
        "Com as CapEx, você é responsável somente pelos recursos de computação que usa"],
      answer: "Com as OpEx, você é responsável somente pelos recursos de computação que usa",
    },
    {
      question: "Qual das opções a seguir não é um tipo de computação em nuvem?",
      options: [
        "Nuvem distribuída",
        "Nuvem híbrida",
        "Nuvem privada",
        "Nuvem pública"],
      answer: "Nuvem distribuída",
    },
    {
      question: "Qual das alternativas a seguir pode ser usada para gerenciar a governança entre várias assinaturas do Azure?",
      options: [
        "Iniciativas Azure",
        "Grupos de Gerenciamento",
        "Grupos de recursos"],
      answer: "Grupos de Gerenciamento",
    },
    {
      question: "Qual das opções a seguir não é um benefício de usar serviços de nuvem?",
      options: [
        "Escalabilidade",
        "Recuperação de desastres",
        "Alta disponibilidade",
        "Isolamento geográfico"],
      answer: "Isolamento geográfico",
    },
    {
      question: "Qual das alternativas é uma unidade lõgica dos serviços do Azure vinculadas a uma conta do Azure?",
      options: [
        "Assinatura do Azure",
        "Grupo de gerenciamento",
        "Grupos de recursos",
        "Nuvem pública"],
      answer: "Assinatura do Azure",
    },
    {
      question: "Qual dos recursos a seguir não se aplica aos grupos de recursos?",
      options: [
        "Os recursos podem estar em apenas um grupo de recursos",
        "O controle de acesso baseado em função pode ser aplicado ao grupo de recursos",
        "Os grupos de recursos podem ser aninhados"],
      answer: "Os grupos de recursos podem ser aninhados",
    },
    {
      question: "Qual recurso de Computação do Azure pode ser implantado para gerenciar um conjunto de máquinas virtuais idênticas?",
      options: [
        "Conjuntos de escala de máquina virtual",
        "Conjuntos de disponibilidade de máquina virtual",
        "Zonas de disponibilidade da máquina virtual"],
      answer: "Conjuntos de escala de máquina virtual",
    },
    {
      question: "Quais dos seguintes serviços devem ser usados quando a principal preocupação é executar o trabalho em resposta a um evento que precisa de uma resposta em alguns segundos?",
      options: [
        "Azure Functions",
        "Serviços de aplicativos do Azure",
        "Instâncias de Container do Azure ",
        "Instância pública"],
      answer: "Azure Functions",
    },
    {
      question: "Qual recurso do Azure AD (Azure Active Directory) é usado para fornecer acesso a recursos com base em políticas organizacionais?",
      options: [
        "MFA (autenticação multifator)",
        "SSO (logon único)",
        "unidades administrativas",
        "Acesso condicional"],
      answer: "Acesso condicional",
    },
    {
      question: "O SSO (logon único) é um método de ___________ que permite que os usuários entrem pela primeira vez e acessem vários aplicativos e recursos usando a mesma senha?",
      options: [
        "validação",
        "autenticação",
        "configuração",
        "autorização"],
      answer: "autenticação",
    },
    {
      question: "__________ é um conjunto repetível de ferramentas de governança que ajuda as equipes de desenvolvimento a compilar e criar ambientes rapidamente, aderindo à conformidade organizacional para acelerar o desenvolvimento e a implantação.",
      options: [
        "Azure DevOps",
        "Uma configuração de pipeline de CI/CD (integração contínua/implantação contínua)",
        "Azure Blueprints",
        "Azure Policy"],
      answer: "Azure Blueprints",
    },
    {
      question: "Qual abordagem de nuvem é usada pelas organizações para aproveitar ao máximo os investimentos em tecnologia local e permite que dados e aplicativos sejam compartilhados entre dois ambientes?",
      options: [
        "nuvem pública",
        "nuvem privada",
        "nuvem híbrida",
        "datacenter local"],
      answer: "nuvem híbrida",
    },
    {
      question: "___________ copia dados da região primária para uma região secundária em vários datacenters localizados a muitos quilômetros de distância. abordagem de nuvem é usada pelas organizações para aproveitar ao máximo os investimentos em tecnologia local e permite que dados e aplicativos sejam compartilhados entre dois ambientes?",
      options: [
        "Armazenamento Premium",
        "ZRS (Armazenamento com redundância de zona)",
        "Armazenamento com redundância geográfica (GRS)",
        "Armazenamento com redundância local (LRS)"],
      answer: "Armazenamento com redundância geográfica (GRS)",
    },
    {
      question: "Qual camada de defesa em profundidade usa proteção contra DDoS (negação de serviço distribuído)?",
      options: [
        "Camada de segurança física",
        "Camada de perímetro",
        "Camada de rede",
        "Camada de aplicativo"],
      answer: "Camada de perímetro",
    },
    {
      question: "__________ tem suporte do ExpressRoute para conectar uma rede local ao Azure.",
      options: [
        "Uma VPN ponto a site",
        "Uma conexão Ethernet ponto a ponto",
        "Uma VPN site a site",
        "Serviço de Emparelhamento do Azure"],
      answer: "Uma conexão Ethernet ponto a ponto",
    },
    

  ];
  
  export default data;