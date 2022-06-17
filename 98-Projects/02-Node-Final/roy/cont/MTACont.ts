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
let transfers: Array<transfer> = [ { headline: 'רועי עמדי חתם ל-5 שנים במכבי', Id: 'a',photo:'https://static.maccabi-tlv.co.il/wp-content/uploads/2022/06/MTA_202206141144252afa12fd4f15e1ddfb888d96d0adda08.jpg', url: 'https://www.maccabi-tlv.co.il/2022/06/%d7%a8%d7%95%d7%a2%d7%99-%d7%a2%d7%9e%d7%93%d7%99-%d7%97%d7%aa%d7%9d-%d7%9c-5-%d7%a9%d7%a0%d7%99%d7%9d-%d7%91%d7%9e%d7%9b%d7%91%d7%99/', text: 'רועי עמדי, (18) חתם על חוזה חדש במכבי תל אביב כשהשוער המתנשא לגובה 194 ס”מ הבטיח את עתידו עד תום עונת 2026/27.' }, 
{ headline: 'יוריס ואן אובריים חתם ל-3 שנים במכבי', Id: 'ab', photo:'https://static.maccabi-tlv.co.il/wp-content/uploads/2022/06/MTA_202206130400200f86499f19313c266bc8c370fdc62904.jpg', url: 'https://www.maccabi-tlv.co.il/2022/06/%d7%99%d7%95%d7%a8%d7%99%d7%a1-%d7%95%d7%90%d7%9f-%d7%90%d7%95%d7%91%d7%a8%d7%99%d7%99%d7%9d-%d7%97%d7%aa%d7%9d-%d7%9c-3-%d7%a9%d7%a0%d7%99%d7%9d-%d7%91%d7%9e%d7%9b%d7%91%d7%99/', text:'הקשר ההולנדי בן ה-28 מצטרף למכבי מאוטרכט לאחר שחתם על חוזה ל-3 שנים.' },
{ headline: 'ולאדן איביץ מונה למאמן מכבי תל אביב', Id: 'abc', photo:'https://static.maccabi-tlv.co.il/wp-content/uploads/2022/06/MTA_2022061205273713384f96102bb70bcb480140a7ea2cd5.jpg', url: 'https://www.maccabi-tlv.co.il/2022/06/%d7%95%d7%9c%d7%90%d7%93%d7%9f-%d7%90%d7%99%d7%91%d7%99%d7%a5-%d7%9e%d7%95%d7%a0%d7%94-%d7%9b%d7%9e%d7%90%d7%9e%d7%9f-%d7%9e%d7%9b%d7%91%d7%99/', text:'איביץ חוזר למכבי לשתי עונות נוספות ויעזר במילוש וסלינוביץ, סינישה גוגיץ כעוזרי מאמן, חריסטוס קלפקיס כמאמן השוערים ובמאמן הכושר פבלוס גוציס' } ];



export async function getAllTransfers(req, res) {
	try {
		res.send({ transfers });
	} catch (error) {
		console.log('transfers array not valid');
		res.send({ error: error.message });
	}
}

export const updateTransfer = async (req, res) => {
	try {
		const { results } = req.body;
		if (!results) throw new Error('results is required');
		transfers.forEach((transfer) => {
			console.log(typeof transfer.Id);
			if (transfer.Id === String(results.Id)) {
				transfer.headline= results.headline;
               transfer.Id=results.Id;
             	transfer.photo=results.photo;
                transfer.url=results.url;
                transfer.text=results.text;
				console.log(transfers)
			}
		});
		res.send(transfers);
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
};
export interface score{
    fTeamSymbol:string,
	sTeamSymbol:string,
	
	fTeamScore:string,
	sTeamScore:string,
}

let score: Array<score> = [ { fTeamSymbol: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png', sTeamSymbol: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png',
                               fTeamScore: '3', sTeamScore: '0' }]

export async function getScore(req, res) {
	try {
		res.send({ score });
	} catch (error) {
		console.log('score array not valid');
		res.send({ error: error.message });
	}
}
export const updateScore = async (req, res) => {
	try {
		const { results } = req.body;
		if (!results) throw new Error('results is required');
				score[0]=results	
		res.send(score);
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
};

export interface article{
    headline:string,
    Id:string,
	photo:string,
    url:string,
    text:string,
}

let articles: Array<article> = [ { headline: 'מתן בלטקסה סיכם לשלוש שנים באוסטריה וינה, צפוי לחתום במועדון', Id: 'a',photo:'https://sport1images.maariv.co.il/image/upload/1099154', url: 'https://sport1.maariv.co.il/israeli-soccer/israelis-abroad/article/898010/', text: 'הבלם שסיים את חוזהו במכבי תל אביב כבר הגיע לבירת אוסטריה והשלים את הבדיקות הרפואיות לקראת הצטרפותו לקבוצה שסיימה את העונה במקום השלישי ותתמודד בפלייאוף הליגה האירופית.' }, 
{ headline: 'האקדמאי: מה יביא איתו יוריס ואן אובריים למכבי תל אביב?', Id: 'ab', photo:'https://sport1images.maariv.co.il/image/upload/1099093', url: 'https://sport1.maariv.co.il/magazine/article/897901/', text:'יוריס ואן אובריים חובב מתמטיקה ופיזיקה, מתעמק במשבר האקלים וצופה במשך שעות בכדורגל מכל העולם. האהבה שלו לעולמות חדשים הביאה אותו עד מכבי תל אביב ואחרי שביסס את מעמדו כשחקן לגיטימי בליגה ההולנדית, הוא ינסה להפוך לאינייסטה של ולאדן איביץ' },
{ headline: 'דסה: "מעריך את ההצעה ממכבי ת"א, אבל המטרה שלי להתקדם"', Id: 'abc', photo:'https://sport1images.maariv.co.il/image/upload/1099014', url: 'https://sport1.maariv.co.il/israeli-soccer/ligat-haal/article/897626/', text:'מגן נבחרת ישראל הודה: "מכבי תל אביב יודעת כמה אני אוהב ומכבד אותה, אבל בקרוב תדעו על עתידי ותהיו שמחים בשבילי". גם דור פרץ מסרב כרגע להתחייב לצהובים' } ];

export async function getAllArticales(req, res) {
	try {
		res.send({ articles });
	} catch (error) {
		console.log('articles array not valid');
		res.send({ error: error.message });
	}
}

export const updateArticle = async (req, res) => {
	try {
		const { results } = req.body;
		if (!results) throw new Error('results is required');
		articles.forEach((article) => {
			console.log(typeof article.Id);
			if (article.Id === String(results.Id)) {
				article.headline= results.headline;
               article.Id=results.Id;
             	article.photo=results.photo;
                article.url=results.url;
                article.text=results.text;
			}
		});
		res.send(articles);
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
};