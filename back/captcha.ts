import Axios from 'axios';

export async function verifyCaptcha(gcResponse) {
    let res = await Axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${gcResponse}`);
    if (res.data[0] == true) {
        return true;
    } 
    return false;
}