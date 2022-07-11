import youtubeSearch from "youtube-api-v3-search";
import YTApi from "./../../Api";

const API_KEY = YTApi;
// ação para iniciar a busca.
export const buscaVideoInico = () => {
  return {
    type: "BUSCA_VIDEO_INICIO",
    carregando: true,
    erro: false,
  };
};
// ação para retornar a lista de videos.
export const buscaVideoSucesso = (videos) => {
  return {
    type: "BUSCA_VIDEO_SUCESSO",
    videos,
    carregando: false,
    erro: false,
  };
};
// ação para retornar erro se der ruin na chamada da API.
export const buscavideoErro = () => {
  return {
    type: "BUSCA_VIDEO_ERRO",
    carregando: false,
    err: true,
  };
};
// gerencia todas as ações e passa qual e o termo.
// termo e o evento criado para pesquisa no arquivo (SearchBar.jsx)
export const buscaVideo = (termo) => {
  return (dispatch) => {
    // chamando meu action de buscaVideoInico.
    // dispatch chama as actions
    dispatch(buscaVideoInico());
    // api do youtube ira retornar sucesso ou erro.
    youtubeSearch(API_KEY, { q: termo })
      //se retornar sucesso mostramos o then.
      // os items dentro do data são as lista de videos.
      .then((data) => dispatch(buscaVideoSucesso(data.items)))
      // se retornar erro mostramos o erro.
      .catch(() => dispatch(buscavideoErro()));
  };
};
