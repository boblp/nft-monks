import mergeImages from 'merge-images';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
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
      <Button 
        variant="contained" 
        size="small"
        sx={{ borderRadius: '0px' }}
        endIcon={<DownloadIcon />}
        onClick={() => {
          download();
        }} />
      <Button 
        variant="contained"
        size="small"
        sx={{ borderRadius: '0px' }}
        endIcon={<RemoveRedEyeIcon />}
        onClick={() => {
          download();
        }} />
      <img className="nft-img" src={require(`../images/test_images/backgrounds/${backgrounds}.png`)} alt="not found" />
      <img className="nft-img" src={require(`../images/test_images/bodies/${bodies}.png`)} alt="not found" />
      <img className="nft-img" src={require(`../images/test_images/faces/${faces}.png`)} alt="not found" />
      <img className="nft-img" src={require(`../images/test_images/hats/${hats}.png`)} alt="not found" />
    </div>
  );
};