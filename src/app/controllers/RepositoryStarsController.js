import * as Yup from 'yup';

import RepositoryStars from '../models/RepositoryStars';

class RepositoryStarsController {
    async index(req, res) {
        const schema = Yup.object().shape({
            idRepository: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const repositoriesStars = await RepositoryStars.findAll({ 
            where: { reposutory_id: req.body.idRepository }   
        });

        return res.json({ data: [{
            id,
            user_id,
            repository_id,
        }] });
    }
}

export default new RepositoryStarsController();
