// src/services/api.js

// Altere para o endereço real do seu backend (Render, etc.)
const API_BASE_URL = 'https://bookish-broccoli-nue4.onrender.com'; 

/**
 * Busca a lista de pacotes/destinos reais da API.
 * Corresponde ao endpoint GET /api/packages
 */
export async function fetchDestinations() {
  try {
    const response = await fetch(`${API_BASE_URL}/packages`);
    
    if (!response.ok) {
      // Lança um erro se a resposta HTTP não for 2xx
      throw new Error(`Erro ao buscar destinos: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data; // Deve retornar o array de pacotes da sua API
    
  } catch (error) {
    console.error("Erro na requisição de destinos:", error);
    return []; 
  }
}

/**
 * Envia o formulário de contato para a API.
 * Corresponde a um endpoint POST (ex: /api/contact) que você DEVE CRIAR no backend.
 */
export async function submitContactFormReal(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      // Se o backend retornar um erro (ex: 400 ou 500)
      throw new Error(result.error || 'Falha ao enviar o formulário');
    }

    return result; // Espera-se { success: true, message: '...' }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    throw error;
  }
}