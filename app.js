const authUrl = 'https://${YOUR_WEBPAGE}/oam/server/auth_cred_submit';
const authParams = {
    username: ${YOUR_USERNAME},
    'temp-username': ${YOUR_USERNAME},
    password: ${YOUR_PASSWORD},
    'temp-password': ${YOUR_PASSWORD},
    request_id: '-4395465005017342591',
    displayLangSelection: 'false'
};

const usersArr = ['1122A','2233B','3344C','4455D','5567E']

const authCookie = ${YOUR_AUTH_COOKIE}

usersArr.forEach(user => {
    const dataUrl = `https://${YOUR_WEBPAGE}/api/linesUsage/v1/groupedLinesUsage/get?individualPublicId=${user}&onlyActive=false`;
    const dataParams = {
        'headers': {
            // Res headers
            Connection:'Keep-Alive',
            'Content-Security-Policy':'default-src *${YOUR_WEBPAGE}',
            'Content-Type':'application/json;charset=UTF-8',
            'Date':'Wed, 22 May 2024 14:20:06 GMT',
            // 'Keep-Alive':'timeout=5, max=200',
            'Server':'Apache',
            'Strict-Transport-Security':'max-age=31536000; includeSubDomains',
            // 'Transfer-Encoding':'chunked',
            'X-Application-Context': '',
            'X-B3-Sampled': '1',
            'X-B3-Spanid':'822aeb4069ac7196',
            'X-B3-Traceid':'822aeb4069ac7196',
            'X-Frame-Options':'SAMEORIGIN',
            'X-Orange-Trace-Id':'0881b996dd71ff2d5ca145f534c61eab510c2c35',
            'X-Xss-Protection':'1',
            // Req headers
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-EN,en;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': authCookie,
            'Host': ${YOUR_WEBPAGE}',
            'Sec-Ch-Ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }
    }
    
    const campUrl = `https://${YOUR_WEBPAGE}/openapi/xplselectorlines/v1/getCommercialCampaigns?document=${user}&brand=brand&site=FCUPdV&onlyActive=true&tipoAccionDL=ALL`
    const campParams = {
        'headers': {
            // Res headers
            'Connection':'Keep-Alive',
            'Content-Encoding':'gzip',
            'Content-Security-Policy':'default-src *${YOUR_WEBPAGE}',
            'Content-Type':'application/json; charset=utf-8',
            'Date':'Wed, 22 May 2024 14:51:52 GMT',
            'Etag':'W/"e8c-AZsmzFMLM70GJ4UMoKgVsrGfr3o"',
            // 'Keep-Alive':'timeout=5, max=200',
            'Server':'istio-envoy',
            'Strict-Transport-Security':'max-age=31536000; includeSubDomains',
            // 'Transfer-Encoding':'chunked',
            'Vary':'Accept-Encoding',
            'X-Content-Type-Options':'nosniff',
            'X-Dns-Prefetch-Control':'off',
            'X-Download-Options':'noopen',
            'X-Envoy-Upstream-Service-Time':'794',
            'X-Frame-Options':'SAMEORIGIN',
            'X-Frame-Options':'SAMEORIGIN',
            'X-Orange-Trace-Id':'57e4af95307ba2de827bfaaee86cee90d3a8c993',
            'X-Xss-Protection':'1',
            // Req headers
            'Accept':
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Encoding':
            'gzip, deflate, br, zstd',
            'Accept-Language':
            'es-ES,es;q=0.9',
            'Connection':
            'keep-alive',
            'Cookie':authCookie,
            'Host':${YOUR_WEBPAGE},
            'Sec-Ch-Ua':'"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            'Sec-Ch-Ua-Mobile':'?0',
            'Sec-Ch-Ua-Platform':'"Windows"',
            'Sec-Fetch-Dest':'document',
            'Sec-Fetch-Mode':'navigate',
            'Sec-Fetch-Site':'none',
            'Sec-Fetch-User':'?1',
            'Upgrade-Insecure-Requests':'1',
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        }
    }

    fetch(authUrl, authParams).then(
        fetch(dataUrl, dataParams)
            .then(res => res.json())
            .then(data => data)
    )
    fetch(authUrl, authParams).then(
        fetch(campUrl, campParams)
            .then(res => res.json())
            .then(data => {
                console.log(data.result[0])
            })
    )
})
