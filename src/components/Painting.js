import defaultUrl from './default.png';
import PropTypes from 'prop-types';

export default function Painting({
  url = defaultUrl,
  title,
  profilUrls,
  author = 'не известен',
  price,
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автоr: <a href={profilUrls}>{author}</a>
      </p>
      <p>Price: {price} credits</p>
      <button type="button">Add in korzina</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string,
};
