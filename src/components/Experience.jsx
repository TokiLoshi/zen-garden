import { Grid } from "@react-three/drei";
import Sandbox from "../Sandbox/Sandbox";
import Plants from "../Plants/Plants";
import Creatures from "../Creatures/Creatures";

export default function Experience() {
	return (
		<>
			<Grid
				sectionSize={3}
				sectionColor={"white"}
				sectionThickness={1}
				cellSize={1}
				cellColor={"#6f6f6f"}
				cellThickness={0.6}
				infiniteGrid
				fadeDistance={50}
				fadeStrength={5}
			/>
			<Sandbox />
			<Plants />
			<Creatures />
		</>
	);
}
