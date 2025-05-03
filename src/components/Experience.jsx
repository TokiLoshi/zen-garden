import { Crate } from "./sandbox/Crate";

export default function Experience() {
	console.log("Testing crate: ", Crate);
	return (
		<>
			<Crate />
			<mesh>
				<boxGeometry />
				<meshStandardMaterial color='orange' />
			</mesh>
		</>
	);
}
