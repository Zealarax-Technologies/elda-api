const { programmeCollection, programmeResource } = require("../resource/programmeResource");
const createProgramme = require("../service/progamme/createProgramme");
const deleteProgramme = require("../service/progamme/deleteProgramme");
const fetchAllProgramme = require("../service/progamme/fetchAllProgramme");
const fetchSingleProgramme = require("../service/progamme/fetchSingleProgramme");
const updateProgramme = require("../service/progamme/updateProgramme");
const ApiResponses = require("../utils/apiResponse");

class ProgrammeController{

    async index(req, res)
    {
        const programme = await fetchAllProgramme.execute(req.query.page);
        if(programme)
        {
            return ApiResponses(res, 200, 'All Programme', programmeCollection(programme));
        }

        return ApiResponses(res, 200, 'No Programme Found');
    }

    async show(req, res)
    {
        const programme = await fetchSingleProgramme.execute(req.params.id);
        if(programme)
        {
            return ApiResponses(res, 200, 'Single Programme', programmeResource(programme));
        }

        return ApiResponses(res, 400, 'Programme Not Found');
    }

    async store(req, res)
    {
        if(await createProgramme.execute(req.programmeData))
        {
            return ApiResponses(res, 200, 'Programme Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Programme');
    }

    async update(req, res)
    {
        if(await updateProgramme.execute(req.params.id, req.programmeData))
        {
            return ApiResponses(res, 200, 'Programme Updated');
        }

        return ApiResponses(res, 400, 'Programme Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteProgramme.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Programme Deleted');
        }

        return ApiResponses(res, 400, 'Programme Not Found');
    }

    async getProgrammes(req, res){
        const programme = await fetchAllProgramme.getProgrammes(req.query);
        if(programme)
        {
            return ApiResponses(res, 200, 'All Programme', programmeCollection(programme, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Programme Found');
    }
}

module.exports = new ProgrammeController();