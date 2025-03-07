// pages/api/github-repos.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Repository = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
};

type ErrorResponse = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Repository[] | ErrorResponse>
) {
    // Verificar se é uma requisição GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    // Obter os parâmetros da query
    const { username, language } = req.query;

    // Verificar se o username foi fornecido
    if (!username || typeof username !== 'string') {
        return res.status(400).json({ error: 'Parâmetro username é obrigatório' });
    }

    try {
        // Fazer a requisição para a API do GitHub
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({
                error: errorData.message || 'Erro ao buscar repositórios do GitHub'
            });
        }

        // Converter a resposta para JSON
        const repos: Repository[] = await response.json();

        // Filtrar por linguagem se fornecida
        const filteredRepos = language && typeof language === 'string'
            ? repos.filter(repo => repo.language?.toLowerCase() === language.toLowerCase())
            : repos;

        // Retornar os repositórios filtrados
        return res.status(200).json(filteredRepos);
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}