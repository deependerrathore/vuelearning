<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="question of questions"
      :key="question._id"
    >
      <template v-slot:header>
        <div dark>{{question.title}}</div>
      </template>
      <v-card>
        <v-card-text class="blue-grey lighten-1">{{question.content}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
    props:['questions']
}
</script>