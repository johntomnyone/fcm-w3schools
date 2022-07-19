const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5027dae41fmshddccfe366df8fc7p1de38ajsn80ad82b24032',
		'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
	}
};

const getVidoe = async() => {
  inputUrl = 'https://www.youtube.com/watch?v=6qeT4rvcak0';
  const url = `https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=${inputUrl}&format=mp3&responseFormat=json&lang=en`;
  const fetchData = await fetch(url, options);
  const getData = await fetchData.json();

  console.log(getData);
}

getVidoe();
