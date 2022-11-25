console.log("Hello World!");
import $ from "jquery"

function generateSeed(max = 1e10) {
	return Math.floor(Math.random() * max);
}

const canvas = $("#map-canvas").get(0) as HTMLCanvasElement;

$("#seed-button").click(() => $("#seed-inpt").val(generateSeed()));

$("#generate-button").click(() => {
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0, 0, 800, 400);
});
