import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from './../../../hooks/useForm';
import Button from './../../../components/Button/index';
import config from '../../../config';
import categoriasRepository from '../../../repositories/categorias';
const ULR_CATEGORIA = `${config.URL_API}/categorias`;
function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    titulo: '',
    cor: '',
    title_link:'',
    url_link:''
  };
  const [categorias, setCategorias] = useState([]);
  const {handleChange, values, clearForm}= useForm(valoresIniciais);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = `${ULR_CATEGORIA}`;
      console.log(URL);
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        categoriasRepository.create({
          titulo: values.titulo,
          cor: values.cor,
          link_extra: {
            text: values.title_link,
            url: values.url_link
          }
        })
        console.log(categorias);
        console.log(values);
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="????"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Título do link extra"
          type="????"
          name="title_link"
          value={values.title_link}
          onChange={handleChange}
        />
        <FormField
          label="URL do link extra"
          type="????"
          name="url_link"
          value={values.url_link}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
