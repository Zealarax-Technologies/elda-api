const { historyCollection, historyResource } = require("../resource/historyResource");
const createHistory = require("../service/history/createHistory");
const deleteHistory = require("../service/history/deleteHistory");
const fetchAllHistory = require("../service/history/fetchAllHistory");
const fetchSingleHistory = require("../service/history/fetchSingleHistory");
const updateHistory = require("../service/history/updateHistory");
const ApiResponses = require("../utils/apiResponse");

class HistoryController{

    async index(req, res)
    {
        const history = await fetchAllHistory.execute(req.query.page);
        if(history)
        {
            return ApiResponses(res, 200, 'All History', historyCollection(history));
        }

        return ApiResponses(res, 200, 'No History Found');
    }

    async show(req, res)
    {
        const history = await fetchSingleHistory.execute(req.params.id);
        if(history)
        {
            return ApiResponses(res, 200, 'Single History', historyResource(history));
        }

        return ApiResponses(res, 400, 'History Not Found');
    }

    async store(req, res)
    {
        if(await createHistory.execute(req.historyData))
        {
            return ApiResponses(res, 200, 'History Created');
        }

        return ApiResponses(res, 400, 'Problem Creating History');
    }

    async update(req, res)
    {
        if(await updateHistory.execute(req.params.id, req.historyData))
        {
            return ApiResponses(res, 200, 'History Updated');
        }

        return ApiResponses(res, 400, 'History Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteHistory.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'History Deleted');
        }

        return ApiResponses(res, 400, 'History Not Found');
    }

    async getHistory(req, res){
        const history = await fetchAllHistory.getHistory(req.query);
        if(history)
        {
            return ApiResponses(res, 200, 'All History', historyCollection(history, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No History Found');
    }
}

module.exports = new HistoryController();