document.addEventListener("DOMContentLoaded", function () {
    let visitCount = getCookie('visitCount')
    console.log('visitCount', visitCount)
    if (visitCount <= 3) {
        document.querySelector('#halaDiv').style.display = ''
    } else {
        document.querySelector('#noHalaDiv').style.display = ''
    }

    //Display the visit counts in the spans having visitCount class
    const elements = document.querySelectorAll('.visitCount')
    for(let e of elements) {
         e.innerText = visitCount
    }
})

function getCookie(cookieName) {
    console.log(document.cookie)

    let cookies = document.cookie.split(';')
    for(let cookie of cookies) {

        const cookieArray = cookie.split('=')
        const cname = cookieArray[0].trim()
        const cvalue = cookieArray[1].trim()

        if ( cookieName === cname ) {
            return cvalue
            break
        }
    }
    return ""
}