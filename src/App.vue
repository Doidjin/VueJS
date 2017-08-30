<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos">
         <img v-bind:src="foto.url" v-bind:alt="foto.titulo"> 
      </li>
    </ul>
 
  </div>
</template>

<script>
export default {

  data() {
    return {
      titulo: 'Alurapic',
      fotos: []

    }
  },

  created(){

    // 1 - Pedindo para o $http realizar a requisicao do tipo get - O retorno será uma promise
    // 2 - Dado a promise,pegamos seu retorno em um formato JSON, que nos retorna a lista de fotos
    // 3 - O res.json() também nos dará uma promise,
    // portanto precisamos retornar sua lista de fotos através do parâmetro fotos.
    // O que fazemos é atribuir essa nova lista à propriedade this.fotos, data-bind do Vue
    // se encarregará de atualizar a view com os novos dados.
    // 4 - Por fim logamos um erro, com o outro parâmetro que a Promise nos fornece(sucess, error).
    // Caso a URL esteja incorreta ou a internet caia.
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }

}
</script>

<style>
</style>
