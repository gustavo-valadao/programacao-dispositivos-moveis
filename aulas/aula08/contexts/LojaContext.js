import { createContext, useState } from "react";

// SIMULAÇÃO DE UM BANCO DE DADOS

const categoriasDB = [
    {id: 1,     nome: "Restaurantes",   icone: "food"},
    {id: 2,     nome: "Bares",          icone: "beer"},
    {id: 3,     nome: "Lanchonetes",    icone: "hamburger"},
    {id: 4,     nome: "Pizzarias",      icone: "pizza"},
    {id: 5,     nome: "Sorveterias",    icone: "ice-cream"},
    {id: 6,     nome: "Cafeterias",     icone: "coffee"},
    {id: 7,     nome: "Padarias",       icone: "bread-slice"},
    {id: 8,     nome: "Mercados",       icone: "shopping"}
];

const lojasDB = [
    {id: 1,     nome: "Restaurante Asa Sul",    nota: "4,6"},
    {id: 2,     nome: "Restaurante Asa Norte",  nota: "4,5"},
    {id: 3,     nome: "Restaurante Tagua",      nota: "4,2"},
    {id: 4,     nome: "Bar Ceilandia",          nota: "4,9"},
    {id: 5,     nome: "Bar Sudoeste",           nota: "4,3"},
    {id: 6,     nome: "Lanchonete Gama",        nota: "4,5"},
    {id: 7,     nome: "Pizzaria Nucleo",        nota: "3,7"},
    {id: 8,     nome: "Restaurante Asa Norte",  nota: "4,1"},
    {id: 9,     nome: "Restaurante Tagua",      nota: "4,2"},
    {id: 10,    nome: "Bar Ceilandia",          nota: "4,4"},
    {id: 11,    nome: "Bar Sudoeste",           nota: "4,7"},
    {id: 12,    nome: "Lanchonete Gama",        nota: "5,0"},
    {id: 13,    nome: "Pizzaria Nucleo",        nota: "4,4"},
    {id: 14,    nome: "Restaurante Asa Norte",  nota: "4,3"},
    {id: 15,    nome: "Restaurante Tagua",      nota: "4,4"},
    {id: 16,    nome: "Bar Ceilandia",          nota: "4,6"},
    {id: 17,    nome: "Bar Sudoeste",           nota: "3,7"},
    {id: 18,    nome: "Lanchonete Gama",        nota: "4,3"},
    {id: 19,    nome: "Pizzaria Nucleo",        nota: "4,1"},
];



const LojaContext = createContext();

function LojaProvider  ( {children}) {

    const [ categorias, setCategorias ] = useState([])
    const [ lojas, setLojas ] = useState ([])

    const [ carregando, setCarregando ] = useState(true)    // Estado para exibir "carregando" enquanto não carrega lojas e categorias


    const carregarDados = () => {                           // Simulação de um delay para carregar os dados do banco
        setTimeout(() => {
            setCarregando(false);
            setLojas(lojasDB);
            setCategorias(categoriasDB);
        }, 4000)              
    }

    const buscarLojas = (filtro) => {
        setCarregando(true);
        setTimeout(() => {

            const lojasEncontradas = lojasDB.filter(
                (loja) => loja.nome.toLowerCase().includes(filtro.toLowerCase())        // Lógica do filtro de pesquisa
            )
            
            setLojas(lojasEncontradas);
            setCarregando(false);

        }, 2000)
    }

    return (
        <LojaContext.Provider value={{lojas, categorias, carregando, carregarDados, buscarLojas}}>
            {children}
        </LojaContext.Provider>
    )
}

export { LojaContext, LojaProvider}


