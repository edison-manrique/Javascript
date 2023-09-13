// importamos axios
import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";


// definimos la clase API
class BinanceAPI {

    static baseUrl = 'https://api.binance.com/api/v3';

    static async getPriceOf(cryptocurrencySymbol = ''){
        const pair = `${cryptocurrencySymbol.toUpperCase()}USDT`;
        const response = await axios.get(`${this.baseUrl}/ticker/price?symbol=${pair}`);
        return (+response.data.price).toFixed(2);
    }
}

// definimos helpers
function getDateTime(){
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Sumamos 1 porque los meses van de 0 a 11
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

}

// definimos como mostrar los datos
const print = txt => document.body.innerHTML = `<pre>${getDateTime()}: ${txt}<pre>${document.body.innerHTML}`;
const getBitcoinPrice = async () => print(`El precio del Bitcoin es: ${await BinanceAPI.getPriceOf('btc')} USDT`);

// ejecutamos y seteamos un intervalo de 3 segundos
getBitcoinPrice() && setInterval(getBitcoinPrice, 3000);