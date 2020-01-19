const Dev = require('../models/Dev.js');
const parseStringAsArray = require('../utils/parseStringAsArray.js');

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
               $in: techsArray, 
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinate: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
    
        return response.json({ devs });
    }

}