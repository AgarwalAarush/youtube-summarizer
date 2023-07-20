<template>
	<main class="create">
		<p>Create View</p>
		<div class="pdf-options">
			<div class="url-submission">
				<input
					v-model="message"
					class="url-input-bar"
					placeholder="URL"
				/>
				<button @click="generate_pdf">Submit</button>
			</div>
			<a 
        v-if="document_created"
        class="download-button"
        href="../../backend/resources/documents/ykZiNBUN4GM.pdf" 
        download
				>Document Link</a
			>
		</div>
	</main>
</template>

<script>
import { generatePDF } from "@/main"
export default {
	name: "CreateView",
	data() {
		return {
			message: "",
      document_created: false,
		};
	},
	methods: {
		generate_pdf() {
			console.log("Called GPDF Function");
			generatePDF(this.message);
		}
	},
};
</script>

<style>

.pdf-options {
  display: flex;
  flex-direction: column; 
  margin: 10px;
}

.url-submission {
  display: flex;
  justify-content: center;
  padding: 0px;
}

input {
	width: 500px;
	height: 25px;
  border-radius: 5px;
  border-width: 1px;
  box-sizing: border-box;
  margin-right: 16px;
}

button {
  background-color: #ffffff;
  height: 25px;
  width: 100px;
  border-width: 1px;
  border-radius: 5px;
  box-sizing: border-box;
}

.download-button {
  margin: 15px;
}

</style>
