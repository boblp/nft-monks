import mergeImages from 'merge-images';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import '../scss/nftImages.scss';

export default function Nft({ nftObject, controls, size, viewJSON }) {

  const imgArray = Object.keys(nftObject).map(e=>{
    try{
      return require(`../images/test_images/${e}/${nftObject[e]}.png`);
    }catch(e){
      return '';
    }
  });

  const download = () => {
    mergeImages(imgArray).then((b64) => {
      downloadImg(b64, "image", ".png");
    });
  }

  const downloadImg = (b64, fileName, format) =>{
    const a = document.createElement("a");
    a.href = `${b64}`;
    a.download = `${fileName}${format}`;
    a.click();
  }

  const Controls = () => {
    return (
      <div style={{ display: 'contents' }}>
        <Button 
          variant="contained" 
          size="small"
          sx={{ borderRadius: '0px', minWidth: '0px' }}
          endIcon={<DownloadIcon />}
          onClick={() => {
            download();
          }} />
        <Button 
          variant="contained"
          size="small"
          sx={{ borderRadius: '0px', minWidth: '0px' }}
          endIcon={<RemoveRedEyeIcon />}
          onClick={() => {
            viewJSON(nftObject);
          }} />
      </div>
    )
  }

  return (
    <div className="nft-box" style={{ width: size }}>
      { controls && <Controls /> }
      { imgArray.map((img, i)=>{
        return (
          <img className="nft-img" key={i} src={img} alt="not found" />
        );
      })}
    </div>
  );
};