import logo from './logo.svg';
import './App.css';
import AddComponent from './component/AddComponent';
import ShowImage from './component/ShowImageComponent';
function App() {
  const data = [
    {
      id: 1,
      name: "dung1",
      age: 1,
      url: "https://allimages.sgp1.digitaloceanspaces.com/thuatngunet/2021/05/Waifu-la-gi-Vi-sao-Waifu-rat-duoc-nhieu-nguoi.jpg",
      arrValue: [2,4,1,3,4]
    },
    {
      id: 2,
      name: "phong1",
      age: 3,
      url :"https://upload.motgame.vn/photos/motgame-vn/2021/08/top_nhan_vat_nu_anime_duoc_yeu_thich_2021_2.jpg",
      arrValue: [2,4,5,3,2]
    }
  ];

  return (
    <div>
      <AddComponent firstNumber={1} secoundNumber={2} />
      <ShowImage data={data} />
    </div>
  );
}

export default App;
