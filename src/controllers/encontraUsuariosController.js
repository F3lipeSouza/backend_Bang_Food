const encontraUsuario = require('../Usecases/encontraUsuario');

function encontraUsuariosController(request,response){
    const req = request.body;
    const e_mail = req.inputEmail;

    const solicitaAcesso = encontraUsuario.execute(e_mail);
    if(solicitaAcesso.password === req.inputSenha){
        console.log(`usuario logado com sucesso`)
        response.status(200).json({
            success: true,
            message: 'login feito com sucesso',
        })
    }else{
        console.log('senha incorreta');
        response.status(401).json({
            success: false,
            message: 'usuario não encontrado'
        })
    }
    
}
module.exports = { encontraUsuariosController }