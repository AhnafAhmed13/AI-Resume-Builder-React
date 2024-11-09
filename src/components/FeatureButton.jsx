import { Link } from 'react-router-dom';

export default function FeatureButton(props) {
    return (
        <Link to={`/${props.link}`}>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          {props.value}
        </button>
      </Link>
    );
}