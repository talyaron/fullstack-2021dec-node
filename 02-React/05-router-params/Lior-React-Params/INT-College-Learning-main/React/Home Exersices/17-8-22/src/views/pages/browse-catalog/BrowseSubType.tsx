import BrowseSubTypeTitle from "./BrowseSubTypeTitle";
import BrowseSubTypeItem from "./BrowseSubTypeItem";
const { v4: uuidv4 } = require('uuid');

interface BrowseSubType {
    type: string,
    backType: string
}

export interface Items {
    type: string,
    id: string,
    imgSrc: string,
    imgSrc2: string,
    price: number,
    description: string
}

export const items:Array<Items> = [
    {
        type: 'T-Shirts',
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/05/24/1653385151dd0bac320a1d2135e0c101af9183f523_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/05/24/1653385153e0d95f5728653f6a5ff49c70b81fc7e0_thumbnail_900x.webp",
        price: 39.49,
        description: "Extended Sizes Letter Graphic Tee"
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/04/06/1649214874ccf04ce3fd228d3d208473d7a63366d3_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/04/06/16492148663064b062fe3becf7b2beb9db12975a1a_thumbnail_900x.webp",
        price: 44.99,
        description: "Solgen & Palm Tree Print Tee"
    },
    {
        type: 'T-Shirts',
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/03/16/1647407458f7f9a10e0f33eda4ee056245f77963e6_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/10/25/16351479056954363f7b14523d1ab5d08f65c7947c_thumbnail_900x.webp",
        price: 24.99,
        description: "Palm Tree & Letter Graphic Tee "
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/07/25/165871730994b00ecb74c947ec6deeb99ab2ba7517_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/07/25/1658717307be89e6d873e7cfea351480b18762372a_thumbnail_900x.webp",
        price: 21.99,
        description: "Men Graphic Cartoon Tee"
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/02/11/1644541565d89d1441fe628485da2a4563e75e2439_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/11/29/163816492534218f9bf603871185925d431f417ccb_thumbnail_900x.webp",
        price: 24.99,
        description: "Men Mountain Print Tee"
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/04/18/16502751599968ed3e1529a9fbc9c77104cdf3e536_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/04/17/16501859737a71cdc9aff344ea6274134700520b0a_thumbnail_900x.webp",
        price: 14.99,
        description: "Men Rose & Solgen Graphic Tee"
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/06/20/165568965350a5d50ca77ff2dd5700942e73624b83_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/07/14/1657771091936daf836cabadb0901c4b0d44f62c9e_thumbnail_900x.webp",
        price: 14.99,
        description: "Men Figure & Slogan Graphic Tee"
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/05/26/16535288970e1e37dfd3ceb96fc074982cf199fc6c_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/05/26/1653528898bc6432a0419c711b65020f90f54e66c5_thumbnail_900x.webp",
        price: 19.99,
        description: "Tropical Print High Low Hem Tee"
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/02/23/16456118548d69b932a00ee164fac50ba1703017eb_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/12/23/1640244435f31dfe5b9bb4711ab3e711818bb45775_thumbnail_900x.webp",
        price: 24.99,
        description: "Men Cartoon Face Print Tee"
    },
    {
        type: "T-Shirts",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2021/08/27/1630042910aa1ed8a28027926029b6c110339ab4bf_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/08/27/1630042911e522d445e3012c8d25040bdee2433b46_thumbnail_900x.webp",
        price: 14.99,
        description : "Men 3D Geo Print Short Sleeve Tee"
    },
    {
        type:"Long Sleeves",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/07/25/16587346551897a98358f56322dcf8b9c01ed1a1c9_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/07/25/16587346561110ab4ec729b2d0703b614e3e4a0225_thumbnail_900x.webp",
        price: 19.99,
        description: "Men Letter Graphic Tee"
    },
    {
        type: "Long Sleeves",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/01/08/1641615220a2bee327d02441cce4d33918f144aea2_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/11/05/163610727373fc67c2ab4a47d4999386701c36cdde_thumbnail_900x.webp",
        price: 14.99,
        description: "Men Expression Print Tee" 
    },
    {
        type: "Long Sleeves",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/02/21/16454108973350e6324cd2e1c72534db88c9171b44_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/02/21/16454108998b9703edb58bc637d00e0ca9f4f77560_thumbnail_900x.webp",
        price: 9.99,
        description: "Men Letter Patched Detail Tee"
    },
    {
        type: "Long Sleeves",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/06/21/1655788096b9757643e5e3aa570983a9d64c10b2c6_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/06/21/16557880989fd5506b94223bb82bbc0e056c47addf_thumbnail_900x.webp",
        price: 24.99,
        description: "Men Letter Graphic Round Neck Tee"
    },
    {
        type: "Long Sleeves",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2021/10/29/16354733967367ccbf5f769eadfb59463c92ffd1f4_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/10/26/1635237054251ddc4bc1315ba112719ec83aab6def_thumbnail_900x.webp",
        price: 21.99,
        description: "Men Dinosaur Print Tee"
    },
    {
        type: "Long Sleeves",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2021/10/25/16351244808df6fd70ae1acbfa5aa3d11b59951216_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/10/25/1635124482dd37518fb160b56699e1bba821501bf9_thumbnail_900x.webp",
        price: 19.99,
        description: "Men Letter Graphic Tee"
    },
    {
        type: "Sweaters",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2021/08/17/16291964670d42f17d25569f76e0b8c3d5dfadf220_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/08/17/1629196470f6f1d943b334c08c40af9c5b85f3a69f_thumbnail_900x.webp",
        price: 24.99,
        description: "Men High Neck Solid Sweater"
    },
    {
        type: "Sweaters",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/07/14/1657775932a70a21515c9092bd6ffba2c81e18371a_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/07/14/1657775934ab1104dfbe86fc34ba003a44ced86000_thumbnail_900x.webp",
        price: 29.99,
        description: "Men Letter Pattern Sweater"
    },
    {
        type: "Sweaters",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/06/28/165638927820001b4cbb316d0d0ecff20a4189c8eb_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/06/28/1656389280dab0ac27165295eec71af5f191c0d32e_thumbnail_900x.webp",
        price: 21.99,
        description: "Striped & Letter Graphic Sweatshirt"
    },
    {
        type: "Sweaters",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/06/30/1656577742724e9284d79224cb01e8858ef68e4f75_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/06/30/1656577747627218ec4db41e5a4dd400ef026f7d92_thumbnail_900x.webp",
        price: 19.99,
        description: "Landscape Pattern Sweater"
    },
    {
        type: "Sweaters",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2021/10/13/1634120042c4e5c5c0f9dbbaab125cf0d93d7b9178_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/10/13/16341200454cbee6b876f14b938696ff98036f4383_thumbnail_900x.webp",
        price: 24.99,
        description: "Men Graphic Print Sweatshirt"
    },
    {
        type: "Sweaters",
        id: uuidv4(),
        imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/07/06/1657084166c98158688f79f3b8ab99b23685648d37_thumbnail_900x.webp",
        imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/07/06/165708416918c550cdba61f1df86004e36aea1e401_thumbnail_900x.webp",
        price: 19.99,
        description: "Slogan & Astronaut Print Sweatshirt"
    }
]

const BrowseSubType = ({ type, backType }: BrowseSubType) => {
    
    return (
        <div className="browse-subtype">
            <BrowseSubTypeTitle type={type} backType={backType} />
            <div className="browse-subtype__items">
                {items.map( item => {
                    if(type === item.type) {
                        return (<BrowseSubTypeItem item={item} key={item.id}/>)
                    }
                })}
            </div>
        </div>
    );
}

export default BrowseSubType;