export const isEmail = (email)  => {

        const emailRegex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(inmar|domain2)\.com$/i;

        return emailRegex.test(email);
 }