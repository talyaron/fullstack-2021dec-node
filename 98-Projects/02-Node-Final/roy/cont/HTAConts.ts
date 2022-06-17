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

export interface transfer{
    headline:string,
    Id:string,
	photo:string,
    url:string,
    text:string,
}
let transfers: Array<transfer> = [ { headline: 'השוער סטפן מרינוביץ’ סיכם במועדון לעונה אחת.', Id: 'a',photo:'https://www.htafc.co.il/wp-content/uploads/2022/06/7OMXKR6DCZOPHJILYFONMJXGPA.jpg', url: 'https://www.htafc.co.il/2022/06/15/%d7%94%d7%a9%d7%95%d7%a2%d7%a8-%d7%a1%d7%98%d7%a4%d7%9f-%d7%9e%d7%a8%d7%99%d7%a0%d7%95%d7%91%d7%99%d7%a5-%d7%a1%d7%99%d7%9b%d7%9d-%d7%91%d7%9e%d7%95%d7%a2%d7%93%d7%95%d7%9f-%d7%9c%d7%a2%d7%95%d7%a0/', text: 'מרינוביץ’ (30) שוער נבחרת ניו זינלנד שיחק בעברו בגרמניה וב-MLS. בעונה שעברה שיחק בנוף הגליל שם רשם 28 הופעות ליגה.' }, 
{ headline: 'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון', Id: 'ab', photo:'https://www.htafc.co.il/wp-content/uploads/2022/06/%D7%94%D7%95%D7%A8%D7%93%D7%94.jpg', url: 'https://www.htafc.co.il/2022/06/12/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%90%d7%97%d7%95%d7%a8%d7%99-%d7%92%d7%95%d7%93%d7%a4%d7%a8%d7%99%d7%93-%d7%a8%d7%95%d7%9e%d7%90%d7%a8%d7%98%d7%95-%d7%a1%d7%99%d7%9b%d7%9d-%d7%90%d7%aa-%d7%aa%d7%a0/', text:'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון לעונה אחת עם אופציה לעונה נוספת ויחתום בכפוף למעבר בדיקות רפואיות' },
{ headline: 'הקשר הישאם לאיוס חתם במועדון ל-3 שנים', Id: 'abc', photo:'https://www.htafc.co.il/wp-content/uploads/2022/06/welcome_Hisham-Layous.png', url: 'https://www.htafc.co.il/2022/06/10/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%99%d7%a9%d7%90%d7%9d-%d7%9c%d7%90%d7%99%d7%95%d7%a1-%d7%a0%d7%a8%d7%9b%d7%a9-%d7%9e-%d7%9e-%d7%a1-%d7%9b%d7%a4%d7%a8-%d7%a7%d7%90%d7%a1%d7%9d-%d7%95%d7%97%d7%aa/', text:'הקשר הישאם לאיוס נרכש מ-מ.ס כפר קאסם וחתם במועדון ל-3 שנים' } ];



export async function getAllTransfers(req, res) {
	try {
		res.send({ transfers });
	} catch (error) {
		console.log('transfers array not valid');
		res.send({ error: error.message });
	}
}
export interface score{
    fTeamSymbol:string,
	sTeamSymbol:string,
	id:string,
	fTeamScore:string,
	sTeamScore:string,
}

let score: Array<score> = [ { fTeamSymbol: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png', sTeamSymbol: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png',
                              id:'a', fTeamScore: '3', sTeamScore: '0' }]

export async function getScore(req, res) {
	try {
		res.send({ score });
	} catch (error) {
		console.log('score array not valid');
		res.send({ error: error.message });
	}
}

export interface article{
    headline:string,
    Id:string,
	photo:string,
    url:string,
    text:string,
}

let articles: Array<article> =  [ { headline: 'השוער סטפן מרינוביץ’ סיכם במועדון לעונה אחת.', Id: 'a',photo:'https://www.htafc.co.il/wp-content/uploads/2022/06/7OMXKR6DCZOPHJILYFONMJXGPA.jpg', url: 'https://www.htafc.co.il/2022/06/15/%d7%94%d7%a9%d7%95%d7%a2%d7%a8-%d7%a1%d7%98%d7%a4%d7%9f-%d7%9e%d7%a8%d7%99%d7%a0%d7%95%d7%91%d7%99%d7%a5-%d7%a1%d7%99%d7%9b%d7%9d-%d7%91%d7%9e%d7%95%d7%a2%d7%93%d7%95%d7%9f-%d7%9c%d7%a2%d7%95%d7%a0/', text: 'מרינוביץ’ (30) שוער נבחרת ניו זינלנד שיחק בעברו בגרמניה וב-MLS. בעונה שעברה שיחק בנוף הגליל שם רשם 28 הופעות ליגה.' }, 
{ headline: 'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון', Id: 'ab', photo:'https://www.htafc.co.il/wp-content/uploads/2022/06/%D7%94%D7%95%D7%A8%D7%93%D7%94.jpg', url: 'https://www.htafc.co.il/2022/06/12/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%90%d7%97%d7%95%d7%a8%d7%99-%d7%92%d7%95%d7%93%d7%a4%d7%a8%d7%99%d7%93-%d7%a8%d7%95%d7%9e%d7%90%d7%a8%d7%98%d7%95-%d7%a1%d7%99%d7%9b%d7%9d-%d7%90%d7%aa-%d7%aa%d7%a0/', text:'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון לעונה אחת עם אופציה לעונה נוספת ויחתום בכפוף למעבר בדיקות רפואיות' },
{ headline: 'הקשר הישאם לאיוס חתם במועדון ל-3 שנים', Id: 'abc', photo:'https://www.htafc.co.il/wp-content/uploads/2022/06/welcome_Hisham-Layous.png', url: 'https://www.htafc.co.il/2022/06/10/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%99%d7%a9%d7%90%d7%9d-%d7%9c%d7%90%d7%99%d7%95%d7%a1-%d7%a0%d7%a8%d7%9b%d7%a9-%d7%9e-%d7%9e-%d7%a1-%d7%9b%d7%a4%d7%a8-%d7%a7%d7%90%d7%a1%d7%9d-%d7%95%d7%97%d7%aa/', text:'הקשר הישאם לאיוס נרכש מ-מ.ס כפר קאסם וחתם במועדון ל-3 שנים' } ];


export async function getAllArticales(req, res) {
	try {
		res.send({ articles });
	} catch (error) {
		console.log('articles array not valid');
		res.send({ error: error.message });
	}
}