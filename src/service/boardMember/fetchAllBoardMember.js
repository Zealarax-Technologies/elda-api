const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllBoardMember{

    async execute(page = 1, category = null)
    {
        const pageSize = 20;
        const where = {};

        if(category){
            where.category_id = category
        }

        const member = await paginate(models.BoardMember, {
            page,
            pageSize,
            where,
            include: [
                {
                    model: models.BoardMembersCategory,
                    as: 'category'
                }
            ]
        });
        
        if(member)
        {
            return member;
        }

        return false;
    }

    async getMember(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const members = await this.execute(query.page, query?.category);
            if(members){
                return members;
            }

            return false;
        }
        
        const options = {
            include: [
                {
                    model: models.BoardMembersCategory,
                    as: 'category'
                }
            ]
        };

        if(query.category){
            options.where = {
                category_id: query.category
            }
        }

        if (query.limit) {
            options.limit = parseInt(query.limit, 10);
        }

        const members = await models.BoardMember.findAll(options);

        if(members.length)
        {
            return members;
        }

        return false;
    }
}

module.exports = new FetchAllBoardMember();