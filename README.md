# Testes Automatizados da API IBGE

## 📌 Objetivo

Este projeto tem como objetivo criar **testes automatizados** utilizando **Jest** e **Supertest** para validar os endpoints da **API de Localidades do IBGE**, garantindo a integridade de dados sobre estados e regiões do Brasil.



## 🗂 Estrutura de Pastas

```
Api-Test-IBGE/
│
├── node_modules/          # Dependências do projeto
├── tests/                 # Contém todos os testes automatizados
│   ├── states.test.js     # Testes dos estados do Brasil
│   ├── regions.test.js    # Testes das regiões do Brasil
├── jest.config.js         # Configuração do Jest
├── package.json           # Scripts e dependências
├── package-lock.json      # Gerenciamento de versões
└── README.md              # Documentação do projeto
```



## 🔧 Ferramentas Usadas

| Ferramenta       | Descrição                                   |
| ---------------- | ------------------------------------------- |
| **Jest**         | Framework de testes em JavaScript.          |
| **Supertest**    | Biblioteca para testar APIs HTTP.           |
| **Node.js**      | Ambiente de execução JavaScript.            |
| **Git & GitHub** | Controle de versão e hospedagem do projeto. |



## Suíte de Testes – API IBGE

### 📌 Testes – Regiões do Brasil

| ID     | Título do Teste                           | Descrição                                                                                      | Resultado Esperado                                                                           |
| ------ | ----------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| CT-001 | Retornar todas as 5 regiões               | Validar que a API retorna corretamente **todas as regiões do Brasil**.                         | Status **200** e o corpo da resposta deve conter exatamente **5 regiões**.                   |
| CT-002 | Conferir dados da região Centro-Oeste     | Validar que a lista de regiões contém o **nome** `Centro-Oeste` e a **sigla** `CO`.            | Status **200** e o corpo da resposta deve incluir: `{"nome": "Centro-Oeste", "sigla": "CO"}` |
| CT-003 | Retornar estados da região Norte          | Validar que, ao consultar a **região de ID `1`**, a API retorna corretamente os **7 estados**. | Status **200** e o corpo da resposta deve conter exatamente **7 estados**.                   |
| CT-004 | Conferir que Alagoas pertence ao Nordeste | Verificar que, ao consultar a **região Nordeste (ID `2`)**, consta o **estado de Alagoas**.    | Status **200** e o corpo da resposta deve incluir: `{"nome": "Alagoas"}`                     |

### 📌 Testes – Estados do Brasil

| ID     | Título do Teste                     | Descrição                                                                                  | Resultado Esperado                                                            |
| ------ | ----------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| CT-001 | Retornar todos os 27 estados        | Validar que a API retorna corretamente **todos os estados do Brasil**.                     | Status **200** e o corpo da resposta deve conter exatamente **27 estados**.   |
| CT-002 | Retornar estado do Ceará por ID     | Verificar se, ao consultar pelo **ID `23`**, a API retorna corretamente o estado do Ceará. | Status **200** e o corpo da resposta deve conter: `{"nome": "Ceará"}`         |
| CT-003 | Verificar região do estado do Ceará | Validar que o estado do Ceará (ID `23`) pertence à **região Nordeste**.                    | Status **200** e o corpo da resposta deve incluir: `regiao.nome = "Nordeste"` |



## 🚀 Como Executar os Testes

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/RomuloSergioRE/Api-Test-IBGE.git
cd Api-Test-IBGE
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Executar os testes com Jest

* Rodar todos os testes:

```bash
npm test
```


### 4️⃣ Observações

* Os testes utilizam **Jest + Supertest** para enviar requisições à **API de Localidades do IBGE**.
* Validam **estados e regiões do Brasil**, conferindo IDs, nomes, siglas e relações entre estados e regiões.
* Status esperado das requisições: **200 OK**, com os dados conforme definido nos casos de teste.

