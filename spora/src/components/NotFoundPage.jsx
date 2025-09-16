import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to="/">
                <button>Go home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;