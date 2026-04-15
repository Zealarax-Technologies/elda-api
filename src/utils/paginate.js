const url = require("../config/url");


async function paginate(model, { page = 1, pageSize = 10, include = [], where = {}, order = [] }) {
  try {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    const { rows: data, count: total } = await model.findAndCountAll({
      where,
      include,
      limit,
      offset,
      distinct: true,
      order
    });

    if (total > 0) {
      return {
        data: data,
        total: total,
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / pageSize),
        pageSize: pageSize,
      };
    }
    
    return false;
  } catch (error) {
    console.log(error.message);
  }
}


function paginationLinks(name, currentPage, totalPages)
{
    const route = url(name);
    return {
        first: `${route}?page=${1}`,
        last: `${route}?page=${totalPages}`,
        prev: currentPage > 1 ? `${route}?page=${currentPage - 1}` : null,
        next: currentPage < totalPages ? `${route}?page=${currentPage + 1}` : null
    }
}

module.exports = {paginationLinks, paginate};