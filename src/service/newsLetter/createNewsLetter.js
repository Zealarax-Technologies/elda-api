const models = require('../../models');

class CreateNewsLetter{

    async execute(newsLetterData)
    {
        const newsLetter = await models.NewsLetter.create(newsLetterData);
        if(newsLetter)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateNewsLetter();