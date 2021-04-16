export const TOKEN_KEY = "appToken";
export const NOME_USUARIO = "Nome";
export const USERNAME = "UserName";


export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getName = () => localStorage.getItem(NOME_USUARIO);

export const nomeUsuario = data => {
    localStorage.setItem(NOME_USUARIO, data);  
}

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
