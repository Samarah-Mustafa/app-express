/**
 * Interface que representa a estrutura de um item no banco de dados.
 */
export default interface Item {
    id?: number;
    nome: string;
    descricao?: string;
}
