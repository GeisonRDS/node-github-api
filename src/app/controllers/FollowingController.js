import * as Yup from 'yup';

import Following from '../models/Following';

class FollowingController {
    async index(req, res) {
        const schema = Yup.object().shape({
            id: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const following = await User.findAll({ 
            include: [{
                model: Following,
                as: 'following',
                required: false,
            }],
            where: literal("`user`.`id` = `following`.`following_user_id` AND `following`.`user_id` = ${req.body.id}")          });

        return res.json({ data: [{
            id: following.id,
            nome: following.nome,
            email: following.email,
            localizacao: following.localizacao,
            avatar: following.avatar,
            username: following.username,
            bio: following.bio
        }] });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            userId: Yup.integer().required(),
            followingUserId: Yup.integer().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const following = await Following.create({ user_id: req.body.userId, following_user_id: req.body.followingUserId });

        return res.json(follower);
    }

}

export default new FollowingController();