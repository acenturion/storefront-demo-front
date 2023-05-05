const getVideoId = (url: string) => {
    let videoId : string | null = '';
    if (url.includes('youtube.com')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v');
    } else if (url.includes('youtu.be')) {
      const urlParts = url.split('/');
      videoId = urlParts[urlParts.length - 1];
    }
    return videoId;
}

const formatPrice = (value: number) => {
  const numeroFormateado = value.toFixed(2);
  return 'US$ ' + numeroFormateado;
}


export {
    getVideoId,
    formatPrice,
}

