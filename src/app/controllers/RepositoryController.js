import * as Yup from 'yup';

import Repository from '../models/Repository';

class RepositoryController {
    async index(req, res) {
        const schema = Yup.object().shape({
            id: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const repositories = await Repository.findALL({ where: { user_id: req.body.id } });

        return res.json({ data: [{
            id: repositories.id,
            userId: repositories.userId,
            nome: repositories.nome,
            description: repositories.description,
            public: repositories.public,
            slug: repositories.slug,
        }] });
    }
    async store(req, res) {
        const schema = Yup.object().shape({
            userId: Yup.string().required(),
            nome: Yup.string().required(),
            description: Yup.string().required(),
            public: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const repositoryExists = await Repository.findOne({ where: {[Op.and]: [{ user_id: req.body.userId }, { nome: req.body.nome }]} });

        if (repositoryExists) {
            return res.status(400).json({ error: 'Repository already exists.' });
        }

        const { nomeUser } = User.findByPk(userId);

        req.body.slug = req.body.nome.concat('-', nomeUser);

        const repository = await Repository.create(req.body);

        return res.json(repository);
    }
    async update(req, res) {
        const schema = Yup.object().shape({
            userId: Yup.string().required(),
            nome: Yup.string().required(),
            description: Yup.string().required(),
            public: Yup.string().required(),
            slug: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const repo = await Repository.findByPk(req.params.id);

        const repository = await repo.update(req.body);

        return res.json(repository);
    }
}

export default new RepositoryController();