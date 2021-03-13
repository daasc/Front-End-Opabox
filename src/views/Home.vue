<template>
  <div class="container">
    <div class="home">
      <nav class="nav">
        <img
          class="nav__logo"
          src="../assets/img/logo.png"
          alt="logo marcar Opabox"
        >
        <div class="nav__profile">
          <a
            href="https://www.linkedin.com/in/paulo-sobrinho-93b527185/"
            target="_blank"
            class="link"
            rel="noopener noreferrer"
          >paulo sobrinho <img
              class="icons"
              src="../assets/img/linkedin-logo.svg"
              alt="icone do linkedin"
            ></a>
          <a
            href="https://github.com/daasc"
            target="_blank"
            class="link"
            rel="noopener noreferrer"
          >daasc <img
              class="icons"
              src="../assets/img/icons8-github.svg"
              alt="icone do github"
            ></a>
        </div>
      </nav>
      <section class="titulo">
        <h1>Teste Front-End</h1>
        <img
          src="../assets/img/opabox.png"
          alt="logo marcar Opabox "
        >
      </section>
    </div>
    <section class="lista_testes">
      <card
        nomeTeste="listaOrdenada"
        :class="{opacity: !interlaceAtivado}"
      >
        <h2 slot="header">Ordenar Lista</h2>
      </card>
      <card
        nomeTeste="interlace"
        :class="{opacity: interlaceAtivado}"
      >
        <h2 slot="header">Interlace</h2>
      </card>
    </section>
    <main class="conteudo">
      <ordenar-lista v-if="interlaceAtivado" />
      <interlace v-else />
    </main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    card: () => import('@/components/Card.vue'),
    interlace: () => import('@/components/Interlace.vue'),
    'ordenar-lista': () => import('@/components/OrdenarLista.vue'),
  },
  data() {
    return {
      interlaceAtivado: false,
    };
  },
  methods: {
    ativarInterlace() {
      this.interlaceAtivado = false;
    },
    ativarOrdenaLista() {
      this.interlaceAtivado = true;
    },
  },
};
</script>
<style lang="scss" scoped>
$color-primary: #373435;
$color-font: #ececec;
.opacity {
  opacity: 0.3;
}
.container {
  margin: 0 auto;
  .home {
    background-color: $color-primary;
    height: 600px;
    margin-bottom: 10px;
    .nav {
      display: flex;
      justify-content: space-between;
      .nav__logo {
        height: 45px;
        padding: 10px;
      }
      .nav__profile {
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        width: 200px;
        .link {
          align-items: center;
          display: flex;
          color: $color-font;
          justify-content: flex-end;
          font-family: "ExtraLight";
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 5px;
          text-decoration: none;
          &:first-child .icons {
            border-radius: 4px;
          }
          &:last-child .icons {
            border-radius: 20px;
          }
          .icons {
            background-color: white;
            margin-left: 5px;
            width: 25px;
          }
        }
      }
    }
  }
  .titulo {
    margin-top: 250px;
    text-align: center;
    h1 {
      color: #fff;
      font-size: 2.3rem;
      font-family: "Medium";
      margin-bottom: 10px;
    }
  }
  .lista_testes {
    display: flex;
    flex-wrap: wrap;
  }
  .conteudo {
    margin-top: 50px;
  }
}
@media screen and (min-width: 10px) {
  .container {
    padding: 0px;
    width: 100%;
    .home {
      width: 100%;
    }
    .lista_testes {
      justify-content: center;
      width: 100%;
    }
  }
}

@media screen and (min-width: 1000px) {
  .container {
    padding: 10px;
    width: 90%;
    .home {
      border-radius: 10px 10px 0 0;
    }
    .lista_testes {
      justify-content: space-between;
      width: 55%;
    }
  }
}
@media screen and (min-width: 1700px) {
  .container {
    .lista_testes {
      width: 40%;
    }
  }
}
</style>
