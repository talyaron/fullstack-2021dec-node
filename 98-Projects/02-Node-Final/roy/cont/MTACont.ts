export interface team{
    name:string,
    teamId:string,
    backgroundColor:string,
    symbol:string,
}

let teams: Array<team> = [ { name: 'MTA', teamId: 'abc', backgroundColor: 'yellow', symbol: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png' }, 
{ name: 'HTA', teamId: 'abcd', backgroundColor: 'red', symbol: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png' } ];

export async function getAllTeams(req, res) {
	try {
		res.send({ teams });
	} catch (error) {
		console.log('teams array not valid');
		res.send({ error: error.message });
	}
}

export const handleDeleteTeam = (req, res) => {
	try {
		const { teamId } = req.body;
		const index: number = teams.findIndex((team) => team.teamId === teamId);
		if (index === -1) throw new Error('team not found');
		teams = teams.filter((team) => team.teamId === teamId);
		console.log('teams', teams);
		res.send({ teams });
	} catch (error) {
		res.send({ error: error.message });
	}
};