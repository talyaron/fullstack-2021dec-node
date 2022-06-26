import ClubParty from "../model/clubModel";

import { getDayName } from "../helpers/helpers";


const allParties: Array<ClubParty> = [

    {
        name: 'Latin Groove',
        salsa: false,
        bachata: true,
        location: 'Petah Tikva',
        day: 'Monday',
        types: 'Bachata'
    },
    {
        name: 'Havana',
        salsa: true,
        bachata: true,
        location: 'Tel aviv',
        day: 'Thursday',
        types: 'Bachata, Salsa'
    },
    {
        name: 'Baila Bachata',
        salsa: false,
        bachata: true,
        location: 'Rehovot',
        day: 'Tuesday',
        types: 'Bachata'
    },
    {
        name: 'Baila Salsa',
        salsa: true,
        bachata: false,
        location: 'Rehovot',
        day: 'Wednesday',
        types: 'Salsa'
    },
    {
        name: 'Havana',
        salsa: true,
        bachata: true,
        location: 'Tel aviv',
        day: 'Tuesday',
        types: 'Bachata, Salsa'
    },
    {
        name: 'Havana',
        salsa: true,
        bachata: true,
        location: 'Tel aviv',
        day: 'Saturday',
        types: 'Bachata, Salsa'
    },
    {
        name: 'Baila Salsa',
        salsa: true,
        bachata: true,
        location: 'Rehovot',
        day: 'Saturday',
        types: 'Salsa'
    },
    {
        name: 'Bachata Beach',
        salsa: false,
        bachata: true,
        location: 'Bat-Yam',
        day: 'Friday',
        types: 'Bachata'
    },
]



export async function getSearchData(req, res) {
    try {
        let { choosenDate, salsaCheckBox, bachataCheckBox } = req.body;

        var day = getDayName(choosenDate);
        console.log(day);

        let clubsResults = []

        for (let i = 0; i < allParties.length; i++) {
            if ((allParties[i].day === day) && (allParties[i].bachata === bachataCheckBox || allParties[i].salsa === salsaCheckBox)) {
                clubsResults.push(allParties[i])
            }

        }

        res.send(clubsResults)

    } catch (error) {
        res.send({ error: error.message });
    }
};
 

