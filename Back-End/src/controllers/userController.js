const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET_KEY = process.env.JWT_SECRET || 'batata';

class UserController {

    async criarUsuario(req, res) {
        const { fullName, areaOfExpertise, email, password } = req.body;

        try {
            if (!fullName || !areaOfExpertise || !email || !password) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
            }

            const userExists = await User.findOne({ where: { email } });
            if (userExists) {
                return res.status(409).json({ message: 'Este e-mail já está cadastrado.' });
            }

            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const user = await User.create({
                fullName,
                areaOfExpertise,
                email,
                password: hashedPassword
            });

            return res.status(201).json({
                message: "Usuário criado com sucesso!",
                userId: user.id
            });

        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({ message: 'Ocorreu um erro no servidor. Tente novamente.' });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            if (!email || !password) {
                return res.status(400).json({ message: 'Email e senha são obrigatórios' });
            }

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            // Compara a senha enviada com a senha criptografada no banco
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Credenciais inválidas' }); // Use uma mensagem genérica por segurança
            }

            // Gera o token JWT
            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET_KEY, { expiresIn: '1h' });
            
            return res.status(200).json({ token });

        } catch (error) {
            console.error('Erro no login:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const { password, ...userData } = user.get({ plain: true });
            return res.status(200).json(userData);

        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
    
 
    async listarUsuarios(req, res) {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] } // Exclui o campo de senha da listagem
            });
            return res.status(200).json(users);
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async alterarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { fullName, areaOfExpertise, email } = req.body;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            // Atualiza os campos
            user.fullName = fullName || user.fullName;
            user.areaOfExpertise = areaOfExpertise || user.areaOfExpertise;
            user.email = email || user.email;

            await user.save();
            
            const { password, ...updatedUser } = user.get({ plain: true });
            return res.status(200).json(updatedUser);

        } catch (error) {
            console.error('Erro ao alterar usuário:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async deletarUsuario(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            await user.destroy();
            return res.status(204).send(); 

        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async validarToken(token) {
        try {
            const payload = jwt.verify(token, JWT_SECRET_KEY);
            const user = await User.findByPk(payload.id);
            if (!user) {
                throw new Error('Token inválido');
            }
            return payload;
        } catch (error) {
            throw new Error('Token inválido');
        }
    }
}

module.exports = new UserController();