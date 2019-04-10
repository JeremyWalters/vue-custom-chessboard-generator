<template>
	<v-app id="app">
		<v-toolbar color="primary" app dark>
			<v-toolbar-title>Chess Board Generator</v-toolbar-title>
		</v-toolbar>
		<v-content>
			<v-container grid-list-xs>
				<v-flex xs3>
					<v-text-field label="Chess Board Size" v-model.number="boardSizeInput"></v-text-field>
				</v-flex>
				<v-flex xs3>
					<v-text-field label="Block Size" v-model.number="blockSize"></v-text-field>
				</v-flex>
				<v-container class="board-container" grid-list-md text-xs-center>
					<v-layout v-for="(size, rowIndex) in boardSizeInput" :key="rowIndex" class="justify-center">
						<div
							:style="`background-color: ${findColor(index, rowIndex)}; width: ${blockSize}px; height: ${blockSize}px;`"
							v-for="(size, index) in boardSizeInput"
							:key="index"
							class="block"
						></div>
					</v-layout>
				</v-container>
			</v-container>
		</v-content>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
	private boardSizeInput = 0;
	private blockSize = 10;

	private findColor (index: number, rowIndex: number) {
	  if (rowIndex % 2 === 0) index++;
	  return index % 2 === 0 ? 'white' : 'black';
	}
}
</script>
<style lang="stylus">
.board-container {
	background-color: grey;
}
</style>
