import Painting from './components/Painting';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Painting
        title={paintings[0].title}
        profilUrls={paintings[0].author.url}
        price={paintings[0].price}
      />
      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        profilUrls={paintings[1].author.url}
        author={paintings[1].author.tag}
        price={paintings[1].price}
      />
    </div>
  );
}
