import * as Yup from 'yup';

import User from '../models/User';

import Token from '../models/Token';

class UserController {
    async index(req, res) {
        const schema = Yup.object().shape({
            username: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const user = await User.findOne({ where: { username: req.body.username } });

        if (!user) {
            return res.status(400).json({ error: 'User not exists.' });
        }

        const token = await Token.create({ user_id: user.id, date: new Date() });

        return res.json({ data: [{
            id: user.id,
            nome: user.nome,
            email: user.email,
            localizacao: user.localizacao,
            avatar: user.avatar,
            username: user.username,
            bio: user.bio
        }] });
    }
    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().email().required(),
            localizacao: Yup.string().required(),
            avatar: Yup.string().required(),
            username: Yup.string().required(),
            bio: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const user = await User.findOne({ where: { username: req.body.username } });

        if (user) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        const { id, nome, email } = await User.create(req.body);

        return res.json({
            id,
            nome,
            email,
        });
    }
    async update(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().email().required(),
            localizacao: Yup.string().required(),
            avatar: Yup.string().required(),
            username: Yup.string().required(),
            bio: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { nome, email, username } = req.body;

        const user = await User.findByPk(req.params.id);
        
        if (username !== user.username) {
            return res.status(400).json({ error: 'User already exists.' });
        } else if (email !== user.email) {
            return res.status(400).json({ error: 'Email already exists.' });
        }

        const { id } = await user.update(req.body);

        return res.json({
            id,
            nome,
            email,
        });
    }
}

export default new UserController();