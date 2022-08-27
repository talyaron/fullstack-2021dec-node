import { Link } from 'react-router-dom';
type Props = {
    
};
export const Page404 = (props: Props) => {
    return (
        <div>
            <h1>Error404: This Page does not exist</h1>
            <Link to="/">Click here to go back</Link>
        </div>
    );
};

export default Page404