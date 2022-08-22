import { Link, useParams } from "react-router-dom";
import { flower } from "../rose/Rose";
import { flowers } from "../rose/Rose";
const UnderRose = () => {
    const { flowerId } = useParams();
    const flower = getflower(flowerId, flowers);
    return (
        <div>
        <Link to="/rose">Back</Link>
        <h1> flower: {flower ? flower.name : null}</h1>
      </div>
    )
}
function getflower(
    flowerId: string | undefined,
    flowers: flower[]
  ): flower | undefined {
    if (flowerId) {
      return flowers.find((flower) => flower.id === flowerId);
    } else {
      return undefined;
    }
  }
export default UnderRose