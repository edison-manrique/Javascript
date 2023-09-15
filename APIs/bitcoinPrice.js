// importamos axios
import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";


// definimos la clase API
class BinanceAPI {

    static baseUrl = 'https://api.binance.com/api/v3';

    static async getPriceOf(cryptocurrencySymbol = ''){
        const pair = `${cryptocurrencySymbol.toUpperCase()}USDT`;
        const {data: {price}} = await axios.get(`${this.baseUrl}/ticker/price?symbol=${pair}`);
        return (+price).toFixed(2);
    }
}

// definimos helpers
Date.getDateTime = function(){
    const currentDate = new this;
    
    const year      = String(currentDate.getFullYear()  );
    const month     = String(currentDate.getMonth() + 1 ).padStart(2, '0'); // Sumamos 1 porque los meses van de 0 a 11
    const day       = String(currentDate.getDate()      ).padStart(2, '0');
    const hours     = String(currentDate.getHours()     ).padStart(2, '0');
    const minutes   = String(currentDate.getMinutes()   ).padStart(2, '0');
    const seconds   = String(currentDate.getSeconds()   ).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

}

// definimos como mostrar los datos
const print = string => document.body.innerHTML = `<pre>${ Date.getDateTime() }: ${ string }<pre>${ document.body.innerHTML }`;
const showBitcoinPrice = async () => print(`El precio del Bitcoin es: ${ await BinanceAPI.getPriceOf('btc') } USDT`);

// ejecutamos y seteamos un intervalo de 3 segundos
showBitcoinPrice() && setInterval(showBitcoinPrice, 3000);