import '../scss/nftImages.scss';

export default function Nft({ nftObject }) {
  return (
    <div class="nft-box">
      <img class="nft-img" src={require(`../images/test_images/backgrounds/${nftObject.backgrounds}.png`)} alt="not found" />
      <img class="nft-img" src={require(`../images/test_images/bodies/${nftObject.bodies}.png`)} alt="not found" />
      <img class="nft-img" src={require(`../images/test_images/faces/${nftObject.faces}.png`)} alt="not found" />
      <img class="nft-img" src={require(`../images/test_images/hats/${nftObject.hats}.png`)} alt="not found" />
    </div>
  );
};