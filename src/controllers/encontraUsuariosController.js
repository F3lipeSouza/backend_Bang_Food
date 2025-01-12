const encontraUsuario = require('../Usecases/encontraUsuario');

function encontraUsuariosController(request,response){
    const req = request.body;
    const e_mail = req.inputEmail;

    const solicitaAcesso = encontraUsuario.execute(e_mail);

    if(!solicitaAcesso){
        response.status(404).json({
            success:false,
            message: 'usuario não encontrado na base de dados',
            statusCode: 404
        })
        return
    }
    
    if(solicitaAcesso.password === req.inputSenha){
        response.status(200).json({
            success: true,
            message: 'login feito com sucesso',
            statusCode: 200
        })
    }else{
        response.status(401).json({
            success: false,
            message: 'senha incorreta',
            statusCode: 401
        })
    }
    
}
module.exports = { encontraUsuariosController }