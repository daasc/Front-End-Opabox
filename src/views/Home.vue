<template>
  <div class="container">
    <div class="home">
      <nav class="nav">
        <img
          class="nav__logo"
          src="../assets/img/logo.png"
          alt=""
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
              alt=""
            ></a>
          <a
            href="https://github.com/daasc"
            target="_blank"
            class="link"
            rel="noopener noreferrer"
          >daasc <img
              class="icons"
              src="../assets/img/icons8-github.svg"
              alt=""
            ></a>
        </div>
      </nav>
      <section class="titulo">
        <h1>Teste Front-End</h1>
        <img
          src="../assets/img/opabox.png"
          alt=""
          srcset=""
        >
      </section>
    </div>
    <section class="testes">
      <card
        teste="listaOrdenada"
        :class="{opacity: !interlaceAtivado}"
      >
        <h2 slot="header">Ordenar Lista</h2>
      </card>
      <card
        teste="interlace"
        :class="{opacity: interlaceAtivado}"
      >
        <h2 slot="header">Interlace</h2>
      </card>
    </section>
    <main class="conteudo">
      <ordenar-lista v-if="interlaceAtivado"/>
      <interlace  v-else/>
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
<style lang="scss" >
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
        width: 200px;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        .link {
          display: flex;
          text-decoration: none;
          font-family: "ExtraLight";
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 5px;
          color: $color-font;
          align-items: center;
          justify-content: flex-end;
          &:first-child .icons {
            border-radius: 4px;
          }
          &:last-child .icons {
            border-radius: 20px;
          }
          .icons {
            margin-left: 5px;
            background-color: white;
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
      margin-bottom: 10px;
      font-family: "Medium";
    }
  }
  .testes {
    display: flex;
    flex-wrap: wrap;
  }
  .conteudo {
    margin-top: 50px;
  }
}
@media screen and (min-width: 10px) {
  .container {
    width: 100%;
    padding: 0px;
    .home {
      width: 100%;
    }
    .testes {
      width: 100%;
      justify-content: center;
    }
  }
}

@media screen and (min-width: 1000px) {
  .container {
    width: 90%;
    padding: 10px;
    .home {
      border-radius: 10px 10px 0 0;
    }
    .testes {
      width: 55%;
      justify-content: space-between;
    }
  }
}
@media screen and (min-width: 1700px) {
  .container {
    .testes {
      width: 40%;
    }
  }
}
</style>
