const controller = require('../controllers/userController');


class UserApi {
 
    async criarUsuario(req, res) {
        await controller.criarUsuario(req, res);
    }

    async alterarUsuario(req, res) {
        await controller.alterarUsuario(req, res);
    }

    async deletarUsuario(req, res) {
        await controller.deletarUsuario(req, res);
    }

    async listarUsuarios(req, res) { 
        await controller.listarUsuarios(req, res);
    }

    async login(req, res) {
        await controller.login(req, res);
    }

    async validarToken(req, res, next) {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).send({ message: 'Token de autenticação não fornecido.' });
        }

        try {
            const token = authorization.split(' ')[1];
            if (!token) {
                return res.status(401).send({ message: 'Token mal formatado.' });
            }

            const payload = await controller.validarToken(token);
            req.user = payload;
            
            next();
        } catch (error) {
            return res.status(401).send({ message: error.message || 'Token inválido ou expirado.' });
        }
    }
}

module.exports = new UserApi();