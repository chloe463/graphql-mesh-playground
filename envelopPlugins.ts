import { useExtendContext } from "@envelop/core";
import { MeshPlugin } from "@graphql-mesh/types";

const myPlugin = {
	onExecue: (v) => {
		console.log(v);
	},
}

const plugins = [
	myPlugin,
	useExtendContext(async (v) => {
		return {
			...v,
			myCustomField: Math.floor(Math.random() * 1000),
			currentDateTime: new Date().toISOString(),
		};
	})
];

export default plugins;
