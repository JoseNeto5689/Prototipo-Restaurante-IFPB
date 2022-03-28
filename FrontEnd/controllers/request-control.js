import { Alert } from "react-native";
class Requests{
    ip = "http://192.168.0.105:3000"; //default
    
    setIp(ip){
        this.ip = ip;
    }
    getIp(){
        return this.ip;
    }

    add(requestBody, func){
        fetch( this.ip + "/stock/add", { 
            method: "POST", 
            headers:{'Content-Type': "application/json"}, 
            body: JSON.stringify(requestBody)
        })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp))
        .finally(() => { func() })
            
    }

    alter(id, requestBody, func){
        fetch( this.ip + `/stock/alter/${id}`,{ 
            method: "PATCH", 
            headers:{'Content-Type': "application/json"}, 
            body: JSON.stringify(requestBody)})
            .then((resp) => resp.json())
            .then((resp) => console.log(resp))
            .finally(() => { func() })
    }

    delete(ids, func){  //Recebe um array como parametro
        fetch( this.ip + "/stock/delete", { 
        method: "DELETE", 
        headers:{'Content-Type': "application/json"}, 
        body: JSON.stringify({
            id: ids
        })})
        .then((resp) => resp.json())
        .then((resp) => console.log(resp))
        .finally(() => { func() })
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
        .then((resp) => resp.json())
        .then((json) => { setDados(json); Alert.alert("Aviso", `Foram encontrados ${json.length} resultados`)})
        .catch(() => { alert("Erro!") })
        .finally(() => { setLoading(false) })
    }

    verify(requestBody, exitFunc, id){
        fetch(this.ip + "/products")
        .then((resp) =>resp.json())
        .then((resp) => { 
            let error = false
            if(id == null){
                resp.forEach((item) => {
                    if(item.product_name == requestBody.product_name){
                        error = true
                    }
                }) 
            }
            if(!error && id == null){
                this.add(requestBody, exitFunc)
            }
            else if(!error && id != null){
                this.alter(id, requestBody, exitFunc)
            }
            else{
                Alert.alert("Erro","Já existe um produto com esse nome!")
                exitFunc()
            }
            })
    }

}

module.exports = new Requests()