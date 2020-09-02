import dummyData from "./dummyData.json";
// const fetchdata = async () => {
//   try {
//     const response = await fetch("https://api.deezer.com/chart/albums", {
//       method: "GET",

//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       },
//     });
//     console.log(response);
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// };

const fetchData = () => {
  console.log(dummyData);
  return dummyData.albums.data;
};
export const fetchAlbum = (id) => {
  let selectedAlbum = dummyData.albums.data.filter((album) => {
    console.log("ALBUMS IN FILTER", album.id == id);
    return album.id == id;
  });
  console.log("selected album", selectedAlbum[0]);
  return selectedAlbum[0];
};

export default fetchData;
