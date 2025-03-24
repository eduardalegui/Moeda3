let g_dictionary = {
    "AED": "AE", // United Arab Emirates Dirham
    "AFN": "AF", // Afghan Afghani
    "ALL": "AL", // Albanian Lek
    "AMD": "AM", // Armenian Dram
    "ANG": "AN", 
    "AOA": "AO", // Angolan Kwanza
    "ARS": "AR", // Argentine Peso
    "AUD": "AU", // Australian Dollar
    "AWG": "AW", // Aruban Florin
    "AZN": "AZ", // Azerbaijani Manat
    "BAM": "BA", // Bosnia and Herzegovina Convertible Mark
    "BBD": "BB", // Barbadian Dollar
    "BDT": "BD", // Bangladeshi Taka
    "BGN": "BG", // Bulgarian Lev
    "BHD": "BH", // Bahraini Dinar
    "BIF": "BI", // Burundian Franc
    "BMD": "BM", // Bermudian Dollar
    "BND": "BN", // Brunei Dollar
    "BOB": "BO", // Bolivian Boliviano
    "BRL": "BR", // Brazilian Real
    "BSD": "BS", // Bahamian Dollar
    "BTN": "BT", // Bhutanese Ngultrum
    "BWP": "BW", // Botswana Pula
    "BYN": "BY", // Belarusian Ruble
    "BZD": "BZ", // Belize Dollar
    "CAD": "CA", // Canadian Dollar
    "CDF": "CD", // Congolese Franc
    "CHF": "CH", // Swiss Franc
    "CLP": "CL", // Chilean Peso
    "CNY": "CN", // Chinese Yuan
    "COP": "CO", // Colombian Peso
    "CRC": "CR", // Costa Rican Colón
    "CUC": "CU", // Cuban Convertible Peso
    "CUP": "CU", // Cuban Peso
    "CVE": "CV", // Cape Verdean Escudo
    "CZK": "CZ", // Czech Koruna
    "DJF": "DJ", // Djiboutian Franc
    "DKK": "DK", // Danish Krone
    "DOP": "DO", // Dominican Peso
    "DZD": "DZ", // Algerian Dinar
    "EGP": "EG", // Egyptian Pound
    "ERN": "ER", // Eritrean Nakfa
    "ETB": "ET", // Ethiopian Birr
    "EUR": "EU", // Euro
    "FJD": "FJ", // Fijian Dollar
    "FKP": "FK", // Falkland Islands Pound
    "FOK": "FK", // Faroese Krona
    "GBP": "GB", // British Pound Sterling
    "GEL": "GE", // Georgian Lari
    "GGP": "GG", // Georgian Lari
    "GHS": "GH", // Ghanaian Cedi
    "GIP": "GI", // Gibraltar Pound
    "GMD": "GM", // Gambian Dalasi
    "GNF": "GN", // Guinean Franc
    "GTQ": "GT", // Guatemalan Quetzal
    "GYD": "GY", // Guyanese Dollar
    "HKD": "HK", // Hong Kong Dollar
    "HNL": "HN", // Honduran Lempira
    "HRK": "HR", // Croatian Kuna (now replaced by EUR)
    "HTG": "HT", // Haitian Gourde
    "HUF": "HU", // Hungarian Forint
    "IDR": "ID", // Indonesian Rupiah
    "ILS": "IL", // Israeli New Shekel
    "IMP": "IM", // Israeli New Shekel
    "INR": "IN", // Indian Rupee
    "IQD": "IQ", // Iraqi Dinar
    "IRR": "IR", // Iranian Rial
    "ISK": "IS", // Icelandic Króna
    "JEP": "JE", // Icelandic Króna
    "JMD": "JM", // Jamaican Dollar
    "JOD": "JO", // Jordanian Dinar
    "JPY": "JP", // Japanese Yen
    "KES": "KE", // Kenyan Shilling
    "KGS": "KG", // Kyrgyzstani Som
    "KHR": "KH", // Cambodian Riel
    "KID": "KI", // Kiribation Dolar
    "KMF": "KM", // Comorian Franc
    "KPW": "KP", // North Korean Won
    "KRW": "KR", // South Korean Won
    "KWD": "KW", // Kuwaiti Dinar
    "KYD": "KY", // Cayman Islands Dollar
    "KZT": "KZ", // Kazakhstani Tenge
    "LAK": "LA", // Lao Kip
    "LBP": "LB", // Lebanese Pound
    "LKR": "LK", // Sri Lankan Rupee
    "LRD": "LR", // Liberian Dollar
    "LSL": "LS", // Lesotho Loti
    "LYD": "LY", // Libyan Dinar
    "MAD": "MA", // Moroccan Dirham
    "MDL": "MD", // Moldovan Leu
    "MGA": "MG", // Malagasy Ariary
    "MKD": "MK", // Macedonian Denar
    "MMK": "MM", // Myanmar Kyat
    "MNT": "MN", // Mongolian Tögrög
    "MOP": "MO", // Macanese Pataca
    "MRU": "MR", // Mauritanian Ouguiya
    "MUR": "MU", // Mauritian Rupee
    "MVR": "MV", // Maldivian Rufiyaa
    "MWK": "MW", // Malawian Kwacha
    "MXN": "MX", // Mexican Peso
    "MYR": "MY", // Malaysian Ringgit
    "MZN": "MZ", // Mozambican Metical
    "NAD": "NA", // Namibian Dollar
    "NGN": "NG", // Nigerian Naira
    "NIO": "NI", // Nicaraguan Córdoba
    "NOK": "NO", // Norwegian Krone
    "NPR": "NP", // Nepalese Rupee
    "NZD": "NZ", // New Zealand Dollar
    "OMR": "OM", // Omani Rial
    "PAB": "PA", // Panamanian Balboa
    "PEN": "PE", // Peruvian Sol
    "PGK": "PG", // Papua New Guinean Kina
    "PHP": "PH", // Philippine Peso
    "PKR": "PK", // Pakistani Rupee
    "PLN": "PL", // Polish Złoty
    "PYG": "PY", // Paraguayan Guaraní
    "QAR": "QA", // Qatari Rial
    "RON": "RO", // Romanian Leu
    "RSD": "RS", // Serbian Dinar
    "RUB": "RU", // Russian Ruble
    "RWF": "RW", // Rwandan Franc
    "SAR": "SA", // Saudi Riyal
    "SBD": "SB", // Solomon Islands Dollar
    "SCR": "SC", // Seychellois Rupee
    "SDG": "SD", // Sudanese Pound
    "SEK": "SE", // Swedish Krona
    "SGD": "SG", // Singapore Dollar
    "SHP": "SH", // Saint Helena Pound
    "SLE": "SL", // Sierra Leonean Leone
    "SLL": "SL", // Sierra Leonean Leone
    "SOS": "SO", // Somali Shilling
    "SRD": "SR", // Surinamese Dollar
    "SSP": "SS", // South Sudanese Pound
    "STN": "ST", // São Tomé and Príncipe Dobra
    "SYP": "SY", // Syrian Pound
    "SZL": "SZ", // Swazi Lilangeni
    "THB": "TH", // Thai Baht
    "TJS": "TJ", // Tajikistani Somoni
    "TMT": "TM", // Turkmenistani Manat
    "TND": "TN", // Tunisian Dinar
    "TOP": "TO", // Tongan Paʻanga
    "TRY": "TR", // Turkish Lira
    "TTD": "TT", // Trinidad and Tobago Dollar
    "TVD": "TV", // Tuvalu
    "TWD": "TW", // New Taiwan Dollar
    "TZS": "TZ", // Tanzanian Shilling
    "UAH": "UA", // Ukrainian Hryvnia
    "UGX": "UG", // Ugandan Shilling
    "USD": "US", // United States Dollar
    "UYU": "UY", // Uruguayan Peso
    "UZS": "UZ", // Uzbekistani Som
    "VES": "VE", // Venezuelan Bolívar Soberano
    "VND": "VN", // Vietnamese Dong
    "VUV": "VU", // Vanuatu Vatu
    "WST": "WS", // Samoan Tala
    "XAF": "CF", // CFA Franc BEAC
    "XCD": "AG", // East Caribbean Dollar
    "XDR": "XDR", // Special Drawing Rights
    "XOF": "SN", // CFA Franc BCEAO
    "XPF": "PF", // CFP Franc
    "YER": "YE", // Yemeni Rial
    "ZAR": "ZA", // South African Rand
    "ZMW": "ZM", // Zambian Kwacha
    "ZWL": "ZW" // Zimbabwean Dollar
};
const apiKey = "b350ba74dee9117058ac7dd0";


