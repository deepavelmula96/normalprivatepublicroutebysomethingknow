const TOKEN_KEY="USER_TOKEN";

export const login=(token)=>{
    localStorage.setItem(TOKEN_KEY,token);
}

export const logout=()=>{
    localStorage.removeItem(TOKEN_KEY);
}

export const isLoggedIn=()=>{
    return localStorage.getItem(TOKEN_KEY);
}
