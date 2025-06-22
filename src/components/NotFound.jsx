import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-neutral-300 mb-4">404</h1>
            <p className="text-xl text-neutral-400 mb-8">Page Not Found</p>
            <Link to="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;