import mergeImages from 'merge-images';
import '../scss/nftImages.scss';

export default function Nft({ nftObject }) {
  const {
    backgrounds,
    bodies,
    faces,
    hats,
  } = nftObject;

  const download = () => {
    mergeImages([
      `./images/test_images/backgrounds/${backgrounds}.png`,
      `./images/test_images/bodies/${bodies}.png`,
      `./images/test_images/faces/${faces}.png`,
      `./images/test_images/hats/${hats}.png`
    ]).then((b64) => {
      console.log(b64)
    });
  }

  return (
    <div className="nft-box">
      <button onClick={() => download()}>Download</button>
      <img className="nft-img" src={require(`../images/test_images/backgrounds/${backgrounds}.png`)} alt="not found" />
      <img className="nft-img" src={require(`../images/test_images/bodies/${bodies}.png`)} alt="not found" />
      <img className="nft-img" src={require(`../images/test_images/faces/${faces}.png`)} alt="not found" />
      <img className="nft-img" src={require(`../images/test_images/hats/${hats}.png`)} alt="not found" />
    </div>
  );
};