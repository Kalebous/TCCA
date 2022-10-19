module.exports = class UsuarioDAO{
 
    constructor(conexao) {
        this.conexao = conexao;
    }
    
    FindAll = ()=>{
        return new Promise((resolve, reject)=>{
            this.conexao.query('SELECT * FROM usuario ',  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };
 
    FindPage = (pagina, total)=>{
        return new Promise((resolve, reject)=>{
            this.conexao.query('SELECT * FROM usuario limit '+ pagina + ', '+ total,  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };
    
    Create = (dadosForm)=>{
        return new Promise((resolve, reject)=>{
            this.conexao.query("INSERT INTO usuario SET ?", dadosForm,  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };
    
    Update = (dadosForm)=>{
        return new Promise((resolve, reject)=>{
            this.conexao.query("UPDATE usuario SET nome_usuario = ?, user_usuario = ?,senha_usuario = ?, "+
            "email_usuario = ?, telefone_usuario = ?"+
            "WHERE id_usuario = ?;", dadosForm,  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    

    TotalReg = ()=>{
        return new Promise((resolve, reject)=>{
            this.conexao.query('SELECT count(*) total FROM usuario ',  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

}

// Referencias
// https://www.w3schools.com/Js/js_classes.asp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise