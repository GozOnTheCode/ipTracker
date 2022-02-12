const input = document.querySelector('.ip-search')
const h1ip = document.querySelector('.h1-ip')
const isp = document.querySelector('.h1-isp')
const h1location = document.querySelector('.h1-location')
const h1timezone = document.querySelector('.h1-timezone')

const userAction = async() => {

    var ipAdress = input.value;
    console.log(ipAdress)

    url = 'https://geo.ipify.org/api/v2/country?apiKey=at_zJaYC83Cq6lPQHwRSGKWNe4zXzRfK&ipAddress=8.8.8.8'

    newUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_zJaYC83Cq6lPQHwRSGKWNe4zXzRfK&ipAddress=' + ipAdress
    console.log(newUrl)

    const response = await fetch(newUrl)
    const myJson = await response.json()
    console.log(myJson)

    var element = [
        myJson.ip,
        myJson.isp,
        myJson.location.region,
        myJson.location.timezone,
    ]

    h1ip.innerHTML = element[0]
    isp.innerHTML = element[1]
    h1location.innerHTML = element[2]
    h1timezone.innerHTML = element[3]
    console.log(element)
}