window.onload = async function (){
    let data = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
    if(!data.ok){
        return
    }
    let jsonData = await data.json();
    let keys = Object.keys(jsonData.conversion_rates);
    console.log(jsonData)

    var select = document.getElementById("select");
    
    var select2 = document.getElementById("select2");
    
    keys.forEach(key => {
        var option = document.createElement('option');
        option.text = option.value = key;
        var option2 = document.createElement('option');
        option2.text = option2.value = key;
        
        select.add(option, key);
        select2.add(option2, key);
        
        console.log(key);  
    });
    SetFlagCima();
    SetFlagBaixo();
}



function SetFlagCima() 
{
    const select = document.getElementById("select");

    document.getElementById("bandeiraCima").src = `https://flagsapi.com/${g_dictionary[select.value]}/flat/64.png`;
}

function SetFlagBaixo() 
{
    const select = document.getElementById("select2");

    document.getElementById("bandeiraBaixo").src = `https://flagsapi.com/${g_dictionary[select.value]}/flat/64.png`;
}



async function convert(){
    
    
    
    let moeda1 = document.getElementById("select").value;
    let moeda2 = document.getElementById("select2").value;
    
    let input1 = document.getElementById("input").value;
    
    let data = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${moeda1}/${moeda2}`);

    let jsonData = await data.json();

    document.getElementById("input2").value = (jsonData.conversion_rate * input1).toFixed(2);
}



function reverse(){
    let moeda1 = document.getElementById("select").value;
    let moeda2 = document.getElementById("select2").value;
    document.getElementById("select2").value = moeda1;
    document.getElementById("select").value = moeda2;

    document.getElementById("input").value = 1;
    convert();
    SetFlagBaixo();
    SetFlagCima();
}
