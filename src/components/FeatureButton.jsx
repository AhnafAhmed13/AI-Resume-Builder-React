import { Link } from 'react-router-dom';

export default function FeatureButton(props) {
    return (
        <Link to={`/${props.link}`}>
        <button className="px-6 py-3 bg-purple-800 text-white font-semibold rounded-md hover:bg-purple-600">
          {props.value}
        </button>
      </Link>
    );
}