import * as Yup from 'yup';

import Follower from '../models/Follower';

class FollowerController {
    async index(req, res) {
        const schema = Yup.object().shape({
            id: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const followers = await User.findAll({ 
            include: [{
                model: Follower,
                as: 'follower',
                required: false,
            }],
            where: literal("`user`.`id` = `follower`.`follower_user_id` AND `follower`.`user_id` = ${req.body.id}")    
        });

        return res.json({ data: [{
            id: followers.id,
            nome: followers.nome,
            email: followers.email,
            localizacao: followers.localizacao,
            avatar: followers.avatar,
            username: followers.username,
            bio: followers.bio
        }] });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            userId: Yup.integer().required(),
            followerUserId: Yup.integer().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const follower = await Follower.create({ user_id: req.body.userId, follower_user_id: req.body.followerUserId });

        return res.json(follower);
    }

}

export default new FollowerController();