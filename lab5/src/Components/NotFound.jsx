import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p>There's nothing here!</p>
            <Link 
                to="/"
            >
            Back to Home
            </Link>
        </div>
    )
}