/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const AppWrapper = styled.div`
  background: var(--grayDark);
  `;

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      });
    // eslint-disable-next-line comma-spacing
  }, []);

  return (
    <AppWrapper>
      <PageDefault paddingAll={0}>

        {dadosIniciais.length === 0 && (<div>Loading ...</div>)}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

      </PageDefault>
    </AppWrapper>
  );
}

export default Home;
