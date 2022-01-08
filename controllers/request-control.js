class Requests{
    ip = "http://192.168.0.105:3000"; //default
    
    setIp(ip){
        this.ip = ip;
    }
    getIp(){
        return this.ip;
    }

    add(requestBody){
        fetch( this.ip + "/stock/add", { 
            method: "POST", 
            headers:{'Content-Type': "application/json"}, 
            body: JSON.stringify(requestBody)})
    }

    alter(ip, requestBody){
        fetch( this.ip + `/stock/alter/${ip}`,{ 
            method: "PATCH", 
            headers:{'Content-Type': "application/json"}, 
            body: JSON.stringify(requestBody)})
    }

    delete(ips){ //Recebe um array como parametro
        fetch( this.ip + "/stock/delete", { 
        method: "DELETE", 
        headers:{'Content-Type': "application/json"}, 
        body: JSON.stringify({
            id: ips
        })})
    }
    list(setDados, setLoading){ //Precisa da estrutura do ActivityIndicator e do useEffect
        fetch(this.ip + "/stock")
        .then((resp) => resp.json())
        .then((json) => { setDados(json) })
        .catch(() => { alert("Erro!") })
        .finally(() => { setLoading(false)})
    }
    search(value, setDados, setLoading){ //Precisa da estrutura do ActivityIndicator e do useEffect
        fetch(this.ip + `/stock/${value}`)
        .then((resp) => resp.text())
        .then((text) => { setDados(text) })
        .catch(() => { alert("Erro!") })
        .finally(() => { setLoading(false) })
    }

}

module.exports = new Requests()