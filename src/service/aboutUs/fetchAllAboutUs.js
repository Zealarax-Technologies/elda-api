const models = require("../../models");
const { paginate } = require("../../utils/paginate");

class FetchAllAboutUs {
    
  async execute(page = 1) {
    const pageSize = 20;
    const aboutus = await paginate(models.AboutUs, {
      page,
      pageSize,
    });

    if (aboutus) {
      return aboutus;
    }

    return false;
  }

  async getAboutUs(query){
    
    if(parseInt(query?.paginate)){
      query.page = query.page || 1;
      const aboutUs = await this.execute(query.page);
      if(aboutUs){
        return aboutUs;
      }

      return false;
    }

    const aboutus = await models.AboutUs.findAll();
    if(aboutus.length){
      return aboutus;
    }

    return false;
  }
}

module.exports = new FetchAllAboutUs();
